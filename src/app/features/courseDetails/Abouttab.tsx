import { FaCheckCircle } from 'react-icons/fa'
import { Course } from '../courses/types/course.type'

export default function AboutTab({ course }: { course: Course }) {
  // Blank line in the text = new paragraph
  const paragraphs = course.about.description.split('\n\n')

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold text-neutral-900">Description</h2>
        <div className="mt-5 space-y-6 leading-relaxed text-neutral-600">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-neutral-900">Key Points</h2>
        <ul className="mt-5 space-y-3">
          {course.about.keyPoints.map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-neutral-600">
              <FaCheckCircle className="h-5 w-5 shrink-0 text-[#0038E0]" />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}