"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      id: 1,
      title: "The Impact of TEDx Talks on University Campuses",
      excerpt:
        "Exploring how TEDx events are transforming academic discourse and inspiring student innovation across campuses worldwide.",
      date: "October 15, 2023",
      author: "Priya Patel",
      category: "Events",
      image: "/blog-1.jpg",
    },
    {
      id: 2,
      title: "Behind the Scenes: Organizing a TEDx Event",
      excerpt:
        "A look at the months of preparation, challenges, and triumphs that go into creating a successful TEDx experience.",
      date: "September 28, 2023",
      author: "Rahul Mehta",
      category: "Organization",
      image: "/blog-2.jpg",
    },
    {
      id: 3,
      title: "From Audience to Speaker: My TEDx Journey",
      excerpt:
        "One student's transformative experience from being inspired by TEDx talks to delivering one on the red circle.",
      date: "August 12, 2023",
      author: "Ananya Singh",
      category: "Personal Stories",
      image: "/blog-3.jpg",
    },
  ]

  const featuredPost = {
    id: 4,
    title: "The Evolution of Ideas: How TEDx Shapes Global Conversations",
    excerpt:
      "An in-depth analysis of how TEDx platforms have influenced public discourse and accelerated the spread of innovative ideas across disciplines and borders.",
    date: "November 5, 2023",
    author: "Aditya Sharma",
    category: "Analysis",
    image: "/blog-featured.jpg",
  }

  return (
    <section id="blog" className="py-24 md:py-32 bg-white relative overflow-hidden">
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
            Our Blog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest <span className="text-[#e62b1e]">Articles</span>
          </h2>
          <p className="text-gray-700 text-lg">Insights, stories, and updates from the TEDx VIT community</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full group border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#e62b1e] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-[#e62b1e]" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-[#e62b1e]" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <span className="bg-[#f8f9fa] px-2 py-1 rounded-full text-xs">{featuredPost.category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#e62b1e] transition-colors">
                  <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h3>

                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="group inline-flex items-center text-[#e62b1e] font-medium hover:text-[#d42a1c] transition-colors"
                >
                  Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col sm:flex-row lg:flex-col group border border-gray-100"
              >
                <div className="sm:w-1/3 lg:w-full h-48 relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:w-2/3 lg:w-full">
                  <div className="flex items-center gap-3 mb-2 text-xs text-gray-600">
                    <span>{post.date}</span>
                    <span className="bg-[#f8f9fa] px-2 py-0.5 rounded-full">{post.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e62b1e] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="group inline-flex items-center text-[#e62b1e] text-sm font-medium hover:text-[#d42a1c] transition-colors"
                  >
                    Read More <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-8 py-3.5 font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

