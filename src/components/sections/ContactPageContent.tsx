"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  X,
  MessageSquare,
  FileText,
  Rocket,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import {
  siteConfig,
  eventTypeOptions,
  attendeeCountOptions,
  timelineOptions,
} from "@/lib/data";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactPageContent() {
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
    "w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)] transition-colors";
  const selectClasses =
    "w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--accent)] transition-colors";
  const errorClasses = "text-red-400 text-xs mt-1";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase">
                Start a Project
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Let&apos;s Build Your{" "}
                <span className="text-gradient">Vision</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
                Tell us about your event and we&apos;ll put together a
                tailored approach. No commitment, no cookie-cutter proposals
                — just a straightforward conversation about what you need.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Sidebar: Contact Info + Process */}
            <div className="lg:col-span-1 space-y-8">
              <FadeIn delay={0.3}>
                <div className="p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email Us
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Call Us
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Location
                      </h3>
                      <p className="text-[var(--foreground-muted)]">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* What to Expect */}
              <FadeIn delay={0.6}>
                <div className="p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-5">
                    What to Expect
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={18} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Discovery Call</p>
                        <p className="text-[var(--foreground-muted)] text-xs">
                          We learn about your event, goals, and audience
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Custom Proposal</p>
                        <p className="text-[var(--foreground-muted)] text-xs">
                          A tailored scope and investment breakdown
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                        <Rocket size={18} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Kickoff</p>
                        <p className="text-[var(--foreground-muted)] text-xs">
                          Your dedicated team begins bringing your vision to life
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.3} className="lg:col-span-2">
              <div className="p-8 bg-[var(--background-secondary)] rounded-xl border border-white/5">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-[var(--foreground-muted)] mb-2">
                      We&apos;ve received your inquiry and will be in touch within one business day.
                    </p>
                    <p className="text-[var(--foreground-muted)] text-sm mb-6">
                      In the meantime, explore our{" "}
                      <a href="/case-studies" className="text-[var(--accent)] hover:underline">
                        case studies
                      </a>{" "}
                      to see our work in action.
                    </p>
                    <Button onClick={resetForm} variant="secondary">
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          {...register("name")}
                          className={`${inputClasses} ${errors.name ? "border-red-400/50" : ""}`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          {...register("email")}
                          className={`${inputClasses} ${errors.email ? "border-red-400/50" : ""}`}
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-white mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          {...register("phone")}
                          className={inputClasses}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="block text-sm font-medium text-white mb-2">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          {...register("company")}
                          className={`${inputClasses} ${errors.company ? "border-red-400/50" : ""}`}
                          placeholder="Your company"
                        />
                        {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="contact-eventType" className="block text-sm font-medium text-white mb-2">
                          Event Type
                        </label>
                        <select id="contact-eventType" {...register("eventType")} className={selectClasses}>
                          <option value="">Select type...</option>
                          {eventTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-attendeeCount" className="block text-sm font-medium text-white mb-2">
                          Expected Attendees
                        </label>
                        <select id="contact-attendeeCount" {...register("attendeeCount")} className={selectClasses}>
                          <option value="">Select range...</option>
                          {attendeeCountOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-timeline" className="block text-sm font-medium text-white mb-2">
                          Timeline
                        </label>
                        <select id="contact-timeline" {...register("timeline")} className={selectClasses}>
                          <option value="">Select timeline...</option>
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">
                        Tell Us About Your Event *
                      </label>
                      <textarea
                        id="contact-message"
                        {...register("message")}
                        rows={5}
                        className={`${inputClasses} resize-none ${errors.message ? "border-red-400/50" : ""}`}
                        placeholder="Share your vision — what are you looking to achieve, and how can we help?"
                      />
                      {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Submit Inquiry
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
