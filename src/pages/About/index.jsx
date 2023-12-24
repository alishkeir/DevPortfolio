import AboutSection from '@pages/About/sections/AboutSection';
import OverviewSection from '@pages/About/sections/OverviewSection';
// import TestimonialsSection from '@pages/About/sections/TestimonialsSection';
import FeaturedSection from '@pages/About/sections/FeaturedSection';
import BlogsSection from '@pages/About/sections/BlogsSection';
import Separator from '@components/Separator';

const AboutPage = () => {
  return (
    <>
      <AboutSection />

      <OverviewSection />

      <Separator />

      {/* <TestimonialsSection /> */}

      <Separator />

      <FeaturedSection />

      <Separator />

      <BlogsSection />
    </>
  );
};

export default AboutPage;
