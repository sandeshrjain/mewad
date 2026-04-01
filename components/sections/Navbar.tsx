"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Try On", href: "#tryon" },
  { label: "Our Story", href: "#story" },
  { label: "Visit Us", href: "#store" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const logoPath = "/logo.jpeg"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "glass-royal-dark shadow-[0_16px_45px_rgba(26,12,20,0.45)] border-b border-antique-gold/25"
            : "bg-gradient-to-b from-royal-midnight/75 via-deep-maroon/35 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo + Brand Name */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="Mewad home"
            >
              <div
                className={cn(
                  "relative flex-shrink-0 transition-all duration-500",
                  scrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-12 sm:h-12"
                )}
              >
                  <Image
                  src={logoPath}
                  alt="Mewad logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-serif uppercase tracking-[0.2em] transition-all duration-500",
                    scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
                    "text-soft-ivory group-hover:text-antique-gold"
                  )}
                >
                  Mewad
                </span>
                <span className="text-antique-gold/70 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light mt-1">
                  Est. Heritage
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-soft-ivory/70 hover:text-antique-gold text-xs tracking-[0.18em] uppercase transition-colors duration-400 relative group/link"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-antique-gold group-hover/link:w-full transition-all duration-500" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#"
                className="px-5 py-2.5 rounded-full glass-royal-pill text-soft-ivory text-xs tracking-[0.2em] uppercase hover:bg-antique-gold hover:text-muted-black hover:border-antique-gold transition-all duration-500"
              >
                Shop Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 text-soft-ivory"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={cn(
                  "block w-6 h-px bg-current transition-all duration-400",
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                )}
              />
              <span
                className={cn(
                  "block w-4 h-px bg-current transition-all duration-400 ml-auto",
                  menuOpen ? "opacity-0 translate-x-2" : ""
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-current transition-all duration-400",
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-gradient-to-b from-royal-midnight/98 via-deep-maroon/96 to-royal-plum/98 flex flex-col items-center justify-center transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-antique-gold/5 blur-[100px]" />

        <nav className="relative z-10 flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "font-serif italic text-3xl text-soft-ivory hover:text-antique-gold transition-all duration-500",
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "mt-4 px-8 py-3 bg-antique-gold text-muted-black text-xs tracking-[0.2em] uppercase font-medium transition-all duration-500",
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: menuOpen ? "420ms" : "0ms" }}
          >
            Shop Now
          </a>
        </nav>

        {/* Bottom brand */}
        <div
          className={cn(
            "absolute bottom-10 text-antique-gold/30 text-xs tracking-[0.3em] uppercase transition-all duration-500",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
        >
          Mewad - Riyasat of Traditional Elegance
        </div>
      </div>
    </>
  )
}

