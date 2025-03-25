"use client"

import { useState, useEffect, useRef } from "react"
import "./Board.css"

const Board = () => {
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

  const boardMembers = [
    {
      name: "Hariharan",
      position: "President",
      image: "/Hariharan.jpg",
      bio: "Give your bio",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Neeraj Prasanna",
      position: "Vice President",
      image: "/Neeraj.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Archit",
      position: "Curation Lead",
      image: "/assets/team-member-3.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Shyamanth Reddy",
      position: "Overall coordinator",
      image: "/shyamanth.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Revanth Kanna",
      position: "Technical Lead",
      image: "revanth.jpg",
      bio: "An Computer Engineering student specializing software development.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Pranav",
      position: "Design Lead",
      image: "/assets/team-member-6.jpg",
      bio: "Visual communication expert with a passion for minimalist design.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Shreyas Kumar",
      position: "Sponsorship Lead",
      image: "/assets/team-member-7.jpg",
      bio: "Economics major with strong networking and negotiation skills.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Utkarsh Jaiswal",
      position: "Curation Lead",
      image: "/assets/team-member-8.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Nhiaal Ahmed R",
      position: "Curation Lead",
      image: "/assets/team-member-8.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Raghavendraa",
      position: "Marketing",
      image: "/assets/team-member-8.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dhanvanthini",
      position: "Photography",
      image: "dhanvantini.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Subramaniam",
      position: "Logistics",
      image: "/assets/team-member-8.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Tarang Gupta",
      position: "Logistics",
      image: "/assets/team-member-8.jpg",
      bio: "Bio pls",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    }
  ]

  return (
    <section id="board" className="section section-light board-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
      <div className="decor decor-3"></div>
      <div className="decor decor-4"></div>

      <div className="container">
        <div className={`section-header text-center ${isVisible ? "visible" : ""}`}>
          <span className="badge">Our Team</span>
          <h2 className="section-title">
            Meet Our <span>Board</span>
          </h2>
          <p className="section-subtitle">
            Dedicated individuals working together to bring ideas worth spreading to our community
          </p>
        </div>

        <div className={`board-grid ${isVisible ? "visible" : ""}`}>
          {boardMembers.map((member, index) => (
            <div key={index} className="member-card" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="member-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                <div className="social-overlay">
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-link">
                      <svg
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="social-link">
                      <svg
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
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href={member.social.instagram} className="social-link">
                      <svg
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
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team-container text-center">
          <a href="#contact" className="btn btn-primary join-team-btn">
            Join Our Team
            <svg
              className="btn-icon"
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Board

