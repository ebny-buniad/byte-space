import { FaSignal, FaStar } from 'react-icons/fa'
import { Course } from '../courses/types/course.type'
import ShareButton from './Sharebutton'

const badge =
    'inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-base text-neutral-900'

export default function CourseHeader({ course }: { course: Course }) {
    return (
        <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">{course.title}</h1>
                <p className="mt-2 text-xl font-medium text-white">{course.subtitle}</p>

                <p className="mt-6 text-white">
                    by <span className="text-[#D4FF1A]">{course.creator?.name}</span>
                </p>

                <div className="mt-5 flex flex-wrap gap-4">
                    <span className={badge}>
                        <FaSignal className="text-[#0038E0]" />
                        {course.level}
                    </span>
                    <span className={badge}>
                        <FaStar className="text-[#0038E0]" />
                        {course.rating} ({course.totalRatings} reviews)
                    </span>
                </div>
            </div>

            <ShareButton />
        </div>
    )
}