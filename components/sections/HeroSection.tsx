"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const logoPath = "/mewad/logo.jpeg"

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  const parallaxOffset = scrollY * 0.35

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden surface-royal-hero"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#24132a]/88 via-[#4a1f37]/72 to-[#2a1424]/86 z-10" />
        <Image
          src="/mewad/person/p1.webp"
          alt="Mewad hero"
          fill
          priority
          className="object-cover object-center scale-110"
        />
      </div>

      {/* Ambient Gold Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full bg-antique-gold/8 blur-[150px] animate-gold-pulse" />
      </div>

      {/* Floating Gold Dots - reduced, no random */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[
          { size: 3, left: "12%", top: "20%", delay: 0, dur: 18 },
          { size: 4, left: "78%", top: "35%", delay: 2, dur: 22 },
          { size: 2, left: "55%", top: "65%", delay: 5, dur: 16 },
          { size: 3, left: "30%", top: "75%", delay: 3, dur: 20 },
          { size: 4, left: "88%", top: "55%", delay: 7, dur: 25 },
          { size: 2, left: "20%", top: "45%", delay: 9, dur: 19 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-antique-gold/40 blur-[1px] animate-drift"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-5 sm:px-8 max-w-4xl mx-auto pt-28 sm:pt-0">
        {/* Logo - visible prominently in hero */}
        <div
          className={cn(
            "flex flex-col items-center mb-8 sm:mb-10 transition-all duration-1000 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5 p-1">
            <Image
              src={logoPath}
              alt="Mewad logo"
              fill
              className="object-contain rounded-full border border-antique-gold/30"
            />
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent" />
        </div>

        {/* Brand tag */}
        <div
          className={cn(
            "mb-5 glass-royal-pill rounded-full px-4 py-2.5 inline-block transition-all duration-1000 delay-200 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="block text-soft-ivory text-lg sm:text-xl font-serif uppercase tracking-[0.28em] mb-2">
            Mewad
          </span>
          <span className="text-antique-gold/80 text-xs sm:text-sm tracking-[0.35em] uppercase font-light">
            Est. Heritage
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={cn(
            "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-soft-ivory mb-5 leading-[1.08] text-balance transition-all duration-1000 delay-300 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
        >
          <span className="block italic">Riyasat of</span>
          <span className="block text-gold-gradient">Traditional</span>
          <span className="block italic">Elegance</span>
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            "text-soft-ivory/75 text-sm sm:text-base md:text-lg font-light tracking-[0.18em] uppercase mb-10 sm:mb-12 transition-all duration-1000 delay-500 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          Crafted heritage. Modern presence.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "transition-all duration-1000 delay-700 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="inline-flex max-w-full glass-royal-dark rounded-2xl p-2 sm:p-2.5 border border-antique-gold/25 shadow-[0_14px_35px_rgba(20,10,20,0.35)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <button className="group relative w-full sm:w-auto px-8 py-3.5 border border-antique-gold/60 text-soft-ivory text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-700 hover:border-antique-gold hover:shadow-[0_0_30px_rgba(201,169,97,0.3)]">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-muted-black">
                  Explore Collection
                </span>
                <div className="absolute inset-0 bg-antique-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-luxe" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 text-antique-gold text-xs tracking-[0.2em] uppercase font-light hover:text-soft-ivory transition-colors duration-500">
                Our Story &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ease-luxe",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex flex-col items-center text-soft-ivory/50">
          <span className="text-[10px] tracking-[0.25em] uppercase mb-2.5">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-antique-gold/60 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Smooth mist transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div
          className="h-12 sm:h-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,246,235,0) 0%, rgba(251,246,235,0.2) 46%, rgba(251,246,235,0.55) 76%, rgba(251,246,235,1) 100%)",
          }}
        />
      </div>
    </section>
  )
}


