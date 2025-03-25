"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#e62b1e]/5 z-0"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e62b1e] opacity-5 rounded-full"></div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-[#e62b1e]/10 text-[#e62b1e] text-sm font-bold px-4 py-1 rounded-full mb-4">
                Stay Updated
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">
                Get the latest updates on our events, speakers, and initiatives delivered straight to your inbox.
              </p>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-[#f8f9fa] border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e62b1e] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 font-medium"
                  >
                    Subscribe
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from TEDx VIT.
                </p>
              </form>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] opacity-90"></div>
              <img src="/newsletter-bg.jpg" alt="TEDx VIT Newsletter" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <img src="/tedx-logo-white.png" alt="TEDx" className="h-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ideas Worth Sharing</h3>
                  <p className="text-white/90">Join our community of thinkers, innovators, and change-makers.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

