// 1. Creator Type Definition
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

// 2. About Section Type Definition
export type CourseAbout = {
  description: string;
  keyPoints: string[];
  sneakPeekVideoId: string;
};

// 3. Lesson Item Type Definition
export type Lesson = {
  id?: string;
  title?: string;
  duration?: number; // duration in minutes or seconds
  videoUrl?: string;
  isFreePreview?: boolean;
};

// 4. Review Item Type Definition
export type Review = {
  id?: string;
  rating?: number;
  comment?: string;
  createdAt?: string;
  user?: {
    name?: string;
    avatar?: string;
  };
};

// 5. Main Course Type Definition
export type Course = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
  price: number;
  discountPrice?: number; // Optional type for discounted price
  rating: number;
  totalRatings: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  category: string;
  creatorId: string;
  about: CourseAbout;
  lessons: Lesson[];
  reviews: Review[];
  creator?: Creator | null; // Detailed joined creator object
};