'use client'

import React, { useState } from 'react'

export default function FollowButton() {
    const [following, setFollowing] = useState(false)

    return (
        <button
            type="button"
            onClick={() => setFollowing((v) => !v)}
            aria-pressed={following}
            className={`rounded-full px-8 py-3 text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                following ? 'bg-white text-neutral-900' : 'bg-[#D9F91B] text-neutral-900 hover:bg-[#c8e815]'
            }`}
        >
            {following ? 'Following' : 'Follow'}
        </button>
    )
}