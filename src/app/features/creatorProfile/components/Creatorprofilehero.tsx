/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import FollowButton from './Followbutton'

const formatNumber = (n: number) =>
    new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)

export default function CreatorProfileHero({ creator }: { creator: any }) {

    const creatorData = creator?.creator;

    const followers = creatorData.followersCount ?? creatorData.totalStudents ?? 0
    const followersLabel = creatorData.followersCount != null ? 'Followers' : 'Students'

    return (
        <section className='relative w-full overflow-hidden bg-[#0339e3] text-white'>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 [background-position:50%_0] [background-size:60px_60px] md:[background-size:120px_120px]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
                }}
            />
            <div className="mx-auto max-w-330 py-36">
                {/* Avatar + name */}
                <div className="flex items-center gap-5">
                    <img
                        src={creatorData.avatar}
                        alt={creatorData.name}
                        className="h-24 w-24 shrink-0 rounded-3xl bg-pink-200 object-cover"
                    />
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-bold sm:text-4xl">{creatorData.name}</h1>
                            <span className="rounded-full bg-[#D9F91B] px-4 py-1 text-sm font-medium text-neutral-900">
                                Creator
                            </span>
                        </div>
                        <p className="mt-1 text-lg text-white/90">{creatorData.title}</p>
                    </div>
                </div>

                {/* Bio */}
                <p className="mt-10 max-w-4xl text-lg leading-8 text-white/95">{creatorData.bio}</p>

                {/* Stats + follow */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-4">
                        <span className="rounded-full bg-white px-6 py-3 text-lg text-neutral-900">
                            <span className="text-[#0A2BF0]">{creatorData.coursesCount ?? creator.courses?.length ?? 0}</span>{' '}
                            Products
                        </span>
                        <span className="rounded-full bg-white px-6 py-3 text-lg text-neutral-900">
                            <span className="text-[#0A2BF0]">{formatNumber(followers)}</span> {followersLabel}
                        </span>
                    </div>
                    <FollowButton />
                </div>
            </div>
        </section>
    )
}