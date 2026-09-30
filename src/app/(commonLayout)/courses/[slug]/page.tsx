import AboutTab from '@/app/features/courseDetails/Abouttab'
import CourseHeader from '@/app/features/courseDetails/Courseheader'
import CourseSidebar from '@/app/features/courseDetails/Coursesidebar'
import CourseTabs, { type Tab } from '@/app/features/courseDetails/Coursetabs'
import CourseVideo from '@/app/features/courseDetails/Coursevideo'
import LessonsTab from '@/app/features/courseDetails/Lessonstab'
import ReviewsTab from '@/app/features/courseDetails/Reviewstab'
import { getCourseBySlug } from '@/app/features/courses/service/getSingleCourse.service'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// A param can be a string or string[]; take the first value
const first = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value

// Grid lines drawn on the blue background
const gridLines = {
    backgroundImage:
        'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
}

// Course details page (dynamic)
export default async function CourseDetails({ params, searchParams }: Props) {

    // Get slug from url
    const { slug } = await params;
    const query = await searchParams;

    // Get course details by slug
    const courseDetails = await getCourseBySlug(slug);

    // No course with this slug -> 404 page
    if (!courseDetails) notFound();

    // ?tab=about | lessons | reviews   (default: about)
    const tabParam = first(query.tab)
    const tab: Tab = tabParam === 'lessons' || tabParam === 'reviews' ? tabParam : 'about'

    // ?rating=5 (used by the reviews tab)
    const rating = Number(first(query.rating)) || 0;

    return (
        <div className="relative w-full overflow-x-clip">
            <div className="mx-auto grid w-full max-w-330 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,412px)] lg:grid-rows-[auto_auto_1fr] lg:gap-x-12">

                {/* Blue background: rows 1-2 only, full screen width */}
                <div aria-hidden="true" className="relative col-span-full row-span-2 row-start-1">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[#0339e3] [background-position:50%_0] [background-size:60px_60px] md:[background-size:120px_120px]"
                        style={gridLines}
                    />
                </div>

                {/* Title, creator, badges, share (pt-* = space above the title) */}
                <div className="relative col-start-1 row-start-1 pb-8 pt-16 lg:col-span-full mt-25">
                    <CourseHeader course={courseDetails} />
                </div>

                {/* Sneak peek video (pb-* = blue space below the video) */}
                <div className="relative col-start-1 row-start-2 pb-16">
                    <CourseVideo
                        thumbnail={courseDetails.thumbnail}
                        videoId={courseDetails.about.sneakPeekVideoId}
                        title={courseDetails.title}
                    />
                </div>

                {/* Lessons, price, enroll, creator */}
                <div className="relative col-start-1 row-start-3 mt-6 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-0 lg:self-start">
                    <CourseSidebar course={courseDetails} />
                </div>

                {/* Tabs + tab content */}
                <div className="col-start-1 row-start-4 space-y-8 py-12 lg:row-start-3">
                    <CourseTabs active={tab} />

                    {tab === 'about' && <AboutTab course={courseDetails} />}
                    {tab === 'lessons' && <LessonsTab course={courseDetails} />}
                    {tab === 'reviews' && <ReviewsTab course={courseDetails} rating={rating} />}
                </div>
            </div>
        </div>
    )
}