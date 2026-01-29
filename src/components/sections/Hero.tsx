"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import VideoBackground from "@/components/ui/VideoBackground";
import TextReveal from "@/components/animations/TextReveal";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Using a placeholder video URL */}
      <VideoBackground
        src="https://cdn.pixabay.com/video/2020/05/25/40130-424930953_large.mp4"
        poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
        showControls
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90">
            Premium Event Production
          </span>
        </motion.div>

        <TextReveal
          text={siteConfig.tagline}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white justify-center mb-6"
          delay={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          From concept to execution, we create extraordinary experiences that
          captivate audiences and elevate your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Start Your Project
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            <Play size={18} className="mr-2" />
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
