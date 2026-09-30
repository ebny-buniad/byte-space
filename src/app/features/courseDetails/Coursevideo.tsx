'use client'

import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

export default function CourseVideo({
    thumbnail,
    videoId,
    title,
}: {
    thumbnail: string
    videoId: string
    title: string
}) {
    const [playing, setPlaying] = useState(false)

    return (
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-neutral-200">
            {playing ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                />
            ) : (
                <>
                    <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label="Play sneak peek video"
                        className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-black/30 backdrop-blur-sm hover:bg-black/40"
                    >
                        <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-neutral-900">
                            <FaPlay className="ml-1" />
                        </span>
                    </button>
                </>
            )}
        </div>
    )
}