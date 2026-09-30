'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const arrow =
    'grid h-11 w-16 place-items-center rounded-full border border-neutral-300 text-neutral-900'

export default function Pagination({
    page,
    totalPages,
}: {
    page: number
    totalPages: number
}) {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    if (totalPages <= 1) return null

    // Link to a page, keeping the other params (q, category, level, sort)
    function pageHref(p: number) {
        const params = new URLSearchParams(searchParams.toString())
        if (p === 1) params.delete('page')
        else params.set('page', String(p))
        const qs = params.toString()
        return qs ? `${pathname}?${qs}` : pathname
    }

    // Show up to 5 page numbers around the current page
    const start = Math.max(1, Math.min(page - 2, totalPages - 4))
    const end = Math.min(totalPages, start + 4)
    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i)

    return (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-6 pb-12">
            {/* Previous */}
            {page > 1 ? (
                <Link href={pageHref(page - 1)} aria-label="Previous page" className={`${arrow} hover:bg-neutral-50`}>
                    <FaChevronLeft />
                </Link>
            ) : (
                <span aria-disabled="true" className={`${arrow} opacity-40`}>
                    <FaChevronLeft />
                </span>
            )}

            {/* Page numbers */}
            <div className="flex items-center gap-6 text-lg font-medium">
                {pages.map((p) =>
                    p === page ? (
                        <span key={p} aria-current="page" className="text-neutral-300">
                            {p}
                        </span>
                    ) : (
                        <Link key={p} href={pageHref(p)} className="text-neutral-900 hover:text-neutral-500">
                            {p}
                        </Link>
                    )
                )}
            </div>

            {/* Next */}
            {page < totalPages ? (
                <Link href={pageHref(page + 1)} aria-label="Next page" className={`${arrow} hover:bg-neutral-50`}>
                    <FaChevronRight />
                </Link>
            ) : (
                <span aria-disabled="true" className={`${arrow} opacity-40`}>
                    <FaChevronRight />
                </span>
            )}
        </nav>
    )
}