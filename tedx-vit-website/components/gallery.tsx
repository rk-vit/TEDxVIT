"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/gallery-1.jpg",
      alt: "TEDx VIT Speaker on Stage",
      category: "event",
    },
    {
      src: "/gallery-2.jpg",
      alt: "Audience at TEDx VIT",
      category: "audience",
    },
    {
      src: "/gallery-3.jpg",
      alt: "TEDx VIT Team",
      category: "team",
    },
    {
      src: "/gallery-4.jpg",
      alt: "Workshop Session",
      category: "workshop",
    },
    {
      src: "/gallery-5.jpg",
      alt: "Speaker Preparation",
      category: "backstage",
    },
    {
      src: "/gallery-6.jpg",
      alt: "TEDx VIT Stage",
      category: "event",
    },
    {
      src: "/gallery-7.jpg",
      alt: "Interactive Session",
      category: "workshop",
    },
    {
      src: "/gallery-8.jpg",
      alt: "Networking Break",
      category: "audience",
    },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
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
            Our Memories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Event <span className="text-[#e62b1e]">Gallery</span>
          </h2>
          <p className="text-gray-700 text-lg">Capturing moments of inspiration, connection, and innovation</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-white text-center font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}

        <div className="mt-16 text-center">
          <a
            href="/gallery"
            className="group inline-flex items-center bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 font-medium"
          >
            View Full Gallery
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

