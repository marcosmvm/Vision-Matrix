"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import {
  eventTypeOptions,
  attendeeCountOptions,
  timelineOptions,
} from "@/lib/data";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitted,
    serverError,
    setServerError,
    resetForm,
  } = useContactForm();

  const inputClasses =
    "w-full px-4 py-3 bg-[var(--background-secondary)] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors";
  const selectClasses =
    "w-full px-4 py-3 bg-[var(--background-secondary)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--accent)] transition-colors";
  const errorClasses = "text-red-400 text-xs mt-1";

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
                onClick={resetForm}
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
              {/* Server Error Banner */}
              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm flex-1">{serverError}</p>
                  <button
                    type="button"
                    onClick={() => setServerError(null)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              )}

              {/* Honeypot - hidden from real users */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <input
                  type="text"
                  {...register("website" as never)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name *"
                    className={`${inputClasses} ${errors.name ? "border-red-400/50" : ""}`}
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email *"
                    className={`${inputClasses} ${errors.email ? "border-red-400/50" : ""}`}
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Company *"
                    className={`${inputClasses} ${errors.company ? "border-red-400/50" : ""}`}
                  />
                  {errors.company && (
                    <p className={errorClasses}>{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Phone"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <select
                    {...register("eventType")}
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
                    {...register("attendeeCount")}
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
                    {...register("timeline")}
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
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your event... *"
                  className={`${inputClasses} resize-none leading-relaxed ${errors.message ? "border-red-400/50" : ""}`}
                />
                {errors.message && (
                  <p className={errorClasses}>{errors.message.message}</p>
                )}
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
