import React from 'react'

export default function GridBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 [background-position:50%_0] [background-size:60px_60px] md:[background-size:120px_120px]"
            style={{
                backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
            }}
        />
    )
}
