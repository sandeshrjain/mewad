"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/mewad.official",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Maps",
    href: "https://share.google/eywXnaVYp3llX3Ob4",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hi%20Mewad%2C%20I%27d%20like%20to%20know%20more%20about%20your%20collection.",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#story" },
  { label: "Visit", href: "#store" },
  { label: "Try On", href: "#tryon" },
]

export function Footer() {
  return (
    <footer className="relative surface-royal-footer overflow-hidden">
      {/* Top gold separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-antique-gold/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 rounded-full bg-antique-gold/5 blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-14 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo + Brand Name - prominent */}
          <div className="mb-10 sm:mb-12">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 rounded-full overflow-hidden border border-antique-gold/35 glass-royal-pill">
              <Image
                src="/mewad/logo.jpeg"
                alt="Mewad Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif uppercase text-3xl sm:text-4xl text-soft-ivory tracking-[0.2em] mb-1">
              Mewad
            </h2>
            <p className="text-antique-gold/55 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              Riyasat of Traditional Elegance
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-9" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-soft-ivory/55 text-xs tracking-[0.18em] uppercase hover:text-antique-gold transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-5 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center",
                  "border border-antique-gold/25 text-soft-ivory/65 glass-royal-pill",
                  "hover:border-antique-gold/55 hover:text-antique-gold hover:shadow-[0_0_20px_rgba(201,169,97,0.25)]",
                  "transition-all duration-500"
                )}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-antique-gold/35 to-transparent mb-7" aria-hidden="true" />

          {/* Copyright */}
          <p className="text-soft-ivory/35 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Mewad. All rights reserved.
          </p>
          <p className="text-soft-ivory/25 text-xs tracking-wide mt-1.5">
            Crafted with heritage in Malad Station, Mumbai
          </p>
        </div>
      </div>
    </footer>
  )
}
