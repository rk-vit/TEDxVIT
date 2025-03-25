"use client"

import { useState, useEffect, useRef } from "react"
import "./Gallery.css"

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const galleryImages = [
    {
      src: "/assets/gallery-1.jpg",
      alt: "TEDx VIT Speaker on Stage",
      category: "event",
    },
    {
      src: "/assets/gallery-2.jpg",
      alt: "Audience at TEDx VIT",
      category: "audience",
    },
    {
      src: "/assets/gallery-3.jpg",
      alt: "TEDx VIT Team",
      category: "team",
    },
    {
      src: "/assets/gallery-4.jpg",
      alt: "Workshop Session",
      category: "workshop",
    },
    {
      src: "/assets/gallery-5.jpg",
      alt: "Speaker Preparation",
      category: "backstage",
    },
    {
      src: "/assets/gallery-6.jpg",
      alt: "TEDx VIT Stage",
      category: "event",
    },
    {
      src: "/assets/gallery-7.jpg",
      alt: "Interactive Session",
      category: "workshop",
    },
    {
      src: "/assets/gallery-8.jpg",
      alt: "Networking Break",
      category: "audience",
    },
  ]

  return (
    <section id="gallery" className="section section-gray gallery-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-top"></div>
      <div className="decor decor-circle-1"></div>
      <div className="decor decor-circle-2"></div>
      <div className="decor decor-circle-3"></div>
      <div className="decor decor-circle-4"></div>

      <div className="container">
        <div className={`section-header text-center ${isVisible ? "visible" : ""}`}>
          <span className="badge">Our Memories</span>
          <h2 className="section-title">
            Event <span>Gallery</span>
          </h2>
          <p className="section-subtitle">Capturing moments of inspiration, connection, and innovation</p>
        </div>

        <div className={`gallery-grid ${isVisible ? "visible" : ""}`}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="gallery-image-container">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="image-caption">
                    <p>{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <button
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className={`view-gallery-container text-center ${isVisible ? "visible" : ""}`}>
          <a href="/gallery" className="btn btn-primary view-gallery-btn">
            View Full Gallery
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
        </div>
      </div>
    </section>
  )
}

export default Gallery

