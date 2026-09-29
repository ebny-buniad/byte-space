
import { courses, creators } from "@/data/coursesData";

export async function getLatestCourses(limit: number = 6) {
    const creatorMap = new Map(creators.map((c) => [c.id, c]));

    const coursesWithCreators = courses.map((course) => ({
        ...course,
        creator: creatorMap.get(course.creatorId) || null,
    }));

    return coursesWithCreators.slice(-limit).reverse();
}
