import React from 'react'

const pill =
    'inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-neutral-800 transition-colors hover:border-[#0A2BF0]'

// Presentational for now. Wire to searchParams or state when filtering is ready.
export default function CourseFilterBar() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3">
                <button type="button" className={pill}>Filter</button>
                <button type="button" className={pill}>Level</button>
                <button type="button" className={pill}>Category</button>
            </div>
            <button type="button" className={pill}>Most relevant</button>
        </div>
    )
}