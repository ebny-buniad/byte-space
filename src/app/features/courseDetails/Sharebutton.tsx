'use client'

import { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#D4FF1A] px-6 text-base text-neutral-900 hover:brightness-95"
    >
      <FaShareAlt />
      {copied ? 'Link copied' : 'Share'}
    </button>
  )
}