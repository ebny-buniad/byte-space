import CourseCard from '@/app/components/ui/Coursecard'
import CourseCardSkeleton from '@/app/components/ui/CourseCardSkeleton'
import CourseFilters from '@/app/features/courses/components/Coursefilters'
import CourseSearchBar from '@/app/features/courses/components/CourseSearchBar'
import Pagination from '@/app/features/courses/components/Pagination'
import { getAllCourses } from '@/app/features/courses/service/allCourses.service'
import React, { Suspense } from 'react'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// A param can be a string or string[]; take the first value
const first = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value

export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
    const params = await searchParams

    const parsedParams = {
        q: first(params.q),
        category: first(params.category),
        level: first(params.level),
        sort: first(params.sort),
        page: Number(first(params.page)) || 1,
    }

    // Load courses using the URL search, filters and page
    const { courses, totalPages, page } = await getAllCourses(parsedParams)

    // Dynamic key for re-triggering loader when search/filters change
    const suspenseKey = JSON.stringify(parsedParams)

    return (
        <div>
            <CourseSearchBar />
            <CourseFilters />

            {/* Display courses of the current page */}
            <div className="mx-auto w-full max-w-330 overflow-x-hidden py-10 sm:py-12">
                <Suspense
                    key={suspenseKey}
                    fallback={
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <CourseCardSkeleton key={index} />
                            ))}
                        </div>
                    }
                >
                    {courses.length === 0 ? (
                        <p className="text-center text-neutral-500">
                            No courses found. Try a different search or filter.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                            {courses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    )}
                </Suspense>
            </div>

            <Pagination page={page} totalPages={totalPages} />
        </div>
    )
}