"use client";

import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data";

export default function CustomSolutions() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <FadeIn>
            <span className="text-white/80 text-sm font-semibold tracking-[0.3em] uppercase mb-6 inline-block">
              Custom Solutions
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
              WHERE CREATIVITY MEETS
              <br />
              FLAWLESS EXECUTION
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {siteConfig.description}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
