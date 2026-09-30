import { courses, creators } from "@/data/coursesData";

const PAGE_SIZE = 15; // courses per page

type Filters = {
    q?: string;
    category?: string;
    level?: string;
    sort?: string;
    page?: number;
};

// Slug
const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export async function getAllCourses(filters: Filters = {}) {
    const { q, category, level, sort, page = 1 } = filters;

    // Add creator to every course
    const creatorMap = new Map(creators.map((c) => [c.id, c]));
    let result = courses.map((course) => ({
        ...course,
        creator: creatorMap.get(course.creatorId) || null,
    }));

    // Search: title, subtitle, category or creator name
    if (q) {
        const text = q.toLowerCase();
        result = result.filter(
            (c) =>
                c.title.toLowerCase().includes(text) ||
                c.subtitle.toLowerCase().includes(text) ||
                c.category.toLowerCase().includes(text) ||
                c.creator?.name.toLowerCase().includes(text)
        );
    }

    // Filter by category ("featured" means all)
    if (category && category !== "featured") {
        result = result.filter((c) => toSlug(c.category) === category);
    }

    // Filter by level
    if (level) {
        result = result.filter((c) => c.level.toLowerCase() === level);
    }

    // Sort
    const price = (c: (typeof result)[number]) => c.discountPrice ?? c.price;

    if (sort === "newest") {
        result.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
    } else if (sort === "popular") {
        result.sort((a, b) => b.totalRatings - a.totalRatings);
    } else if (sort === "price-asc") {
        result.sort((a, b) => price(a) - price(b));
    } else if (sort === "price-desc") {
        result.sort((a, b) => price(b) - price(a));
    }

    // Pagination
    const totalCourses = result.length;
    const totalPages = Math.max(1, Math.ceil(totalCourses / PAGE_SIZE));
    const currentPage = Math.min(Math.max(page, 1), totalPages); // keep page in range
    const start = (currentPage - 1) * PAGE_SIZE;

    return {
        courses: result.slice(start, start + PAGE_SIZE),
        totalCourses,
        totalPages,
        page: currentPage,
    };
}