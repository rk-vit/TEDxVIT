"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { CheckCircle, Users, Calendar, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      value: "10+",
      label: "Years of Excellence",
      icon: <Calendar className="h-6 w-6 text-[#e62b1e]" />,
    },
    {
      value: "50+",
      label: "Events Organized",
      icon: <Award className="h-6 w-6 text-[#e62b1e]" />,
    },
    {
      value: "100+",
      label: "Speakers Hosted",
      icon: <Users className="h-6 w-6 text-[#e62b1e]" />,
    },
    {
      value: "10,000+",
      label: "Attendees",
      icon: <CheckCircle className="h-6 w-6 text-[#e62b1e]" />,
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f8f9fa] rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f8f9fa] rounded-tr-full opacity-70"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-[#e62b1e]/5 rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#e62b1e]/5 rounded-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="inline-block bg-[#e62b1e]/10 text-[#e62b1e] text-sm font-bold px-4 py-1 rounded-full mb-4">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About <span className="text-[#e62b1e]">TEDx VIT</span>
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                TEDx VIT is a student-run organization that aims to bring together bright minds to give talks that are
                idea-focused, and on a wide range of subjects, to foster learning, inspiration and wonder – and provoke
                conversations that matter.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#e62b1e]">
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
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Mission</h3>
                    <p className="text-gray-600">
                      To spread ideas worth sharing and inspire our community through powerful talks and engaging
                      events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#e62b1e]">
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
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">What is TEDx?</h3>
                    <p className="text-gray-600">
                      TEDx is a program of local, self-organized events that bring people together to share a TED-like
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#events"
                className="group inline-flex items-center bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                Explore Our Events
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f8f9fa] rounded-full opacity-70 z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <Image
                    src="/tedx-event-main.jpg"
                    alt="TEDx VIT Event"
                    width={800}
                    height={500}
                    className="w-full h-[500px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-8">
                      <div className="inline-block bg-[#e62b1e] text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                        TEDx VIT
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ideas Worth Spreading</h3>
                      <p className="text-white/90">Inspiring talks that challenge, inform, and engage our community</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-2 bg-[#f8f9fa] rounded-full">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

