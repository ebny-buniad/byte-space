import CourseFilters from '@/app/features/courses/components/Coursefilters'
import CourseSearchBar from '@/app/features/courses/components/CourseSearchBar'
import React from 'react'

export default function CoursesPage() {
    return (
        <div>
            <CourseSearchBar />
            <CourseFilters />
        </div>
    )
}
