"use client"

import { useState, useEffect, useRef } from "react"
import "./Departments.css"

const Departments = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("curation")
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

  const departments = [
    {
      id: "curation",
      name: "Curation",
      description:
        "Responsible for selecting and preparing speakers, ensuring high-quality content that aligns with TED's mission of 'ideas worth spreading'.",
      icon: (
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
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      responsibilities: [
        "Speaker selection and vetting",
        "Content development and coaching",
        "Talk preparation and rehearsals",
        "Quality assurance of presentations",
      ],
      image: "/assets/department-curation.jpg",
    },
    {
      id: "marketing",
      name: "Marketing",
      description:
        "Drives awareness and engagement through strategic communication, social media management, and promotional campaigns.",
      icon: (
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
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      responsibilities: [
        "Brand management and social media",
        "Content creation and distribution",
        "Audience engagement strategies",
        "Analytics and performance tracking",
      ],
      image: "/assets/department-marketing.jpg",
    },
    {
      id: "design",
      name: "Design",
      description:
        "Creates visual identity and materials that reflect TEDx's brand values while maintaining a unique local character.",
      icon: (
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
          <circle cx="13.5" cy="6.5" r="2.5"></circle>
          <circle cx="17.5" cy="10.5" r="2.5"></circle>
          <circle cx="8.5" cy="7.5" r="2.5"></circle>
          <circle cx="6.5" cy="12.5" r="2.5"></circle>
          <path d="M12 20c-3.3 0-6-2.7-6-6 0-.3 0-.7.1-1"></path>
          <path d="M12 20c3.3 0 6-2.7 6-6 0-.4-.1-.7-.1-1"></path>
        </svg>
      ),
      responsibilities: [
        "Visual identity and branding",
        "Digital and print materials",
        "Stage and venue design",
        "Promotional graphics and videos",
      ],
      image: "/assets/department-design.jpg",
    },
    {
      id: "tech",
      name: "Technical",
      description:
        "Ensures seamless execution of events through sound, lighting, recording, and livestreaming management.",
      icon: (
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
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      responsibilities: [
        "Audio-visual setup and management",
        "Livestreaming and recording",
        "Website maintenance",
        "Technical troubleshooting",
      ],
      image: "/assets/department-tech.jpg",
    },
    {
      id: "sponsorship",
      name: "Sponsorship",
      description: "Builds partnerships with organizations to secure financial and in-kind support for TEDx events.",
      icon: (
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
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      responsibilities: [
        "Partnership development",
        "Sponsor relations and management",
        "Funding strategies",
        "Value proposition creation",
      ],
      image: "/assets/department-sponsorship.jpg",
    },
    {
      id: "photography",
      name: "Photography",
      description:
        "Captures and preserves moments through high-quality photography, ensuring visually compelling storytelling for events and promotions.",
      icon: (
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
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
          <path d="M3 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"></path>
          <path d="M16 2h-4a2 2 0 0 0-2 2v2H7a2 2 0 0 0-2 2"></path>
        </svg>
      ),
      responsibilities: [
        "Event photography and documentation",
        "Photo editing and enhancement",
        "Creative direction for visual storytelling",
        "Managing and organizing photo archives",
      ],
      image: "/assets/department-photography.jpg",
    },
    {
      id: "logistics",
      name: "Logistics",
      description:
        "Ensures smooth operations by managing resources, coordinating schedules, and overseeing event logistics for seamless execution.",
      icon: (
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
          <path d="M3 10h11"></path>
          <path d="M3 6h15"></path>
          <path d="M3 14h9"></path>
          <circle cx="19" cy="10" r="2"></circle>
          <circle cx="19" cy="4" r="2"></circle>
          <circle cx="19" cy="16" r="2"></circle>
        </svg>
      ),
      responsibilities: [
        "Planning and managing event logistics",
        "Coordinating transportation and resources",
        "Ensuring timely execution of activities",
        "Inventory and materials management",
      ],
      image: "/assets/department-logistics.jpg",
    }
        
  ]

  const activeDepartment = departments.find((dept) => dept.id === activeTab) || departments[0]

  return (
    <section id="departments" className="section section-gray departments-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-top"></div>
      <div className="decor decor-circle-1"></div>
      <div className="decor decor-circle-2"></div>
      <div className="decor decor-rect-1"></div>
      <div className="decor decor-rect-2"></div>

      <div className="container">
        <div className={`section-header text-center ${isVisible ? "visible" : ""}`}>
          <span className="badge">Our Structure</span>
          <h2 className="section-title">
            Specialized <span>Departments</span>
          </h2>
          <p className="section-subtitle">
            Our dedicated teams work together to create extraordinary TEDx experiences, each bringing unique expertise
            to make our events successful.
          </p>
        </div>

        <div className={`departments-content ${isVisible ? "visible" : ""}`}>
          <div className="tabs-list">
            {departments.map((dept) => (
              <button
                key={dept.id}
                className={`tab-button ${activeTab === dept.id ? "active" : ""}`}
                onClick={() => setActiveTab(dept.id)}
              >
                <span className="tab-icon">{dept.icon}</span>
                <span>{dept.name}</span>
              </button>
            ))}
          </div>

          <div className="department-details">
            <div className="department-grid">
              <div className="department-info">
                <div className="department-icon">{activeDepartment.icon}</div>
                <h3 className="department-title">{activeDepartment.name} Department</h3>
                <p className="department-description">{activeDepartment.description}</p>

                <h4 className="responsibilities-title">Key Responsibilities:</h4>
                <ul className="responsibilities-list">
                  {activeDepartment.responsibilities.map((resp, index) => (
                    <li key={index} className="responsibility-item">
                      <span className="check-icon">
                        <svg
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
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="department-join">
                  <a href="#contact" className="join-link">
                    Join This Department
                    <svg
                      className="arrow-icon"
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
              <div className="department-image">
                <img src={activeDepartment.image || "/placeholder.svg"} alt={`${activeDepartment.name} Department`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Departments

