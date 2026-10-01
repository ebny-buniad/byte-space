import React from 'react'

/* ---------- Skeleton primitive ---------- */
function Bone({ className = '' }: { className?: string }) {
    return <div className={`animate-pulse bg-neutral-200 ${className}`} aria-hidden />
}

/* ---------- Course Card Skeleton ---------- */
export default function CourseCardSkeleton() {
    return (
        <div
            role="status"
            aria-busy="true"
            aria-label="Loading course"
            className="block w-full min-w-0 rounded-3xl border border-neutral-300 bg-white p-3 sm:p-4"
        >
            {/* Thumbnail with overlay pills */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-200 animate-pulse">
                <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
                    <div className="h-6 w-20 rounded-full bg-white/60 sm:h-7" />
                    <div className="h-6 w-24 rounded-full bg-white/60 sm:h-7" />
                    <div className="h-6 w-24 rounded-full bg-white/60 sm:h-7" />
                </div>
            </div>

            {/* Title + rating */}
            <div className="mt-4 flex min-w-0 items-start justify-between gap-3 sm:mt-5">
                <Bone className="h-6 w-3/4 rounded-md sm:h-7" />
                <Bone className="h-6 w-14 shrink-0 rounded-md sm:h-7" />
            </div>

            {/* Creator */}
            <Bone className="mt-1.5 h-3.5 w-28 rounded" />

            {/* Level + learners */}
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
                <Bone className="h-9 w-28 rounded-full" />
                <div className="flex items-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Bone
                            key={i}
                            className="-ml-2 first:ml-0 h-8 w-8 rounded-full border-2 border-white sm:h-9 sm:w-9"
                        />
                    ))}
                </div>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-1.5 sm:mt-5">
                <Bone className="h-8 w-16 rounded-md" />
                <Bone className="h-3.5 w-16 rounded" />
            </div>

            <span className="sr-only">Loading…</span>
        </div>
    )
}