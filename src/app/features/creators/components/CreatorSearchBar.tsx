'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SEARCH_PARAM = 'q'
const DEBOUNCE_MS = 300

export default function CreatorSearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const urlQuery = searchParams.get(SEARCH_PARAM) ?? ''

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

  function updateUrl(value: string, mode: 'push' | 'replace') {
    const params = new URLSearchParams(searchParams.toString())

    const trimmed = value.trim()
    if (trimmed) params.set(SEARCH_PARAM, trimmed)
    else params.delete(SEARCH_PARAM)
    lastPushed.current = trimmed

    params.delete('page') // a new search goes back to the first page

    const qs = params.toString()
    const href = qs ? `${pathname}?${qs}` : pathname
    if (mode === 'push') router.push(href, { scroll: false })
    else router.replace(href, { scroll: false })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value)

    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => updateUrl(value, 'replace'), DEBOUNCE_MS)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (timer.current) clearTimeout(timer.current)
    updateUrl(query, 'push')
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
          Find Best Course Creators
        </h1>

        <form role="search" onSubmit={handleSubmit} className="w-full">
          <label className="relative block">
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
        </form>
      </div>
    </section>
  )
}