"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const footerNavLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Event Gallery", href: "/event-gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background">
      {/* Top CTA Section */}
      <div className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/80 text-lg tracking-wider uppercase mb-6">
            Event Production Services Worldwide
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0a0a0f] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <Logo size="md" />
              <p className="text-[var(--foreground-muted)] text-sm mt-6">
                © {new Date().getFullYear()} Vision Matrix
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {footerNavLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col items-center md:items-end gap-4">
              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-end gap-2 text-sm text-white/80">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  {siteConfig.contact.phone}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {siteConfig.contact.address}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
