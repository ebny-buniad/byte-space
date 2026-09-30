import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { Course } from '../courses/types/course.type'

const STARS = [5, 4, 3, 2, 1]

// "2026-09-18" -> "12 days ago", "3 months ago", "a year ago"
function timeAgo(date: string) {
    const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
    if (days >= 365) {
        const years = Math.floor(days / 365)
        return years === 1 ? 'a year ago' : `${years} years ago`
    }
    if (days >= 30) {
        const months = Math.floor(days / 30)
        return months === 1 ? 'a month ago' : `${months} months ago`
    }
    if (days <= 0) return 'today'
    return days === 1 ? 'a day ago' : `${days} days ago`
}

// Shows `count` filled stars out of 5
function Stars({ count, className = 'h-5 w-5' }: { count: number; className?: string }) {
    return (
        <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <FaStar key={n} className={`${className} ${n <= count ? 'text-neutral-700' : 'text-neutral-200'}`} />
            ))}
        </div>
    )
}

export default function ReviewsTab({
    course,
    rating = 0, // 0 = all ratings
}: {
    course: Course
    rating?: number
}) {
    const { reviews } = course

    // Review ratings can be decimals (4.8), so round to a whole star: 4.8 -> 5
    const stars = (value: number) => Math.round(value)

    // How many reviews each star has
    const counts = STARS.map((star) => ({
        star,
        count: reviews.filter((r) => stars(r.rating) === star).length,
    }))

    const visibleReviews = rating ? reviews.filter((r) => stars(r.rating) === rating) : reviews

    const chip = 'inline-flex h-11 items-center gap-2 rounded-full px-5 text-base'
    const chipActive = 'bg-[#D4FF1A] font-medium text-neutral-900'
    const chipIdle = 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'

    return (
        <div className="space-y-8">
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-neutral-900">What Learners Are Saying</h2>
                <p className="leading-relaxed text-neutral-600">
                    Discover what our learners have to say about their experience with &apos;{course.title}
                    .&apos; Read reviews and ratings from individuals who have embarked on the transformative
                    journey of this course.
                </p>
            </section>

            {/* Rating summary */}
            <section className="flex flex-wrap items-center gap-8 rounded-3xl border border-neutral-200 p-6">
                <div className="grid h-36 w-32 shrink-0 place-items-center rounded-2xl bg-[#D4FF1A] text-center text-neutral-900">
                    <div>
                        <p className="text-sm">Ratings</p>
                        <p className="text-4xl font-bold">{course.rating}</p>
                    </div>
                </div>

                <ul className="min-w-64 flex-1 space-y-2">
                    {counts.map(({ star, count }) => (
                        <li key={star} className="flex items-center gap-4">
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
                                <div
                                    className="h-full rounded-full bg-[#D4FF1A]"
                                    style={{ width: `${reviews.length ? (count / reviews.length) * 100 : 0}%` }}
                                />
                            </div>
                            <Stars count={star} className="h-4 w-4" />
                            <span className="w-10 text-right text-neutral-600">{count}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Filter by rating */}
            <section className="space-y-5">
                <h3 className="text-xl font-semibold text-neutral-900">Individual Reviews:</h3>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="?tab=reviews"
                        scroll={false}
                        className={`${chip} ${rating === 0 ? chipActive : chipIdle}`}
                    >
                        All rating
                    </Link>

                    {STARS.map((star) => (
                        <Link
                            key={star}
                            href={`?tab=reviews&rating=${star}`}
                            scroll={false}
                            className={`${chip} ${rating === star ? chipActive : chipIdle}`}
                        >
                            <FaStar /> {star}
                        </Link>
                    ))}
                </div>

                {/* Review cards */}
                {visibleReviews.length === 0 ? (
                    <p className="text-neutral-500">No reviews for this rating yet.</p>
                ) : (
                    <ul className="space-y-6">
                        {visibleReviews.map((review) => (
                            <li key={review.id} className="rounded-3xl border border-neutral-200 p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.userAvatar}
                                            alt={review.userName}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <p className="text-lg text-neutral-900">{review.userName}</p>
                                    </div>
                                    <span className="text-sm text-neutral-500">{timeAgo(review.date)}</span>
                                </div>

                                <div className="mt-5">
                                    <Stars count={stars(review.rating)} />
                                </div>
                                <p className="mt-4 leading-relaxed text-neutral-600">{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}