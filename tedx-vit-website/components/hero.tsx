"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides = [
    {
      title: "Ideas Worth Spreading",
      subtitle: "Join us for inspiring talks that challenge conventional thinking",
      cta: "Discover Events",
    },
    {
      title: "Unleash Your Potential",
      subtitle: "Connect with innovators and thought leaders at TEDx VIT",
      cta: "Meet Our Speakers",
    },
    {
      title: "Inspire Change",
      subtitle: "Be part of a global community dedicated to sharing powerful ideas",
      cta: "Get Involved",
    },
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7

      // Set loaded state when video can play
      videoRef.current.oncanplay = () => {
        setIsLoaded(true)
      }
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Video with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/ted-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/80 via-[#000000]/70 to-[#1a1a1a]/60"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: Math.random() > 0.5 ? "#e62b1e" : "#ffffff",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-5 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img src="/tedx-logo-white.png" alt="TEDx" className="h-20 md:h-28 mx-auto mb-8" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#events"
                  className="group bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-[#e62b1e] w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#about" className="text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </section>
  )
}

