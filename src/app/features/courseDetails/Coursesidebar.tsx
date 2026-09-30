import Link from 'next/link'
import { FaCertificate, FaFolderOpen, FaRegComments, FaVideo } from 'react-icons/fa'
import { Course } from '../courses/types/course.type'

const INCLUDES = [
  { icon: <FaFolderOpen />, label: 'Learning Resources' },
  { icon: <FaVideo />, label: 'Quality Lesson Videos' },
  { icon: <FaCertificate />, label: 'Certificate of Completion' },
  { icon: <FaRegComments />, label: 'Private Consultation' },
]

// 12 -> "12 mins", "12:30" -> "12:30"
const formatDuration = (duration: number | string) =>
  typeof duration === 'number' ? `${duration} mins` : duration

export default function CourseSidebar({ course }: { course: Course }) {
  const { lessons, creator } = course

  // Every video of every module in one list
  const videos = lessons.flatMap((lesson) => lesson.videos)

  const totalMinutes = videos.reduce((sum, video) => sum + (Number(video.duration) || 0), 0)
  const length = totalMinutes >= 60 ? `${Math.round(totalMinutes / 60)} hours` : `${totalMinutes} mins`

  const price = course.discountPrice ?? course.price
  const moreVideos = videos.length - 3

  return (
    <aside className="rounded-3xl border border-neutral-200 bg-white p-8">
      {/* Lessons preview */}
      <h2 className="text-2xl font-semibold text-neutral-900">
        {videos.length} Lessons {totalMinutes > 0 && `(${length})`}
      </h2>

      <ol className="mt-5 space-y-3">
        {videos.slice(0, 3).map((video, i) => (
          <li key={i} className="flex items-start gap-4 text-neutral-900">
            <span className="w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span className="flex-1">{video.title}</span>
            <span className="shrink-0 text-[#0038E0]">{formatDuration(video.duration)}</span>
          </li>
        ))}
      </ol>

      {moreVideos > 0 && <p className="mt-3 text-neutral-500">{moreVideos} more videos</p>}

      {/* Price */}
      <p className="mt-8 text-neutral-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-[#0038E0]">${price}</span>
        <span className="text-neutral-500">/lifetime</span>
        {course.discountPrice && (
          <span className="text-neutral-400 line-through">${course.price}</span>
        )}
      </p>

      <button
        type="button"
        className="mt-5 h-12 w-full rounded-full bg-[#D4FF1A] text-base text-neutral-900 hover:brightness-95"
      >
        Enroll Now
      </button>

      {/* What is included */}
      <h3 className="mt-8 text-xl font-semibold text-neutral-900">This course include</h3>
      <ul className="mt-4 space-y-4">
        {INCLUDES.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-neutral-600">
            <span className="text-lg text-[#0038E0]">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>

      {/* Creator */}
      {creator && (
        <div className="mt-8 border-t border-neutral-200 pt-6">
          <div className="flex items-center gap-3">
            <img src={creator.avatar} alt={creator.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-lg text-neutral-900">{creator.name}</p>
              <p className="text-neutral-500">{creator.title}</p>
            </div>
          </div>

          <p className="mt-6 text-neutral-500">{creator.bio}</p>

          <Link
            href={`/creators/${creator.username}`}
            className="mt-6 inline-flex h-11 items-center rounded-full border border-neutral-300 px-5 text-neutral-900 hover:bg-neutral-50"
          >
            See Full Profile
          </Link>
        </div>
      )}
    </aside>
  )
}