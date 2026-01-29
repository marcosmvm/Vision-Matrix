"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              LET&apos;S MAKE YOUR VISION A REALITY
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              At Vision Matrix, we take a detailed approach to understand your unique needs
              and tailor our services accordingly. Reach out today!
            </p>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delay={0.2}>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-[#0f1119] rounded-lg border border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Message Sent!
              </h3>
              <p className="text-[var(--foreground-muted)] mb-6">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                  });
                }}
                className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder="First Name *"
                    className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder="Last Name *"
                    className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              {/* Email & Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Company *"
                    className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Phone (Optional)"
                  className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vision... *"
                  className="w-full px-4 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-[var(--accent)] text-black font-semibold uppercase tracking-wider hover:bg-[var(--accent)]/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full inline-block"
                      />
                      Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
