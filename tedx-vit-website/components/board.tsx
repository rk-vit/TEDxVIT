"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Board() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const boardMembers = [
    {
      name: "Aditya Sharma",
      position: "Organizer",
      image: "/team-member-1.jpg",
      bio: "Computer Science senior with a passion for technology and innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Priya Patel",
      position: "Co-Organizer",
      image: "/team-member-2.jpg",
      bio: "Business Administration graduate focused on organizational leadership.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Rahul Mehta",
      position: "Curation Lead",
      image: "/team-member-3.jpg",
      bio: "Literature enthusiast with a keen eye for compelling storytelling.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Ananya Singh",
      position: "Marketing Lead",
      image: "/team-member-4.jpg",
      bio: "Digital marketing specialist with experience in brand development.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Vikram Reddy",
      position: "Technical Lead",
      image: "/team-member-5.jpg",
      bio: "Engineering student specializing in audio-visual production.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Neha Gupta",
      position: "Design Lead",
      image: "/team-member-6.jpg",
      bio: "Visual communication expert with a passion for minimalist design.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Arjun Kumar",
      position: "Sponsorship Lead",
      image: "/team-member-7.jpg",
      bio: "Economics major with strong networking and negotiation skills.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Zara Malik",
      position: "Volunteer Coordinator",
      image: "/team-member-8.jpg",
      bio: "Psychology student focused on team building and community engagement.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section id="board" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f8f9fa] rounded-bl-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f8f9fa] rounded-tr-full opacity-50 z-0"></div>
      <div className="absolute top-1/3 right-0 w-16 h-64 bg-[#e62b1e]/5 rounded-l-full"></div>
      <div className="absolute bottom-1/3 left-0 w-16 h-64 bg-[#e62b1e]/5 rounded-r-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-[#e62b1e]/10 text-[#e62b1e] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Our <span className="text-[#e62b1e]">Board</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Dedicated individuals working together to bring ideas worth spreading to our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-[#e62b1e] transition-colors bg-white/20 p-2 rounded-full"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-white hover:text-[#e62b1e] transition-colors bg-white/20 p-2 rounded-full"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="text-white hover:text-[#e62b1e] transition-colors bg-white/20 p-2 rounded-full"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                <p className="text-[#e62b1e] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 font-medium"
          >
            Join Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

