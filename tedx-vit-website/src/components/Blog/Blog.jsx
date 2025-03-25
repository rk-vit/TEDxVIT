"use client"

import { useState, useEffect, useRef } from "react"
import "./Blog.css"

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Impact of TEDx Talks on University Campuses",
      excerpt:
        "Exploring how TEDx events are transforming academic discourse and inspiring student innovation across campuses worldwide.",
      date: "October 15, 2023",
      author: "Priya Patel",
      category: "Events",
      image: "/assets/blog-1.jpg",
    },
    {
      id: 2,
      title: "Behind the Scenes: Organizing a TEDx Event",
      excerpt:
        "A look at the months of preparation, challenges, and triumphs that go into creating a successful TEDx experience.",
      date: "September 28, 2023",
      author: "Rahul Mehta",
      category: "Organization",
      image: "/assets/blog-2.jpg",
    },
    {
      id: 3,
      title: "From Audience to Speaker: My TEDx Journey",
      excerpt:
        "One student's transformative experience from being inspired by TEDx talks to delivering one on the red circle.",
      date: "August 12, 2023",
      author: "Ananya Singh",
      category: "Personal Stories",
      image: "/assets/blog-3.jpg",
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
    image: "/assets/blog-featured.jpg",
  }

  return (
    <section id="blog" className="section section-light blog-section" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
      <div className="decor decor-3"></div>
      <div className="decor decor-4"></div>

      <div className="container">
        <div className={`section-header text-center ${isVisible ? "visible" : ""}`}>
          <span className="badge">Our Blog</span>
          <h2 className="section-title">
            Latest <span>Articles</span>
          </h2>
          <p className="section-subtitle">Insights, stories, and updates from the TEDx VIT community</p>
        </div>

        <div className={`blog-grid ${isVisible ? "visible" : ""}`}>
          <div className="featured-post">
            <div className="featured-post-card">
              <div className="featured-image-container">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="featured-image"
                />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <div className="post-meta-item">
                    <svg
                      className="post-meta-icon"
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
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="post-meta-item">
                    <svg
                      className="post-meta-icon"
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="post-category">{featuredPost.category}</div>
                </div>

                <h3 className="featured-title">
                  <a href={`/blog/${featuredPost.id}`}>{featuredPost.title}</a>
                </h3>

                <p className="featured-excerpt">{featuredPost.excerpt}</p>

                <a href={`/blog/${featuredPost.id}`} className="read-more-link">
                  Read More
                  <svg
                    className="read-more-icon"
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="recent-posts">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="post-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="post-image-container">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="post-image" />
                </div>
                <div className="post-content">
                  <div className="post-meta small">
                    <span className="post-date">{post.date}</span>
                    <span className="post-category-badge">{post.category}</span>
                  </div>

                  <h3 className="post-title">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>

                  <p className="post-excerpt">{post.excerpt}</p>

                  <a href={`/blog/${post.id}`} className="read-more-link small">
                    Read More
                    <svg
                      className="read-more-icon"
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
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`view-all-blog-container text-center ${isVisible ? "visible" : ""}`}>
          <a href="/blog" className="btn btn-primary view-all-blog-btn">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog

