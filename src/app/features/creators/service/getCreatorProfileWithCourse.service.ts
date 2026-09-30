import { courses, creators } from "@/data/coursesData";
import { Creator } from "../types/creator";
import { Course } from "../../courses/types/course.type";
export type CreatorProfileResponse = {
  creator: Creator;
  courses: Course[];
};

export async function getCreatorProfileWithCourses(
  username: string
): Promise<CreatorProfileResponse | null> {
  const creator = creators.find((c) => c.username === username);

  if (!creator) {
    return null;
  }

  const creatorCourses = courses.filter((course) => course.creatorId === creator.id);

  return {
    creator,
    courses: creatorCourses,
  };
}