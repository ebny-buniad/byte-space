import Link from 'next/link'

export type Tab = 'about' | 'lessons' | 'reviews'

const TABS: { value: Tab; label: string }[] = [
    { value: 'about', label: 'About' },
    { value: 'lessons', label: 'Lessons' },
    { value: 'reviews', label: 'Reviews' },
]

export default function CourseTabs({ active }: { active: Tab }) {
    return (
        <nav aria-label="Course sections" className="flex flex-wrap gap-3">
            {TABS.map((tab) => (
                <Link
                    key={tab.value}
                    href={`?tab=${tab.value}`}
                    scroll={false}
                    aria-current={tab.value === active ? 'page' : undefined}
                    className={`inline-flex h-11 items-center rounded-full px-5 text-base ${tab.value === active
                            ? 'bg-[#D4FF1A] font-medium text-neutral-900'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                >
                    {tab.label}
                </Link>
            ))}
        </nav>
    )
}