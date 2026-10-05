"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { ResendSetupGuide } from "@/components/resend-setup-guide"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-white mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm">Let's Create Together</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white">favourajuzie2020@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-white">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-white">+2348100647270</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent mb-8" />
              <p className="font-medium mb-2 text-white">Follow me</p>
              <div className="flex items-center gap-4">
               <a
  href="https://www.linkedin.com/in/favour-ajuzie-5468b832b/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors"
>
  <svg
    className="h-5 w-5 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.43a2.07 2.07 0 11-.01-4.14 2.07 2.07 0 01.01 4.14zM3.56 20.45h3.56V8.99H3.56v11.46z" />
  </svg>
</a>
                 <a
  href="https://www.behance.net/favourajuzie"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Behance"
  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors"
>
                  <svg
  className="h-5 w-5 text-white"
  fill="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M2.5 5.5h7.2c2.1 0 3.5 1.1 3.5 2.9 0 1.2-.6 2.1-1.6 2.5 1.5.4 2.4 1.4 2.4 2.9 0 2.1-1.7 3.6-4.4 3.6H2.5V5.5zm3 2.3v2.3h3.6c.7 0 1.1-.4 1.1-1.1 0-.7-.4-1.2-1.1-1.2H5.5zm0 4.6v2.6h3.8c.8 0 1.3-.5 1.3-1.3s-.5-1.3-1.3-1.3H5.5zM15.2 7.1h5.1V8.8h-5.1V7.1zm2.5 2.7c2.6 0 4.2 1.7 4.2 4.5v.5h-6.3c.2 1.1.9 1.7 2 1.7.8 0 1.4-.3 1.8-.9h2.3c-.7 1.6-2.1 2.5-4.1 2.5-2.8 0-4.6-1.6-4.6-4.1 0-2.5 1.8-4.2 4.7-4.2zm1.9 3.3c-.2-.9-.8-1.5-1.9-1.5-1 0-1.8.5-2 1.5h3.9z" />
</svg>
                </a>
                <a
  href="https://wa.me/2348100647270"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors"
>
                  <svg
  className="h-5 w-5 text-white"
  fill="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.41 1.26 4.87L2 22l5.29-1.27A9.96 9.96 0 0012.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm0 18.2c-1.55 0-3.06-.42-4.39-1.22l-.31-.18-3.14.75.76-3.06-.2-.32A8.2 8.2 0 013.84 12c0-4.53 3.68-8.2 8.2-8.2s8.16 3.67 8.16 8.2-3.63 8.2-8.16 8.2zm4.5-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.4-.42-.55-.43h-.47c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3z" />
</svg>
                </a>
               <a
  href="mailto:favourajuzie2020@gmail.com"
  aria-label="Email"
  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors"
>
                 <svg
  className="h-5 w-5 text-white"
  fill="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M2.5 5.5A2.5 2.5 0 015 3h14a2.5 2.5 0 012.5 2.5v13A2.5 2.5 0 0119 21H5a2.5 2.5 0 01-2.5-2.5v-13zm2.5.2v.37l7 5.1 7-5.1V5.7a.2.2 0 00-.2-.2H5.2a.2.2 0 00-.2.2zm14 2.84l-7 5.1-7-5.1v9.96c0 .11.09.2.2.2h13.6a.2.2 0 00.2-.2V8.54z" />
</svg>
                </a>
              </div>
            </div>

            <ResendSetupGuide />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
