/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation'
import React from 'react'
import { getCreatorProfileWithCourses } from '@/app/features/creators/service/getCreatorProfileWithCourse.service'
import CreatorProfileHero from '@/app/features/creatorProfile/components/Creatorprofilehero'
import CourseFilterBar from '@/app/features/creatorProfile/components/Coursefilterbar'
import CourseCard from '@/app/components/ui/Coursecard'

export default async function CreatorProfilePage({
    params,
}: {
    params: Promise<{ username: string }>
}) {
    // Get username from params
    const { username } = await params

    // Get Creator profile by username
    const creator = await getCreatorProfileWithCourses(username)

    if (!creator) notFound()

    return (
        <main>
            <CreatorProfileHero creator={creator} />

            <section className="mx-auto max-w-330 py-10">
                <CourseFilterBar />

                {creator.courses?.length ? (
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {creator.courses.map((course: any) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <p className="py-16 text-center text-neutral-500">
                        {creator?.creator.name} hasn&apos;t published any courses yet.
                    </p>
                )}
            </section>
        </main>
    )
}