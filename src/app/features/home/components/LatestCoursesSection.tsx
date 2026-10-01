import React, { Suspense } from 'react'
import { getLatestCourses } from '../services/latestCourses.service'
import CourseCard from '@/app/components/ui/Coursecard'
import CourseCardSkeleton from '@/app/components/ui/CourseCardSkeleton'
import { Course } from '../../courses/types/course.type'

// 1. Data fetching component
async function LatestCoursesList() {
  const latestCourses: Course[] = await getLatestCourses()

  if (latestCourses.length === 0) {
    return <p className="text-center text-neutral-500">No courses yet. Check back soon.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {latestCourses.slice(0, 6).map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

// 2. Main Section 
export default function LatestCoursesSection() {
  return (
    <section className="mx-auto w-full max-w-330 overflow-x-hidden py-5">
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <LatestCoursesList />
      </Suspense>
    </section>
  )
}