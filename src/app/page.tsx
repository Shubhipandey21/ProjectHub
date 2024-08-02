import Contributors from "@/components/Contributors";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OpensourceEvents from "@/components/OpensourceEvents";
import ProjectTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
    <HeroSection />
    <FeaturedProjects />
    <WhyChooseUs />
    <ProjectTestimonials />
    <OpensourceEvents />
    <Contributors/>
    <Footer />
   </main>
  );
}
