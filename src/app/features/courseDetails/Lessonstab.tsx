import { FaVideo } from 'react-icons/fa'
import { Course } from '../courses/types/course.type'

const heading = 'text-xl font-semibold text-neutral-900'
const text = 'leading-relaxed text-neutral-600'

export default function LessonsTab({
  course,
  progress = 0,
}: {
  course: Course
  progress?: number // 0 - 100
}) {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className={heading}>Explore the Modules</h2>
        <p className={text}>
          Immerse yourself in the course content as we break down each module into comprehensive
          lessons, providing practical insights and hands-on experiences.
        </p>
      </section>

      <section className="space-y-5">
        <h3 className={heading}>Lesson List</h3>
        <ul className="space-y-6">
          {course.lessons.map((lesson) => (
            <li key={lesson.id} className="flex gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#D4FF1A] text-2xl text-neutral-900">
                <FaVideo />
              </span>
              <div>
                <p className="text-neutral-900">{lesson.moduleTitle}</p>
                <p className={text}>{lesson.moduleSubtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={heading}>Lesson Content</h3>
        <p className={text}>
          Engage with each lesson through captivating video content, detailed textual
          explanations, and interactive elements. Download resources, complete assignments, and
          test your understanding with quizzes.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={heading}>Lesson Progress Tracking</h3>
        <p className={text}>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature
          guiding you through your learning journey.
        </p>

        <div className="rounded-2xl border border-neutral-200 p-4">
          <p className="text-sm text-neutral-900">Learning Progress</p>
          <p className="mt-1 text-4xl font-bold text-neutral-900">{progress}%</p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full rounded-full bg-[#D4FF1A]" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>
    </div>
  )
}