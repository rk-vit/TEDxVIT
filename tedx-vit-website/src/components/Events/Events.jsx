"use client"

import { useState, useEffect, useRef } from "react"
import "./Events.css"

const Events = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("upcoming")
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

  const upcomingEvents = [
    {
      id: 1,
      title: "IGNITE'25",
      date: "March 26, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "VIT Main Auditorium",
      image: "/event1.jpg",
      description: "Join us for a day of inspiring talks and performances that challenge us to reimagine our future.",
      speakers: ["Dr. Aisha Patel", "Vikram Mehta", "Sarah Johnson"],
      ticketsAvailable: true,
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "TEDx VIT 2022: Breakthrough",
      date: "October 10, 2022",
      location: "VIT Main Auditorium",
      image: "/assets/event-4.jpg",
      videoLink: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 5,
      title: "TEDx VIT Salon: Climate Action",
      date: "March 22, 2022",
      location: "Environmental Sciences Building",
      image: "/assets/event-5.jpg",
      videoLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 6,
      title: "TEDx VIT 2021: Resilience",
      date: "November 5, 2021",
      location: "Virtual Event",
      image: "/assets/event-6.jpg",
      videoLink: "https://www.youtube.com/watch?v=example3",
    },
    {
      id: 7,
      title: "TEDx VIT Youth: New Perspectives",
      date: "February 15, 2021",
      location: "Student Center",
      image: "/assets/event-7.jpg",
      videoLink: "https://www.youtube.com/watch?v=example4",
    },
  ]

  return (
    <section id="events" className="section section-gray events-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-top"></div>
      <div className="decor decor-circle-1"></div>
      <div className="decor decor-circle-2"></div>
      <div className="decor decor-circle-3"></div>
      <div className="decor decor-circle-4"></div>

      <div className="container">
        <div className={`section-header text-center ${isVisible ? "visible" : ""}`}>
          <span className="badge">Join Us</span>
          <h2 className="section-title">
            Upcoming <span>Events</span>
          </h2>
          <p className="section-subtitle">
            Discover our upcoming and past events featuring inspiring speakers and innovative ideas
          </p>
        </div>

        <div className={`events-content ${isVisible ? "visible" : ""}`}>
          <div className="tabs-container">
            <div className="tabs-list">
              <button
                className={`tab-button ${activeTab === "upcoming" ? "active" : ""}`}
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming Events
              </button>
              <button
                className={`tab-button ${activeTab === "past" ? "active" : ""}`}
                onClick={() => setActiveTab("past")}
              >
                Past Events
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "upcoming" && (
                <div className="upcoming-events">
                  <div className="events-grid">
                    {upcomingEvents.map((event, index) => (
                      <div key={event.id} className="event-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="event-image-container">
                          <img src={event.image || "/placeholder.svg"} alt={event.title} className="event-image" />
                          {event.ticketsAvailable && <div className="event-badge">Tickets Available</div>}
                        </div>
                        <div className="event-details">
                          <h3 className="event-title">{event.title}</h3>

                          <div className="event-meta">
                            <div className="event-meta-item">
                              <svg
                                className="event-meta-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="event-meta-item">
                              <svg
                                className="event-meta-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>{event.time}</span>
                            </div>
                            <div className="event-meta-item">
                              <svg
                                className="event-meta-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <p className="event-description">{event.description}</p>

                          <div className="event-speakers">
                            <p className="speakers-label">Speakers:</p>
                            <div className="speakers-list">
                              {event.speakers.map((speaker, idx) => (
                                <span key={idx} className="speaker-tag">
                                  {speaker}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className={`event-cta ${event.ticketsAvailable ? "tickets" : "waitlist"}`}>
                            {event.ticketsAvailable ? "Get Tickets" : "Join Waitlist"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "past" && (
                <div className="past-events">
                  <div className="past-events-grid">
                    {pastEvents.map((event, index) => (
                      <div key={event.id} className="past-event-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="past-event-image-container">
                          <img src={event.image || "/placeholder.svg"} alt={event.title} className="past-event-image" />
                          <div className="past-event-overlay">
                            <a href={event.videoLink} target="_blank" rel="noopener noreferrer" className="watch-btn">
                              Watch Talks
                            </a>
                          </div>
                        </div>
                        <div className="past-event-details">
                          <h3 className="past-event-title">{event.title}</h3>
                          <div className="past-event-meta">
                            <div className="past-event-meta-item">
                              <svg
                                className="past-event-meta-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="past-event-meta-item">
                              <svg
                                className="past-event-meta-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="view-all-container">
                    <a href="/events" className="view-all-link">
                      View All Past Events
                      <svg
                        className="view-all-icon"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

