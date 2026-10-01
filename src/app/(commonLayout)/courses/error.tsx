'use client'

import GridBackground from '@/app/components/ui/GridBackground'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
    }, [error])

    return (
        <div className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#0339e3]">
            {/* Background Grid Container */}
            <div className="absolute inset-0 pointer-events-none">
                <GridBackground />
            </div>

            {/* Error Content Container */}
            <div className="relative z-10 mx-auto max-w-md px-4 py-12 text-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                    Something went wrong!
                </h2>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                    Failed to load this section. Please try again or refresh the page.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2.5 bg-white text-[#0339e3] rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md active:scale-95"
                >
                    Try again
                </button>
            </div>
        </div>
    )
}