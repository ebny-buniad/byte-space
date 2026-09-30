import React from 'react'
import Link from 'next/link'
import { Course } from '@/app/features/courses/types/course.type'

/* ---------- Helpers ---------- */
function formatDuration(totalMinutes: number) {
  if (!totalMinutes) return null
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return [h ? `${h} hour${h > 1 ? 's' : ''}` : '', m ? `${m} mins` : ''].filter(Boolean).join(' ')
}

const AVATAR_BG = ['bg-pink-300', 'bg-amber-300', 'bg-sky-300', 'bg-emerald-300', 'bg-violet-300']

/* ---------- Small pieces ---------- */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:py-1.5 sm:text-xs text-neutral-700 backdrop-blur-md">
      {children}
    </span>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-[18px] w-[18px] fill-neutral-300" aria-hidden>
      <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8L10 1.5z" />
    </svg>
  )
}

function LevelIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-neutral-500" aria-hidden>
      <rect x="1" y="9" width="3" height="6" rx="1" />
      <rect x="6.5" y="5" width="3" height="10" rx="1" />
      <rect x="12" y="1" width="3" height="14" rx="1" />
    </svg>
  )
}

function AvatarStack({ course }: { course: Course }) {
  const people = (course.reviews ?? []).slice(0, 4)
  const total = course.totalRatings ?? 0
  const extra = Math.max(total - 4, 0)
  // Always show 4 slots; fall back to initials/color when there is no avatar image
  const slots = Array.from({ length: 4 }, (_, i) => people[i])

  return (
    <div className="flex items-center">
      {slots.map((p, i) => {
        const src = p?.avatar ?? p?.user?.avatar
        const name = p?.user?.name ?? p?.name ?? ''
        return (
          <span
            key={i}
            className={`-ml-2 first:ml-0 flex h-8 w-8 items-center justify-center overflow-hidden sm:h-9 sm:w-9 rounded-full border-2 border-white text-xs font-semibold text-neutral-700 ${AVATAR_BG[i % AVATAR_BG.length]}`}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={name} className="h-full w-full object-cover" />
            ) : (
              name.charAt(0).toUpperCase()
            )}
          </span>
        )
      })}
      {extra > 0 && (
        <span className="-ml-2 flex h-8 min-w-8 sm:h-9 sm:min-w-9 items-center justify-center rounded-full border-2 border-white bg-[#d4f21c] px-1.5 text-xs font-semibold text-neutral-800">
          {extra}+
        </span>
      )}
    </div>
  )
}

/* ---------- Card ---------- */
export default function CourseCard({ course }: { course: Course }) {
  const lessonCount = course.lessons?.length ?? 0
  const minutes = (course.lessons ?? []).reduce((sum, l) => sum + (l.duration ?? 0), 0)
  const duration = formatDuration(minutes)
  const commentCount = course.reviews?.length ?? 0
  const hasDiscount = course.discountPrice != null && course.discountPrice < course.price
  const finalPrice = hasDiscount ? course.discountPrice! : course.price

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block w-full min-w-0 rounded-3xl border border-neutral-300 bg-white p-3 outline-none sm:p-4 transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {/* Thumbnail with overlay pills */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.thumbnail} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
          <Pill>{lessonCount} Lessons</Pill>
          {duration && <Pill>{duration}</Pill>}
          <Pill>{commentCount} Comments</Pill>
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-4 flex min-w-0 items-start justify-between gap-3 sm:mt-5">
        <h3 className="min-w-0 flex-1 truncate text-lg font-semibold sm:text-xl text-neutral-900" title={course.title}>
          {course.title}
        </h3>
        <div className="flex shrink-0 items-center gap-1 text-neutral-500">
          <span className="text-lg">{course.rating.toFixed(1)}</span>
          <StarIcon />
        </div>
      </div>

      {course.creator && (
        <p className="mt-0.5 text-xs text-neutral-500">
          by <span className="text-blue-600">{course.creator.name}</span>
        </p>
      )}

      {/* Level + learners */}
      <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700">
          <LevelIcon />
          {course.level}
        </span>
        <AvatarStack course={course} />
      </div>

      {/* Price */}
      <p className="mt-4 flex items-baseline gap-1.5 sm:mt-5">
        <span className="text-2xl font-bold text-blue-700">${finalPrice}</span>
        <span className="text-xs text-neutral-500">/lifetime</span>
        {hasDiscount && (
          <span className="ml-1 text-sm text-neutral-400 line-through">${course.price}</span>
        )}
      </p>
    </Link>
  )
}