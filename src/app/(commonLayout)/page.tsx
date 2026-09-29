import DiscoverSection from "../features/home/components/DiscoverSection";
import HeroSection from "../features/home/components/HeroSection";
import LatestCoursesSection from "../features/home/components/LatestCoursesSection";
import LearningPaths from "../features/home/components/LearningPaths";
import LogoSections from "../features/home/components/LogoSections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoSections />
      <DiscoverSection />
      <LatestCoursesSection />
      <LearningPaths />
    </div>
  );
}
