import { Suspense } from "react";
import CourseShowcase from "../features/home/components/CourseShowcase";
import CreatorBanner from "../features/home/components/CreatorBanner";
import DiscoverSection from "../features/home/components/DiscoverSection";
import HeroSection from "../features/home/components/HeroSection";
import LatestCoursesSection from "../features/home/components/LatestCoursesSection";
import LearningPaths from "../features/home/components/LearningPaths";
import LogoSections from "../features/home/components/LogoSections";
import Testimonials from "../features/home/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <LogoSections />
      <Suspense fallback={null}>
        <DiscoverSection />
      </Suspense>
      <Suspense fallback={null}>
        <LatestCoursesSection />
      </Suspense>
      <LearningPaths />
      <CourseShowcase />
      <CreatorBanner />
      <Testimonials />
    </div>
  );
}