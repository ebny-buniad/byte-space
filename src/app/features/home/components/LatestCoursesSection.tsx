import React from 'react'
import { getLatestCourses } from '../services/latestCourses.service'
import CourseCard from '@/app/components/ui/Coursecard'
import { Course } from '../../courses/types/course.type'

export default async function LatestCoursesSection() {

  // Get all latest courses
  const latestCourses: Course[] = await getLatestCourses()

  return (
    <section className="mx-auto w-full max-w-330 overflow-x-hidden py-5">
      {latestCourses.length === 0 ? (
        <p className="text-center text-neutral-500">No courses yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  )
}