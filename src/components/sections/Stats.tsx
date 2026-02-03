"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar, Building2, ThumbsUp, LucideProps } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Award,
  Calendar,
  Building: Building2,
  ThumbsUp,
};

function CountUp({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {Icon && (
                  <div className="flex justify-center mb-3">
                    <Icon size={24} className="text-accent/60" strokeWidth={1.5} />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-white/70 font-medium mb-1">{stat.label}</div>
                <div className="text-white/40 text-sm hidden md:block">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
