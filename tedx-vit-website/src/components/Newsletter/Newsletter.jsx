"use client"

import { useState, useEffect, useRef } from "react"
import "./Newsletter.css"

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section className="newsletter-section" ref={sectionRef}>
      <div className="newsletter-bg"></div>
      <div className="decor decor-circle-1"></div>
      <div className="decor decor-circle-2"></div>

      <div className="container">
        <div className={`newsletter-card ${isVisible ? "visible" : ""}`}>
          <div className="newsletter-content">
            <span className="badge">Stay Updated</span>
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-text">
              Get the latest updates on our events, speakers, and initiatives delivered straight to your inbox.
            </p>

            <form className="newsletter-form">
              <div className="form-group">
                <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Subscribe
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
                </button>
              </div>
              <p className="privacy-note">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from TEDx VIT.
              </p>
            </form>
          </div>
          <div className="newsletter-image">
            <div className="newsletter-image-overlay"></div>
            <img src="/assets/newsletter-bg.jpg" alt="TEDx VIT Newsletter" />
            <div className="newsletter-image-content">
              <img src="/assets/tedx-logo-white.png" alt="TEDx" className="newsletter-logo" />
              <h3>Ideas Worth Sharing</h3>
              <p>Join our community of thinkers, innovators, and change-makers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

