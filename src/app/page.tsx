import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import ProjectTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
    <HeroSection />
    <FeaturedProjects />
    <WhyChooseUs />
    <ProjectTestimonials />
   </main>
  );
}
