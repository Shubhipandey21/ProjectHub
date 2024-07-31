'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const projectTestimonials = [
    {
        quote: "Exploring the online drawing tool Shubhi created was an eye-opener for me. The intuitive design and powerful features helped me improve my digital art skills tremendously. A must-try for any aspiring artist!",
        name: "Maria Gomez",
        title: "Digital Artist"
      },
        
      {
        quote: "The video chatting website developed by Shubhi is exceptional. It's incredibly user-friendly, and the real-time collaboration features are top-notch. It has significantly improved our team communication.",
        name: "Liam Chen",
        title: "Remote Team Leader"
      },

      {
        quote: "Shubhi's travel blog website is fantastic! The layout is beautiful, and it's so easy to share and read travel experiences. It's a great platform for travel enthusiasts to connect and inspire each other.",
        name: "Sophie Turner",
        title: "Travel Blogger"
      },
      {
        quote: "The healthcare website Shubhi created is a game-changer. It's comprehensive and user-friendly, making it easy for patients to find the information they need and for healthcare providers to manage appointments efficiently.",
        name: "Dr. Ethan Brown",
        title: "General Practitioner"
      },
      {
        quote: "Shubhi's EdTech website is an incredible resource for both students and educators. The interactive features and rich content make learning engaging and accessible. It's a valuable tool for anyone in the education sector.",
        name: "Emma Davis",
        title: "High School Teacher"
      },
      
      
      
      
]

function ProjectTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={projectTestimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default  ProjectTestimonials
