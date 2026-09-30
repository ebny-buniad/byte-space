export interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  youtubeVideoId: string;
  isPreview: boolean;
}

export interface ModuleLesson {
  id: string;
  moduleTitle: string;
  moduleSubtitle: string;
  videos: VideoLesson[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Creator {
  id: string;
  name: string;
  username: string;
  title: string;
  avatar: string;
  bio: string;
  rating: number;
  totalStudents: number;
  coursesCount: number;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  totalRatings: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  creatorId: string;
  username: string;
  about: {
    description: string;
    keyPoints: string[];
    sneakPeekVideoId: string;
  };
  lessons: ModuleLesson[];
  reviews: Review[];
}

// ==========================================
// CREATORS DATA
// ==========================================

export const creators: Creator[] = [
  {
    id: "creator-1",
    name: "Alex Rivera",
    username: "alexrivera",
    title: "Senior Full Stack Engineer & Tech Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    bio: "Over 10 years of experience building scalable web applications. Passionate about teaching Next.js, Node.js, and Cloud Infrastructure.",
    rating: 4.9,
    totalStudents: 18500,
    coursesCount: 9,
  },
  {
    id: "creator-2",
    name: "Sophia Chen",
    username: "sophiachen",
    title: "Principal AI Researcher & Software Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    bio: "Specialist in Artificial Intelligence, Python ecosystem, Data Engineering, and Modern Frontend Architectures.",
    rating: 4.8,
    totalStudents: 14200,
    coursesCount: 9,
  },
];

// ==========================================
// COURSES DATA WITH COMPLETE LESSONS & REVIEWS
// ==========================================

export const courses: Course[] = [
  // Course 1
  {
    id: "course-1",
    title: "Full Stack Next.js 14 & Node.js Mastery",
    subtitle: "Build production-ready web apps with React, Next.js App Router, Express, and PostgreSQL",
    slug: "full-stack-nextjs-nodejs-mastery",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    price: 99,
    discountPrice: 79,
    rating: 4.9,
    totalRatings: 420,
    level: "Intermediate",
    category: "Web Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Master modern web development from ground up. Learn how to craft server-rendered frontend using Next.js and secure backend REST APIs with Express and PostgreSQL.",
      keyPoints: [
        "Next.js 14 App Router & Server Components",
        "Prisma ORM & PostgreSQL Database Integration",
        "JWT & OAuth2 Authentication Setup",
        "Deployment to Vercel and AWS EC2"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c1",
        moduleTitle: "Module 1: Architecture & Project Setup",
        moduleSubtitle: "Understanding Full Stack Architecture and setting up modern workspace",
        videos: [
          { id: "v1-c1", title: "1.1 High Level System Design", duration: "12:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c1", title: "1.2 Monorepo vs Polyrepo Setup", duration: "18:45", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c1",
        moduleTitle: "Module 2: Next.js App Router Core",
        moduleSubtitle: "Server Components, Client Components, and Routing Patterns",
        videos: [
          { id: "v3-c1", title: "2.1 Server Components vs Client Components", duration: "22:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false },
          { id: "v4-c1", title: "2.2 Server Actions & Mutations", duration: "25:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c1", userName: "John Doe", userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", rating: 5, date: "2026-08-10", comment: "Best Next.js course on the internet!" },
      { id: "r2-c1", userName: "Emily Watson", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.8, date: "2026-08-25", comment: "The server actions module cleared all my doubts." }
    ]
  },

  // Course 2
  {
    id: "course-2",
    title: "React Native & Expo: Mobile App Blueprint",
    subtitle: "Build iOS and Android apps using React Native, TypeScript, and NativeWind",
    slug: "react-native-expo-mobile-blueprint",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    price: 89,
    discountPrice: 69,
    rating: 4.8,
    totalRatings: 310,
    level: "Beginner",
    category: "Mobile Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Learn mobile app development using cross-platform technology. Build apps that render natively on both iOS and Android.",
      keyPoints: [
        "Expo Router for File-based Navigation",
        "Styling with NativeWind (Tailwind for React Native)",
        "Push Notifications & Device Permissions",
        "App Store & Google Play Publishing"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c2",
        moduleTitle: "Module 1: Getting Started with Expo",
        moduleSubtitle: "Creating your first native mobile application",
        videos: [
          { id: "v1-c2", title: "1.1 Introduction to Expo Ecosystem", duration: "10:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c2", title: "1.2 Expo Router Navigation Basics", duration: "16:40", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c2",
        moduleTitle: "Module 2: Mobile UI & Styling",
        moduleSubtitle: "Using NativeWind and Custom UI Components",
        videos: [
          { id: "v3-c2", title: "2.1 NativeWind Setup and Flexbox Layouts", duration: "20:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c2", userName: "Marcus Vance", userAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100", rating: 5, date: "2026-07-12", comment: "Built my first iOS app in 2 weeks thanks to this course." }
    ]
  },

  // Course 3
  {
    id: "course-3",
    title: "Python for Data Science & Machine Learning",
    subtitle: "From basic Python syntax to training Machine Learning algorithms with Scikit-Learn",
    slug: "python-data-science-machine-learning",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    price: 110,
    discountPrice: 85,
    rating: 4.9,
    totalRatings: 540,
    level: "Beginner",
    category: "Data Science",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Dive deep into Data Analysis, Visualization, and Predictive Modeling with Python ecosystem.",
      keyPoints: [
        "NumPy and Pandas for Data Processing",
        "Matplotlib & Seaborn Data Visualization",
        "Supervised & Unsupervised Machine Learning",
        "Model Evaluation & Hyperparameter Tuning"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c3",
        moduleTitle: "Module 1: Python Data Science Stack",
        moduleSubtitle: "Working with Jupyter Notebooks, NumPy, and Pandas",
        videos: [
          { id: "v1-c3", title: "1.1 Python Setup & Jupyter Notebooks", duration: "14:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c3", title: "1.2 Data Wrangling with Pandas", duration: "28:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c3",
        moduleTitle: "Module 2: Machine Learning Algorithms",
        moduleSubtitle: "Regression, Classification, and Clustering",
        videos: [
          { id: "v3-c3", title: "2.1 Linear & Logistic Regression", duration: "32:45", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c3", userName: "Sarah Jenkins", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 5, date: "2026-09-01", comment: "Sophia explains complex math concepts so effortlessly!" }
    ]
  },

  // Course 4
  {
    id: "course-4",
    title: "Modern UI/UX Design with Figma & Tailwind",
    subtitle: "Design stunning digital interfaces and turn them into scalable code",
    slug: "modern-ui-ux-design-figma-tailwind",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
    price: 75,
    discountPrice: 49,
    rating: 4.7,
    totalRatings: 215,
    level: "Beginner",
    category: "UI/UX Design",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "A complete pipeline course covering UX wireframing, Figma design systems, and converting designs into responsive HTML/Tailwind CSS.",
      keyPoints: [
        "Figma Auto Layout & Component Variants",
        "UX Research & Prototyping Basics",
        "Converting Figma Designs to Tailwind CSS",
        "Design System Consistency"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c4",
        moduleTitle: "Module 1: Figma Essentials",
        moduleSubtitle: "Mastering Auto-Layout, Components, and Variants",
        videos: [
          { id: "v1-c4", title: "1.1 Introduction to Figma & Workspace", duration: "11:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c4", title: "1.2 Advanced Auto-Layout Techniques", duration: "21:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c4",
        moduleTitle: "Module 2: Design to Code Pipeline",
        moduleSubtitle: "Converting Figma Design Tokens into Tailwind CSS",
        videos: [
          { id: "v3-c4", title: "2.1 Building a Design System in Code", duration: "24:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c4", userName: "Liam Hemsworth", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 4.7, date: "2026-08-18", comment: "The Figma to Tailwind conversion workflow is a life-saver." }
    ]
  },

  // Course 5
  {
    id: "course-5",
    title: "Docker & Kubernetes: The DevOps Handbook",
    subtitle: "Containerize applications and orchestrate microservices at production scale",
    slug: "docker-kubernetes-devops-handbook",
    thumbnail: "https://cdn.hashnode.com/res/hashnode/image/upload/v1625551496642/3AbrgiHGz.jpeg",
    price: 120,
    discountPrice: 95,
    rating: 4.9,
    totalRatings: 380,
    level: "Advanced",
    category: "DevOps",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Understand container architecture, multi-stage builds, Kubernetes deployments, and automated CI/CD workflows.",
      keyPoints: [
        "Docker Engine, Images, and Multi-container Compose",
        "Kubernetes Clusters, Pods, Services & Ingress",
        "CI/CD Pipelines with GitHub Actions",
        "Production Monitoring and Log Management"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c5",
        moduleTitle: "Module 1: Docker Essentials",
        moduleSubtitle: "Containerization basics and writing Dockerfiles",
        videos: [
          { id: "v1-c5", title: "1.1 Why Containers? Docker vs Virtual Machines", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c5", title: "1.2 Multi-stage Docker Builds for Node & Go", duration: "26:40", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c5",
        moduleTitle: "Module 2: Kubernetes Orchestration",
        moduleSubtitle: "Pods, Deployments, Services, and Ingress Controller",
        videos: [
          { id: "v3-c5", title: "2.1 Setting up local K8s with Minikube", duration: "19:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c5", userName: "David Miller", userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", rating: 5, date: "2026-09-05", comment: "Helped me transition from developer to DevOps engineer!" }
    ]
  },

  // Course 6
  {
    id: "course-6",
    title: "Building Generative AI Apps with LangChain & RAG",
    subtitle: "Create AI agents, Custom LLM Chatbots, and Vector Database Applications",
    slug: "building-generative-ai-apps-langchain-rag",
    thumbnail: "https://jaro-website.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/07/How-to-Build-AI-Applications-Using-LangChain_-A-Complete-Guide.webp",
    price: 135,
    discountPrice: 99,
    rating: 5.0,
    totalRatings: 290,
    level: "Intermediate",
    category: "Artificial Intelligence",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Build cutting-edge AI software using OpenAI, LangChain framework, Vector Search Engine, and Retrieval-Augmented Generation.",
      keyPoints: [
        "LLM Integration with OpenAI & Anthropic",
        "Vector Databases: Pinecone, Qdrant & PGVector",
        "Retrieval-Augmented Generation (RAG) Architecture",
        "Autonomous AI Agent Creation"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c6",
        moduleTitle: "Module 1: LLMs & Prompt Engineering Architecture",
        moduleSubtitle: "Understanding Tokenization, Embeddings, and API Integration",
        videos: [
          { id: "v1-c6", title: "1.1 Introduction to Generative AI Ecosystem", duration: "18:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c6", title: "1.2 Vector Embeddings and Cosine Similarity", duration: "22:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c6",
        moduleTitle: "Module 2: Building RAG Pipeline",
        moduleSubtitle: "Connecting Vector Databases with LLMs for Enterprise Documents",
        videos: [
          { id: "v3-c6", title: "2.1 Implementing Pinecone with LangChain", duration: "30:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c6", userName: "Alex Taylor", userAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100", rating: 5, date: "2026-09-12", comment: "The most practical RAG pipeline tutorial available online." }
    ]
  },

  // Course 7
  {
    id: "course-7",
    title: "Cyber Security & Ethical Hacking Essentials",
    subtitle: "Learn penetration testing, network security, and vulnerability assessment",
    slug: "cyber-security-ethical-hacking-essentials",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    price: 95,
    discountPrice: 65,
    rating: 4.8,
    totalRatings: 180,
    level: "Beginner",
    category: "Cyber Security",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Understand web security vulnerabilities, OWASP Top 10, penetration testing methodologies, and defensive security strategies.",
      keyPoints: [
        "OWASP Top 10 Vulnerabilities",
        "Network Scanning with Nmap & Wireshark",
        "SQL Injection & Cross-Site Scripting (XSS)",
        "Web Application Firewalls & Hardening"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c7",
        moduleTitle: "Module 1: Ethical Hacking Foundations",
        moduleSubtitle: "Reconnaissance, Footprinting, and Scanning Methods",
        videos: [
          { id: "v1-c7", title: "1.1 Setting up Kali Linux Testing Lab", duration: "16:45", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c7", title: "1.2 Network Reconnaissance with Nmap", duration: "23:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c7",
        moduleTitle: "Module 2: Web Application Pentesting",
        moduleSubtitle: "Exploiting SQL Injection, XSS, and CSRF",
        videos: [
          { id: "v3-c7", title: "2.1 Understanding OWASP Top 10", duration: "27:50", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c7", userName: "Brian K.", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.8, date: "2026-08-01", comment: "Clear explanations with real lab demos." }
    ]
  },

  // Course 8
  {
    id: "course-8",
    title: "AWS Cloud Practitioner & Architect Solutions",
    subtitle: "Design scalable, highly available, and fault-tolerant cloud architectures",
    slug: "aws-cloud-practitioner-architect-solutions",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    price: 115,
    discountPrice: 89,
    rating: 4.7,
    totalRatings: 310,
    level: "Intermediate",
    category: "Cloud Computing",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Comprehensive guide to passing AWS certifications and designing infrastructure using Amazon Web Services.",
      keyPoints: [
        "EC2, S3, RDS, and Lambda Serverless Infrastructure",
        "VPC Networking, Subnets, and Security Groups",
        "AWS IAM and Access Management Security",
        "Cost Optimization & Infrastructure as Code (Terraform)"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c8",
        moduleTitle: "Module 1: AWS Fundamentals & Compute",
        moduleSubtitle: "Global Infrastructure, IAM, EC2, and Auto Scaling",
        videos: [
          { id: "v1-c8", title: "1.1 AWS Global Infrastructure Overview", duration: "13:40", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c8", title: "1.2 Launching and Securing EC2 Instances", duration: "25:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c8",
        moduleTitle: "Module 2: Networking & VPC Architecture",
        moduleSubtitle: "Subnets, Internet Gateways, NAT Gateways & Security",
        videos: [
          { id: "v3-c8", title: "2.1 Designing a Custom VPC", duration: "29:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c8", userName: "Rachel Green", userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 5, date: "2026-07-29", comment: "Passed my AWS Certified Solutions Architect exam on first attempt!" }
    ]
  },

  // Course 9
  {
    id: "course-9",
    title: "TypeScript Deep Dive & Design Patterns",
    subtitle: "Write cleaner, safer, and maintainable enterprise-level JavaScript code",
    slug: "typescript-deep-dive-design-patterns",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m5hsdKDR_6PHzRJMSW4SLg.png",
    price: 65,
    discountPrice: 45,
    rating: 4.9,
    totalRatings: 270,
    level: "Intermediate",
    category: "Web Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Master TypeScript generics, utility types, advanced type manipulation, and OOP design patterns.",
      keyPoints: [
        "Advanced Type Manipulation & Generics",
        "Gang of Four (GoF) Design Patterns in TS",
        "Configuring tsconfig for Enterprise Projects",
        "Integrating TypeScript with React & Node"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c9",
        moduleTitle: "Module 1: Advanced Type System",
        moduleSubtitle: "Generics, Conditional Types, and Mapped Types",
        videos: [
          { id: "v1-c9", title: "1.1 Deep Dive into TypeScript Generics", duration: "17:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c9", title: "1.2 Infer Keyword & Template Literal Types", duration: "21:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c9",
        moduleTitle: "Module 2: Object-Oriented Design Patterns",
        moduleSubtitle: "Singleton, Factory, Observer, and Decorator Patterns",
        videos: [
          { id: "v3-c9", title: "2.1 Implementing Singleton & Factory Pattern", duration: "26:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c9", userName: "Kevin Space", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 5, date: "2026-08-14", comment: "Finally understood conditional types and infer keyword!" }
    ]
  },

  // Course 10
  {
    id: "course-10",
    title: "GraphQL & REST API Design Architecture",
    subtitle: "Design scalable APIs using Apollo, GraphQL, Express, and Swagger",
    slug: "graphql-rest-api-design-architecture",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    price: 80,
    discountPrice: 55,
    rating: 4.8,
    totalRatings: 160,
    level: "Intermediate",
    category: "Web Development",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Learn API design best practices, rate limiting, caching strategies, and GraphQL schema architecture.",
      keyPoints: [
        "RESTful Standards & OpenAPI Documentation",
        "GraphQL Schemas, Queries, and Mutations",
        "DataLoader for Solving N+1 Problem",
        "API Rate Limiting & Redis Caching"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c10",
        moduleTitle: "Module 1: RESTful API Best Practices",
        moduleSubtitle: "HTTP Verbs, Status Codes, and OpenAPI Specification",
        videos: [
          { id: "v1-c10", title: "1.1 Designing Clean RESTful Endpoints", duration: "14:50", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c10", title: "1.2 Swagger / OpenAPI Documentation", duration: "18:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c10",
        moduleTitle: "Module 2: Apollo GraphQL Server",
        moduleSubtitle: "Schemas, Resolvers, and DataLoader Optimization",
        videos: [
          { id: "v3-c10", title: "2.1 Solving the N+1 Query Problem", duration: "24:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c10", userName: "Jessica Alba", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 4.8, date: "2026-06-30", comment: "DataLoader module saved our backend performance!" }
    ]
  },

  // Course 11
  {
    id: "course-11",
    title: "Flutter & Dart: Cross Platform Mastery",
    subtitle: "Build beautiful native apps for iOS, Android, and Desktop from a single codebase",
    slug: "flutter-dart-cross-platform-mastery",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    price: 90,
    discountPrice: 70,
    rating: 4.9,
    totalRatings: 280,
    level: "Beginner",
    category: "Mobile Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Master Dart programming language and Flutter framework to create high-performance cross-platform applications.",
      keyPoints: [
        "Dart Syntax, OOP & Asynchronous Programming",
        "Widget Lifecycle and Custom UI Animations",
        "State Management with Bloc and Provider",
        "REST API Integration and Firebase Integration"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c11",
        moduleTitle: "Module 1: Dart Programming Language",
        moduleSubtitle: "Variables, Functions, OOP, and Futures/Streams",
        videos: [
          { id: "v1-c11", title: "1.1 Introduction to Dart Language", duration: "15:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c11", title: "1.2 Async Programming: Futures & Streams", duration: "22:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c11",
        moduleTitle: "Module 2: Flutter Widgets & BLoC Pattern",
        moduleSubtitle: "Building Reactive Layouts and State Architecture",
        videos: [
          { id: "v3-c11", title: "2.1 Managing State with Flutter BLoC", duration: "31:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c11", userName: "Tom Cruise", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 5, date: "2026-08-04", comment: "Best Flutter course for beginners and intermediates alike." }
    ]
  },

  // Course 12
  {
    id: "course-12",
    title: "PostgreSQL & Database Optimization Guide",
    subtitle: "Master relational database design, indexing, query optimization, and ACID transactions",
    slug: "postgresql-database-optimization-guide",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    price: 85,
    discountPrice: 60,
    rating: 4.9,
    totalRatings: 230,
    level: "Intermediate",
    category: "Database",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Learn advanced SQL queries, database normalization, indexing strategies, and database performance tuning.",
      keyPoints: [
        "Database Schema Normalization & ERD Design",
        "B-Tree, GIN, and GiST Indexing Mechanisms",
        "EXPLAIN ANALYZE for Query Tuning",
        "ACID Transactions & Row-Level Locking"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c12",
        moduleTitle: "Module 1: Advanced SQL & Schema Architecture",
        moduleSubtitle: "Complex Joins, Window Functions, and CTEs",
        videos: [
          { id: "v1-c12", title: "1.1 CTEs and Window Functions Explained", duration: "20:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c12", title: "1.2 Designing Normalization up to 3NF", duration: "25:40", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c12",
        moduleTitle: "Module 2: Performance Tuning & Indexing",
        moduleSubtitle: "Understanding EXPLAIN ANALYZE and Index Types",
        videos: [
          { id: "v3-c12", title: "2.1 B-Tree vs GIN Indexes in PostgreSQL", duration: "28:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c12", userName: "Daniel Craig", userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", rating: 5, date: "2026-09-15", comment: "Reduced our API query response times by 70%!" }
    ]
  },

  // Course 13
  {
    id: "course-13",
    title: "Vue 3 & Nuxt 3: Modern Frontend Framework",
    subtitle: "Build modern web applications with Vue Composition API and Nuxt SSR framework",
    slug: "vue3-nuxt3-modern-frontend-framework",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    price: 79,
    discountPrice: 59,
    rating: 4.7,
    totalRatings: 140,
    level: "Beginner",
    category: "Web Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Master Vue 3 Composition API, Pinia state management, and Nuxt 3 Server-Side Rendering.",
      keyPoints: [
        "Vue 3 Script Setup & Reactivity API",
        "Nuxt 3 Server-Side Rendering (SSR)",
        "Pinia Store Management",
        "Tailwind CSS Integration with Vue"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c13",
        moduleTitle: "Module 1: Vue 3 Composition API",
        moduleSubtitle: "Ref, Reactive, Computed, and Watchers",
        videos: [
          { id: "v1-c13", title: "1.1 Options API vs Composition API", duration: "13:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c13", title: "1.2 Reactivity Deep Dive: ref vs reactive", duration: "19:40", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c13",
        moduleTitle: "Module 2: Nuxt 3 App Engine",
        moduleSubtitle: "Auto-imports, File-based Routing, and Server Routes",
        videos: [
          { id: "v3-c13", title: "2.1 Nuxt 3 File Architecture & Rendering Modes", duration: "23:50", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c13", userName: "Sophia Turner", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.7, date: "2026-08-20", comment: "Nuxt 3 is so fast and pleasant to work with." }
    ]
  },

  // Course 14
  {
    id: "course-14",
    title: "Data Structures & Algorithms in JavaScript",
    subtitle: "Ace your coding interviews with algorithmic problem-solving techniques",
    slug: "data-structures-algorithms-javascript",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    price: 70,
    discountPrice: 50,
    rating: 4.9,
    totalRatings: 490,
    level: "Intermediate",
    category: "Computer Science",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "In-depth study of Big O notation, Arrays, Linked Lists, Trees, Graphs, Sorting algorithms, and Dynamic Programming.",
      keyPoints: [
        "Time & Space Complexity Analysis (Big O)",
        "Binary Search Trees, Heaps & Graphs",
        "Recursion and Dynamic Programming Pattern",
        "LeetCode Top 75 Coding Problems Solved"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c14",
        moduleTitle: "Module 1: Big O & Core Data Structures",
        moduleSubtitle: "Big O Analysis, Arrays, Hash Tables & Linked Lists",
        videos: [
          { id: "v1-c14", title: "1.1 Time & Space Complexity (Big O Notation)", duration: "18:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c14", title: "1.2 Implementing Linked List in JavaScript", duration: "24:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c14",
        moduleTitle: "Module 2: Advanced Trees & Dynamic Programming",
        moduleSubtitle: "Binary Search Trees, Graph Traversal, and Memoization",
        videos: [
          { id: "v3-c14", title: "2.1 Graph BFS and DFS Traversals", duration: "30:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c14", userName: "Michael Scott", userAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100", rating: 5, date: "2026-09-08", comment: "Landed my FAANG job thanks to this DSA course!" }
    ]
  },

  // Course 15
  {
    id: "course-15",
    title: "Linux System Administration & Shell Scripting",
    subtitle: "Master Linux terminal commands, server configuration, and Bash automation",
    slug: "linux-system-administration-shell-scripting",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800",
    price: 60,
    discountPrice: 40,
    rating: 4.8,
    totalRatings: 200,
    level: "Beginner",
    category: "DevOps",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Learn Linux terminal controls, SSH key management, file permissions, Nginx web server config, and Bash automation scripts.",
      keyPoints: [
        "Linux Filesystem Structure & Permissions",
        "User Management & SSH Hardening",
        "Nginx Reverse Proxy & SSL Setup",
        "Automating System Tasks with Bash & Cron Jobs"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c15",
        moduleTitle: "Module 1: Linux Command Line Mastery",
        moduleSubtitle: "Filesystem, Permissions, and Process Management",
        videos: [
          { id: "v1-c15", title: "1.1 Essential Linux Commands Overview", duration: "16:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c15", title: "1.2 File Permissions (chmod, chown, umask)", duration: "21:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c15",
        moduleTitle: "Module 2: Bash Automation & Server Admin",
        moduleSubtitle: "Writing Bash Scripts and Configuring Nginx Server",
        videos: [
          { id: "v3-c15", title: "2.1 Nginx Reverse Proxy & Let's Encrypt SSL", duration: "27:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c15", userName: "Jim Halpert", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.8, date: "2026-07-19", comment: "Essential knowledge for every backend engineer." }
    ]
  },

  // Course 16
  {
    id: "course-16",
    title: "Microservices Architecture with Node.js & RabbitMQ",
    subtitle: "Build event-driven distributed systems using message queues and gRPC",
    slug: "microservices-architecture-nodejs-rabbitmq",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    price: 130,
    discountPrice: 99,
    rating: 4.9,
    totalRatings: 170,
    level: "Advanced",
    category: "Software Architecture",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Learn how to break monolithic applications into scalable, decoupled microservices using async messaging.",
      keyPoints: [
        "Event-Driven Architecture Fundamentals",
        "RabbitMQ Message Broker Implementation",
        "gRPC Inter-service Communication",
        "API Gateway & Distributed Tracing"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c16",
        moduleTitle: "Module 1: Monolith to Microservices Pattern",
        moduleSubtitle: "Service Boundaries, Databases per Service, and Async Events",
        videos: [
          { id: "v1-c16", title: "1.1 Designing Microservice Boundaries", duration: "19:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c16", title: "1.2 RabbitMQ Pub/Sub Architecture", duration: "27:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c16",
        moduleTitle: "Module 2: High Performance Communication",
        moduleSubtitle: "gRPC Protocols vs HTTP REST in Microservices",
        videos: [
          { id: "v3-c16", title: "2.1 Implementing gRPC with Node.js", duration: "32:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c16", userName: "Pam Beesly", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 5, date: "2026-08-30", comment: "Clear, practical, and highly production-oriented." }
    ]
  },

  // Course 17
  {
    id: "course-17",
    title: "Go (Golang) for Backend Developers",
    subtitle: "Build ultra-fast, concurrent backend web services using Go programming language",
    slug: "golang-for-backend-developers",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    price: 95,
    discountPrice: 75,
    rating: 4.8,
    totalRatings: 220,
    level: "Intermediate",
    category: "Web Development",
    creatorId: "creator-1",
    username: "alexrivera",
    about: {
      description: "Master Go syntax, pointers, goroutines, channels, and build high-performance microservices.",
      keyPoints: [
        "Go Syntax, Structs, and Interfaces",
        "Goroutines and Channel Concurrency",
        "Building REST APIs with Fiber / Gin",
        "Unit Testing and Benchmarking in Go"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c17",
        moduleTitle: "Module 1: Go Syntax & Concurrency",
        moduleSubtitle: "Structs, Interfaces, Goroutines, and Channels",
        videos: [
          { id: "v1-c17", title: "1.1 Introduction to Go Language Basics", duration: "14:15", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c17", title: "1.2 Goroutines and Channel Synchronization", duration: "25:30", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c17",
        moduleTitle: "Module 2: Go Web REST APIs",
        moduleSubtitle: "Building REST Services with Fiber and PostgreSQL",
        videos: [
          { id: "v3-c17", title: "2.1 Structuring Go Backend Architecture", duration: "28:00", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c17", userName: "Dwight Schrute", userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", rating: 4.8, date: "2026-09-18", comment: "Go's speed and concurrency explained brilliantly." }
    ]
  },

  // Course 18
  {
    id: "course-18",
    title: "Product Management & Agile Fundamentals",
    subtitle: "Learn Product Strategy, User Story Mapping, and Scrum Management Frameworks",
    slug: "product-management-agile-fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
    price: 70,
    discountPrice: 45,
    rating: 4.6,
    totalRatings: 110,
    level: "Beginner",
    category: "Management",
    creatorId: "creator-2",
    username: "sophiachen",
    about: {
      description: "Understand software product lifecycles, wireframing, sprint planning, and team management strategies.",
      keyPoints: [
        "Agile & Scrum Framework Practices",
        "Writing Effective User Stories & Acceptance Criteria",
        "Sprint Planning & Backlog Grooming",
        "KPI Metrics & Product Analytics"
      ],
      sneakPeekVideoId: "dQw4w9WgXcQ"
    },
    lessons: [
      {
        id: "m1-c18",
        moduleTitle: "Module 1: Product Strategy & Lifecycle",
        moduleSubtitle: "Market Research, Wireframing, and Product Roadmap",
        videos: [
          { id: "v1-c18", title: "1.1 What is Product Management?", duration: "11:45", youtubeVideoId: "dQw4w9WgXcQ", isPreview: true },
          { id: "v2-c18", title: "1.2 User Persona & Customer Journey Mapping", duration: "18:20", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      },
      {
        id: "m2-c18",
        moduleTitle: "Module 2: Agile & Scrum Frameworks",
        moduleSubtitle: "Sprints, Standups, Retrospectives, and Jira Setup",
        videos: [
          { id: "v3-c18", title: "2.1 Managing Backlogs & Writing Acceptance Criteria", duration: "22:10", youtubeVideoId: "dQw4w9WgXcQ", isPreview: false }
        ]
      }
    ],
    reviews: [
      { id: "r1-c18", userName: "Ryan Howard", userAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100", rating: 4.6, date: "2026-08-11", comment: "Great introductory course for aspiring Product Managers!" }
    ]
  }
];