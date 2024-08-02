'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { link } from "fs";


function OpensourceEvents() {

    const featuredOpenSourceEvents= [
        {
            title: 'Google Summer of Code',
            description: 'Spend your summer contributing to open source projects, gaining real-world software development experience.',
            link: 'https://summerofcode.withgoogle.com/',
            isFeatured: true,
          },
          {
            title: 'Hacktoberfest',
            description: 'Celebrate open source throughout October by contributing to projects, earning swag, and improving your coding skills.',
            link: "https://hacktoberfest.com/",
            isFeatured: true,
          },
          {
            title: 'GirlScript Summer of Code',
            description: 'Join the GirlScript Summer of Code and collaborate on open source projects to enhance your programming abilities.',
            link: "https://gssoc.girlscript.tech/",
            isFeatured: true,
          },
          {
            title: 'Outreachy',
            description: 'Contribute to open source projects, receive mentorship, and get paid internships, especially for underrepresented groups.',
            link: "https://www.outreachy.org/",
            isFeatured: true,
          },
          {
            title: 'Season of KDE',
            description: 'Participate in the Season of KDE to work on KDE projects, enhance your skills, and become part of the KDE community.',
            link: "https://mentorship.kde.org/sok/",
            isFeatured: true,
          },
          {
            title: 'Rails Girls Summer of Code',
            description: 'Spend your summer contributing to open source projects using Ruby on Rails, with the support of mentors and the community.',
            link: "https://railsgirlssummerofcode.org/",
            isFeatured: true,
          }
          
          
    ]

  return (
    <div className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED EVENTS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Open Source Journey</p>
        
      </div>

      <div className="mt-10">
        <HoverEffect
        items={featuredOpenSourceEvents.map(events => (
          {
            title: events.title,
            description: events.description,
            link : events.link,
          }
        ))}
        />
      </div>

     
    </div>
  </div>
  )
}

export default OpensourceEvents
