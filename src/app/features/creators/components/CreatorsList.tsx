import Link from 'next/link'
import React from 'react'
import { Creator } from '../types/creator'

// export type CreatorWithCourses = {
//   id: string
//   name: string
//   username: string
//   title: string
//   bio: string
//   avatar: string
//   rating: number
//   totalStudents: number
//   coursesCount: number
//   courses: unknown[]
// }

const formatNumber = (n: number) =>
  new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
      {children}
    </span>
  )
}

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link
      href={`/creators/${creator.username}`}
      aria-label={`View ${creator.name}'s profile`}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-neutral-300 bg-white p-4 transition-colors hover:border-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
    >
      {/* Header: avatar + name */}
      <div className="flex items-center gap-4">
        <img
          src={creator.avatar}
          alt={creator.name}
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-2xl bg-pink-200 object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-bold text-neutral-900">{creator.name}</h3>
            <span className="shrink-0 rounded-full bg-lime-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900">
              Creator
            </span>
          </div>
          <p className="truncate text-sm text-neutral-500">{creator.title}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">{creator.bio}</p>

      {/* Stats */}
      <div className="flex flex-wrap gap-2">
        <Stat>{creator.coursesCount} Products</Stat>
        <Stat>{formatNumber(creator.totalStudents)} Students</Stat>
      </div>

      {/* Footer: rating + CTA */}
      <div className="mt-auto flex items-center justify-between border-t border-neutral-200 pt-4">
        <span className="text-base text-neutral-600">
          {creator.rating.toFixed(1)} <span className="text-neutral-400">★</span>
        </span>
        <span className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-lime-300 group-hover:text-neutral-900">
          View profile
        </span>
      </div>
    </Link>
  )
}

export default function CreatorsList({ creatorsList }: { creatorsList: Creator[] }) {
  if (!creatorsList?.length) {
    return (
      <p className="py-16 text-center text-neutral-500">
        No creators found. Try a different search.
      </p>
    )
  }

  return (
    <section className="mx-auto grid max-w-330 grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {creatorsList.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </section>
  )
}