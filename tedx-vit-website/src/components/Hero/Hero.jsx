"use client"

import { useEffect, useRef, useState } from "react"
import "./Hero.css"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)

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
    }
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
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
    <section className="hero" id="hero">
      <div className="hero-background">
        <img src="/hero.png" alt="Background" className="hero-image"/>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-logo" style={{ opacity: isLoaded ? 1 : 0 }}>
          <img src="/assets/tedx-logo-white.png" alt="TEDx" />
        </div>

        <div className="slides-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href="#events" className="btn btn-primary">
                  {slide.cta}
                  <svg
                    className="btn-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#about" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slide-indicator ${currentSlide === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
