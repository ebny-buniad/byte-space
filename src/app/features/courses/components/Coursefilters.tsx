'use client'

import { ReactNode } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaFilter, FaShapes, FaSignal, FaSortAmountDown } from 'react-icons/fa'

type Option = { value: string; label: string }

const CATEGORIES: Option[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'music', label: 'Music' },
    { value: 'drawing-painting', label: 'Drawing & Painting' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'animation', label: 'Animation' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'creative-marketing', label: 'Creative Marketing' },
    { value: 'cooking', label: 'Cooking' },
]

const LEVELS: Option[] = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
]

const SORTS: Option[] = [
    { value: 'relevant', label: 'Most relevant' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Most popular' },
    { value: 'price-asc', label: 'Price: low to high' },
    { value: 'price-desc', label: 'Price: high to low' },
]

// Values that are the default are removed from the URL
const DEFAULTS = { category: 'featured', level: '', sort: 'relevant' }

// Grid pill: icon + text side by side, both centered
const pill =
    'relative grid py-4 grid-flow-col items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-base leading-none text-neutral-900 hover:bg-neutral-50 focus-within:ring-4 focus-within:ring-[#D4FF1A]/70 disabled:hover:bg-white'

function SelectPill({
    icon,
    label,
    placeholder,
    value,
    options,
    onChange,
}: {
    icon: ReactNode
    label: string
    placeholder?: string
    value: string
    options: Option[]
    onChange: (value: string) => void
}) {
    const text = options.find((o) => o.value === value)?.label ?? placeholder

    return (
        <label className={`${pill} cursor-pointer`}>
            {icon}
            <span>{text}</span>

            <select
                aria-label={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default function CourseFilters() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const category = searchParams.get('category') ?? DEFAULTS.category
    const level = searchParams.get('level') ?? DEFAULTS.level
    const sort = searchParams.get('sort') ?? DEFAULTS.sort

    const hasFilters =
        category !== DEFAULTS.category || level !== DEFAULTS.level || sort !== DEFAULTS.sort

    function update(changes: Record<string, string>) {
        const params = new URLSearchParams(searchParams.toString())

        for (const [key, value] of Object.entries(changes)) {
            const isDefault = value === DEFAULTS[key as keyof typeof DEFAULTS]
            if (isDefault) params.delete(key)
            else params.set(key, value)
        }

        params.delete('page')
        const qs = params.toString()
        router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    }

    return (
        <div className="space-y-10 max-w-330 mx-auto pt-20 pb-6 ">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    {/* Clears all filters */}
                    <button
                        type="button"
                        disabled={!hasFilters}
                        onClick={() => update(DEFAULTS)}
                        className={pill}
                    >
                        <FaFilter />
                        <span>Filter</span>
                    </button>

                    <SelectPill
                        icon={<FaSignal />}
                        label="Level"
                        placeholder="Level"
                        value={level}
                        options={LEVELS}
                        onChange={(v) => update({ level: v })}
                    />

                    <SelectPill
                        icon={<FaShapes />}
                        label="Category"
                        placeholder="Category"
                        // "featured" is the default, so show the "Category" placeholder for it
                        value={category === DEFAULTS.category ? '' : category}
                        options={CATEGORIES}
                        onChange={(v) => update({ category: v || DEFAULTS.category })}
                    />
                </div>

                <SelectPill
                    icon={<FaSortAmountDown />}
                    label="Sort by"
                    value={sort}
                    options={SORTS}
                    onChange={(v) => update({ sort: v })}
                />
            </div>

            {/* Category chips */}
            <div className="flex justify-between overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CATEGORIES.map((c) => (
                    <button
                        key={c.value}
                        type="button"
                        onClick={() => update({ category: c.value })}
                        className={`shrink-0 rounded-full px-6 py-3 text-base ${c.value === category
                                ? 'bg-[#D4FF1A] font-medium text-neutral-900'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                    >
                        {c.label}
                    </button>
                ))}
            </div>
        </div>
    )
}