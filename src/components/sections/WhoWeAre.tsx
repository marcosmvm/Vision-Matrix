"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                Who We Are
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  COMMITTED TO
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  EXCELLENCE
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At Vision Matrix, we combine large-scale creativity, meticulous project
                management, and advanced equipment to deliver customized event solutions.
                From initial concept to final execution, our team works as a turnkey
                partner, handling every detail so you can focus on what matters most –
                connecting with your audience.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                href="/about"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-[#0a0a0f] transition-all duration-300"
              >
                About Us
              </Link>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
                  alt="Vision Matrix team at event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
