"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#e62b1e] opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#e62b1e] opacity-5 rounded-tr-full"></div>
      <div className="absolute top-1/3 left-0 w-16 h-64 bg-[#e62b1e]/5 rounded-r-full"></div>
      <div className="absolute bottom-1/3 right-0 w-16 h-64 bg-[#e62b1e]/5 rounded-l-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Contact Form Section */}
        <div id="contact" className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Have a question or want to <span className="text-[#e62b1e]">get involved?</span>
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  We'd love to hear from you! Whether you're interested in speaking, volunteering, or attending our
                  events, reach out to us.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-[#e62b1e]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Our Location</h3>
                      <p className="text-white/70">VIT University, Vellore, Tamil Nadu 632014, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-[#e62b1e]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Email Us</h3>
                      <p className="text-white/70">info@tedxvit.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-[#e62b1e]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Call Us</h3>
                      <p className="text-white/70">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/15"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/15"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/15"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/15"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-[#e62b1e] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/15"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#e62b1e] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#e62b1e] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#e62b1e] focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#e62b1e] focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 font-medium inline-flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/tedx-logo-white.png" alt="TEDx VIT" className="h-12 mb-6" />
            <p className="text-white/70 mb-6">
              TEDx VIT is a student-run organization dedicated to bringing the spirit of TED to our campus through
              engaging events and inspiring talks.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Events", "Blog", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-[#e62b1e] transition-colors flex items-center"
                  >
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
                      className="mr-2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Departments</h3>
            <ul className="space-y-3">
              {["Curation", "Marketing", "Design", "Technical", "Sponsorship"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#departments`}
                    className="text-white/70 hover:text-[#e62b1e] transition-colors flex items-center"
                  >
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
                      className="mr-2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "Sitemap"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-[#e62b1e] transition-colors flex items-center">
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
                      className="mr-2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TEDx VIT. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
          </p>
        </div>
      </div>
    </footer>
  )
}

