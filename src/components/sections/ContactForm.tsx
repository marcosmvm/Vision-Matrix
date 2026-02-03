"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import {
  eventTypeOptions,
  attendeeCountOptions,
  timelineOptions,
} from "@/lib/data";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    eventType: "",
    attendeeCount: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const inputClasses =
    "w-full px-4 py-3 bg-[var(--background-secondary)] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors";
  const selectClasses =
    "w-full px-4 py-3 bg-[var(--background-secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Get Started
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              LET&apos;S BUILD YOUR VISION
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              Tell us about your event and we&apos;ll start crafting a
              tailored approach.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-[var(--background-secondary)] rounded-lg border border-white/10 max-w-4xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Thank You!
              </h3>
              <p className="text-[var(--foreground-muted)] mb-6">
                We&apos;ve received your inquiry and will be in touch within
                one business day.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormState({
                    name: "",
                    email: "",
                    company: "",
                    eventType: "",
                    attendeeCount: "",
                    timeline: "",
                    message: "",
                  });
                }}
                className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors rounded-lg"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={inputClasses}
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
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <select
                    name="eventType"
                    value={formState.eventType}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Event Type</option>
                    {eventTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="attendeeCount"
                    value={formState.attendeeCount}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Expected Attendees</option>
                    {attendeeCountOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Timeline</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event... *"
                  className={`${inputClasses} resize-none leading-relaxed`}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-[var(--accent)] text-black font-semibold uppercase tracking-wider hover:bg-[var(--accent-secondary)] transition-colors disabled:opacity-50 rounded-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full inline-block"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Submit Inquiry
                    </span>
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
