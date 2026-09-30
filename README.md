# ByteSpace
**Live Link** [Click Here](https://byte-space-ochre.vercel.app/)

ByteSpace is an online course marketplace where learners can discover courses, explore creators, and read course details before enrolling. It is built with Next.js (App Router) and uses a feature-based folder structure.

## Features

- **Home page** with a hero section, course showcase, discover section, learning paths, latest courses, creator banner, partner logos, and testimonials
- **Courses page**
  - Search bar
  - Filters by level and category, plus category chips
  - Sorting: most relevant, newest, most popular, price low to high, price high to low
  - Pagination
- **Course details page**
  - Course header, sneak peek video, and a sidebar with lessons, price, and creator info
  - Three tabs: **About**, **Lessons**, and **Reviews**
  - Reviews can be filtered by star rating
- **Creators page** with a searchable list of creators
- **Creator profile page** with the creator's info, follow button, and their courses
- **Authentication pages**: sign in and sign up forms with validation
- **Shareable URLs**: search text, filters, sorting, page number, and the active tab are stored in the URL (for example `/courses?q=react&level=beginner&sort=popular&page=2`), so any view can be shared or bookmarked
- Responsive design for mobile, tablet, and desktop

## Tech Stack

| Technology | Used for |
| --- | --- |
| [Next.js](https://nextjs.org/) | Framework (App Router, server components, routing) |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [daisyUI](https://daisyui.com/) | UI component classes on top of Tailwind |
| [TanStack Form](https://tanstack.com/form) | Form state and validation (sign in / sign up) |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons (Font Awesome set) |
| TypeScript | Type safety |
| pnpm | Package manager |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [pnpm](https://pnpm.io/installation)

### Installation

```bash
# 1. Clone the repository
git clone <https://github.com/ebny-buniad/byte-space.git>

# 2. Go to the project folder
cd byte-space

# 3. Install dependencies
pnpm i

# 4. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server on port 3000 |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Check the code with ESLint |

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/courses` | All courses with search, filters, sorting, and pagination |
| `/courses/[slug]` | Single course details (About, Lessons, Reviews) |
| `/creators` | All creators |
| `/creators/[username]` | Creator profile with their courses |
| `/auth/sign-in` | Sign in |
| `/auth/sign-up` | Sign up |

### URL parameters

| Parameter | Used on | Example |
| --- | --- | --- |
| `q` | Courses, Creators | `?q=figma` |
| `category` | Courses | `?category=ui-ux-design` |
| `level` | Courses | `?level=beginner` |
| `sort` | Courses | `?sort=price-asc` |
| `page` | Courses | `?page=2` |
| `tab` | Course details | `?tab=lessons` |
| `rating` | Course details (Reviews tab) | `?tab=reviews&rating=5` |

## Folder Structure

The project uses a **feature-based** structure. Each feature keeps its own components, services, and types together, while shared UI lives in `app/components`.

```
byte-space
├── public/                     # Static files (images, logos, icons)
│   └── images/
│       ├── hero-img/           # Hero section images
│       ├── logo/               # Partner logos
│       └── testimonials/       # Testimonial photos
└── src/
    ├── app/
    │   ├── (auth)/             # Auth route group (own layout)
    │   │   └── auth/
    │   │       ├── sign-in/
    │   │       └── sign-up/
    │   ├── (commonLayout)/     # Pages that share the navbar and footer
    │   │   ├── courses/        # /courses and /courses/[slug]
    │   │   ├── creators/       # /creators and /creators/[username]
    │   │   ├── layout.tsx
    │   │   └── page.tsx        # Home page
    │   ├── (dashboard)/        # Dashboard route group
    │   ├── components/
    │   │   ├── shared/         # Navbar, Footer
    │   │   ├── ui/             # Reusable UI (CourseCard, GridBackground)
    │   │   └── forms/          # Reusable form parts
    │   ├── features/           # Feature modules
    │   │   ├── auth/           # Sign in / sign up forms
    │   │   ├── courseDetails/  # Header, video, sidebar, and the three tabs
    │   │   ├── courses/        # Search bar, filters, pagination, services, types
    │   │   ├── creatorProfile/ # Profile hero, follow button, course filter bar
    │   │   ├── creators/       # Creators list, search bar, services, types
    │   │   └── home/           # Home page sections and services
    │   ├── globals.css
    │   ├── layout.tsx          # Root layout
    │   └── not-found.tsx       # 404 page
    └── data/                   # Local data (courses, categories, testimonials)
```

Inside a feature, files are grouped by purpose:

```
features/courses
├── components/   # UI for this feature
├── service/      # Functions that get and filter data
└── types/        # TypeScript types
```

## Data

The project currently uses local data from `src/data`:

- `coursesData.ts` for courses and creators
- `categoriesData.ts` for categories
- `testimonialsData.ts` for testimonials

Services in each feature's `service/` folder read this data, so the UI does not depend on where the data comes from. To connect a real API or database later, change the service functions and keep the components as they are.

## How Search and Filters Work

1. A client component (search bar, filters, pagination, or tab links) updates the URL parameters.
2. The page is a server component that reads the parameters from `searchParams`.
3. The page passes them to a service function such as `getAllCourses({ q, category, level, sort, page })`.
4. The service filters, sorts, and paginates the data and returns the result.

Because the state lives in the URL, the browser's back and forward buttons work and every view can be shared.

## Deployment

The project can be deployed on [Vercel](https://vercel.com/). Import the repository, and Vercel detects Next.js and runs `pnpm build` automatically.