"use client"

import { useEffect, useRef, useState } from "react"
import "./AboutUs.css"

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: "10+",
      label: "Years of Excellence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      value: "50+",
      label: "Events Organized",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    },
    {
      value: "100+",
      label: "Speakers Hosted",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      value: "10,000+",
      label: "Attendees",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section section-light about-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
      <div className="decor decor-3"></div>
      <div className="decor decor-4"></div>
      
      <div className="container">
        <div className={`about-grid ${isVisible ? 'visible' : ''}`}>
          <div className="about-content">
            <span className="badge">About Us</span>
            <h2 className="section-title">
              About <span>TEDx VIT</span>
            </h2>
            
            <p className="about-text">
              TEDx VIT is a student-run organization that aims to bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration and wonder – and provoke conversations that matter.
            </p>
            
            <div className="mission-values">
              <div className="mission-item">
                <div className="mission-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1 -5.5" strokeLinejoin="round" />
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">Our Mission</h3>
                  <p className="mission-text">
                    To spread ideas worth sharing and inspire our community through powerful talks and engaging events.
                  </p>
                </div>
              </div>
              
              <div className="mission-item">
                <div className="mission-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h3 className="mission-title">What is TEDx?</h3>
                  <p className="mission-text">
                    TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#events" className="btn btn-dark explore-btn">
              Explore Our Events
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
          
          <div className="about-image-container">
            <div className="main-image">
              <img src="/AboutUs.jpg" alt="TEDx VIT Event" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <div className="overlay-badge">TEDx VIT</div>
                  <h3>Ideas Worth Spreading</h3>
                  <p>Inspiring talks that challenge, inform, and engage our community</p>
                </div>
              </div>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

