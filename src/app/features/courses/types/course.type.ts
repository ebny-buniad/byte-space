// src/app/features/courses/types/course.type.ts

export type Creator = {
  id: string;
  name: string;
  username: string;
  title: string;
  avatar: string;
  bio: string;
  rating: number;
  totalStudents: number;
  coursesCount: number;
};

export type CourseAbout = {
  description: string;
  keyPoints: string[];
  sneakPeekVideoId: string;
};

// A single video inside a module
export type VideoLesson = {
  id: string;
  title: string;
  duration: string; // "mm:ss"
  youtubeVideoId: string;
  isPreview: boolean;
};

// A module (what the data calls a "lesson") containing videos
export type ModuleLesson = {
  id: string;
  moduleTitle: string;
  moduleSubtitle: string;
  videos: VideoLesson[];
};

export type Review = {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  totalRatings: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  creatorId: string;
  username: string;
  about: CourseAbout;
  lessons: ModuleLesson[];
  reviews: Review[];
  creator?: Creator | null;
};

// Backwards-compatible alias so existing `import { Lesson }` keeps working
export type Lesson = ModuleLesson;