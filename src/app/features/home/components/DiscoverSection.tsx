'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { INITIAL_CATEGORIES, MORE_CATEGORIES } from '@/data/categoriesData';

export default function DiscoverSection() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Current category from URL, if no category show featured
    const currentCategory = searchParams.get('category') || 'Featured';

    // More toggle state
    const [showMore, setShowMore] = useState(false);

    // Category list
    const displayedCategories = showMore
        ? [...INITIAL_CATEGORIES, ...MORE_CATEGORIES]
        : INITIAL_CATEGORIES;

    // Update url by category name search 
    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category.toLowerCase() === 'featured') {
            params.delete('category');
        } else {
            // create category name slug
            const slug = category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
            params.set('category', slug);
        }

        router.push(`?${params.toString()}`, { scroll: false });
    };

    // Check active category
    const isSelected = (cat: string) => {
        const slug = cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
        if (cat === 'Featured' && (!searchParams.get('category') || searchParams.get('category') === 'featured')) {
            return true;
        }
        return searchParams.get('category') === slug;
    };

    return (
        <section className="w-full bg-white py-6 sm:py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                    Discover Your Passion, <br className="hidden sm:inline" />
                    Build Your Skills
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-4xl mx-auto font-normal leading-relaxed">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>

                {/* Category Pills Container */}
                <div className="mt-10 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-5xl mx-auto transition-all duration-300">
                    {displayedCategories.map((category) => {
                        const active = isSelected(category);
                        return (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 cursor-pointer select-none ${active
                                    ? 'bg-[#ccff00] text-black hover:bg-[#b8e600]'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}

                    {/* + More / - Less Button */}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="px-4 py-2.5 rounded-full text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                    >
                        {showMore ? '- Less' : '+ More'}
                    </button>
                </div>

            </div>
        </section>
    );
}