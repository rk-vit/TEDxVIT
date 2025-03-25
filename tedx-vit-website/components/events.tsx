"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const upcomingEvents = [
    {
      id: 1,
      title: "TEDx VIT 2023: Reimagine",
      date: "November 15, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "VIT Main Auditorium",
      image: "/event-1.jpg",
      description: "Join us for a day of inspiring talks and performances that challenge us to reimagine our future.",
      speakers: ["Dr. Aisha Patel", "Vikram Mehta", "Sarah Johnson"],
      ticketsAvailable: true,
    },
    {
      id: 2,
      title: "TEDx VIT Salon: AI & Humanity",
      date: "December 5, 2023",
      time: "4:00 PM - 7:00 PM",
      location: "Technology Center, VIT",
      image: "/event-2.jpg",
      description: "A focused discussion on how artificial intelligence is reshaping our understanding of humanity.",
      speakers: ["Prof. Rajiv Kumar", "Dr. Emily Chen"],
      ticketsAvailable: true,
    },
    {
      id: 3,
      title: "TEDx VIT Workshop: Public Speaking",
      date: "January 20, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Communication Arts Building",
      image: "/event-3.jpg",
      description: "Learn the art of effective public speaking from experienced TEDx speakers and coaches.",
      speakers: ["Anita Desai", "Michael Roberts"],
      ticketsAvailable: false,
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "TEDx VIT 2022: Breakthrough",
      date: "October 10, 2022",
      location: "VIT Main Auditorium",
      image: "/event-4.jpg",
      videoLink: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 5,
      title: "TEDx VIT Salon: Climate Action",
      date: "March 22, 2022",
      location: "Environmental Sciences Building",
      image: "/event-5.jpg",
      videoLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 6,
      title: "TEDx VIT 2021: Resilience",
      date: "November 5, 2021",
      location: "Virtual Event",
      image: "/event-6.jpg",
      videoLink: "https://www.youtube.com/watch?v=example3",
    },
    {
      id: 7,
      title: "TEDx VIT Youth: New Perspectives",
      date: "February 15, 2021",
      location: "Student Center",
      image: "/event-7.jpg",
      videoLink: "https://www.youtube.com/watch?v=example4",
    },
  ]

  return (
    <section id="events" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[100px] z-0"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-[#e62b1e]/5 rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#e62b1e]/5 rounded-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-[#e62b1e]/10 text-[#e62b1e] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Join Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Upcoming <span className="text-[#e62b1e]">Events</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Discover our upcoming and past events featuring inspiring speakers and innovative ideas
          </p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="flex justify-center mb-12 bg-transparent">
            <TabsTrigger
              value="upcoming"
              className="px-8 py-3 rounded-full data-[state=active]:bg-[#e62b1e] data-[state=active]:text-white border border-[#e62b1e]/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="px-8 py-3 rounded-full data-[state=active]:bg-[#e62b1e] data-[state=active]:text-white border border-[#e62b1e]/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {event.ticketsAvailable && (
                      <div className="absolute top-4 right-4 bg-[#e62b1e] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Tickets Available
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e62b1e] transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2 text-[#e62b1e]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-[#e62b1e]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-[#e62b1e]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-900 mb-2">Speakers:</p>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((speaker, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-[#f8f9fa] text-gray-600 text-xs px-3 py-1 rounded-full"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        event.ticketsAvailable
                          ? "bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] hover:shadow-lg hover:shadow-red-500/20"
                          : "bg-gray-900 hover:bg-gray-800"
                      } transition-all duration-300 rounded-full`}
                    >
                      {event.ticketsAvailable ? "Get Tickets" : "Join Waitlist"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={event.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e62b1e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d42a1c] transition-colors"
                      >
                        Watch Talks
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e62b1e] transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <Calendar size={14} className="mr-1 text-[#e62b1e]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-1 text-[#e62b1e]" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/events"
                className="group inline-flex items-center text-gray-900 font-medium hover:text-[#e62b1e] transition-colors"
              >
                View All Past Events
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

