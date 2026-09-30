'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SEARCH_PARAM = 'q'
const TYPE_PARAM = 'type'
const DEBOUNCE_MS = 300

const TYPES = [
  { value: 'courses', label: 'Courses' },
  { value: 'creators', label: 'Creators' },
]

export default function CourseSearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const urlQuery = searchParams.get(SEARCH_PARAM) ?? ''
  const urlType = searchParams.get(TYPE_PARAM) ?? TYPES[0].value

  const [query, setQuery] = useState(urlQuery)
  const lastPushed = useRef(urlQuery)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keep the input in sync when the URL changes elsewhere (back/forward, links)
  useEffect(() => {
    if (urlQuery !== lastPushed.current) {
      lastPushed.current = urlQuery
      setQuery(urlQuery)
    }
  }, [urlQuery])

  // Clear any pending debounce on unmount
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  function updateUrl(next: { q?: string; type?: string }, mode: 'push' | 'replace') {
    const params = new URLSearchParams(searchParams.toString())

    if (next.q !== undefined) {
      const trimmed = next.q.trim()
      if (trimmed) params.set(SEARCH_PARAM, trimmed)
      else params.delete(SEARCH_PARAM)
      lastPushed.current = trimmed
    }

    if (next.type !== undefined) {
      params.set(TYPE_PARAM, next.type)
    }

    const qs = params.toString()
    const href = qs ? `${pathname}?${qs}` : pathname
    if (mode === 'push') router.push(href, { scroll: false })
    else router.replace(href, { scroll: false })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value)

    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => updateUrl({ q: value }, 'replace'), DEBOUNCE_MS)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (timer.current) clearTimeout(timer.current)
    updateUrl({ q: query }, 'push')
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0038E0] px-4 py-16 sm:py-20 h-90"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
        backgroundPosition: 'center top',
      }}
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 mt-22">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Find Your Next Course
        </h1>

        <form
          role="search"
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              name={SEARCH_PARAM}
              value={query}
              onChange={handleChange}
              placeholder="Search"
              autoComplete="off"
              className="h-13 w-full rounded-full bg-white py-4 pl-13 pr-5 text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4FF1A]/60"
            />
          </label>

          <label className="relative shrink-0">
            <span className="sr-only">Search in</span>
            <select
              name={TYPE_PARAM}
              value={urlType}
              onChange={(e) => updateUrl({ type: e.target.value }, 'push')}
              className="h-13 w-full cursor-pointer appearance-none rounded-full bg-[#D4FF1A] py-4 pl-6 pr-12 text-base font-medium text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70 sm:w-auto"
            >
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </label>
        </form>
      </div>
    </section>
  )
}