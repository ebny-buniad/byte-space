import { courses, creators } from "@/data/coursesData";

export async function getCourseBySlug(slug: string) {
  const course = courses.find((c) => c.slug === slug);

  if (!course) return null;

  const creator = creators.find((c) => c.id === course.creatorId);

  return {
    ...course,
    creator: creator || null,
  };
}