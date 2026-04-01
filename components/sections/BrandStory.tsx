"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function BrandStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden surface-royal-light"
    >
      {/* Ambient spots */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-antique-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-burnished-gold/4 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            {/* Decorative */}
            <div
              className={cn(
                "mb-10 transition-all duration-1000 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-antique-gold/55" />
                <svg className="w-7 h-7 text-antique-gold/55 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            <h2
              className={cn(
                "font-serif text-3xl sm:text-4xl md:text-5xl text-muted-black italic leading-[1.2] mb-7 text-balance transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "120ms" }}
            >
              A Legacy of{" "}
              <span className="text-gold-gradient">Tradition,</span>
              {" "}Redefined
            </h2>

            <div
              className={cn(
                "w-20 h-px bg-gradient-to-r from-antique-gold via-antique-gold to-transparent mb-7 transition-all duration-1000 ease-luxe",
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              )}
              style={{ transitionDelay: "220ms" }}
            />

            <div className="space-y-5 mb-8">
              <p
                className={cn(
                  "text-muted-black/65 text-base sm:text-lg font-light leading-relaxed transition-all duration-800 ease-luxe",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                Born from a royal Indian design legacy, Mewad carries forward a
                centuries-old tradition of exquisite craftsmanship. Each thread we
                weave tells a story of artisans whose skills have been passed down
                through generations.
              </p>
              <p
                className={cn(
                  "text-muted-black/65 text-base sm:text-lg font-light leading-relaxed transition-all duration-800 ease-luxe",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: "380ms" }}
              >
                We believe that true luxury lies not in ostentation, but in the
                quiet confidence of wearing something truly exceptional, crafted
                with patience, passion, and an unwavering commitment to excellence.
              </p>
            </div>

            {/* Pull Quote */}
            <div
              className={cn(
                "relative py-6 mb-8 transition-all duration-1000 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "460ms" }}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-10 bg-antique-gold/40 rounded-full" />
              <blockquote className="font-serif text-xl sm:text-2xl text-antique-gold italic leading-relaxed pl-5">
                &ldquo;Where heritage meets the modern soul&rdquo;
              </blockquote>
            </div>

            <div
              className={cn(
                "mt-8 transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "620ms" }}
            >
              <span className="text-antique-gold/55 text-xs tracking-[0.3em] uppercase">
                Crafting Excellence Since 1952
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative w-full h-72 sm:h-96 lg:h-full lg:min-h-[520px] transition-all duration-1000 ease-luxe",
              isVisible ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-8 lg:translate-x-10"
            )}
            style={{ transitionDelay: "180ms" }}
          >
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-antique-gold/25 shadow-[0_20px_80px_rgba(26,20,16,0.2)] hover:shadow-[0_20px_80px_rgba(201,169,97,0.2)] transition-all duration-700 group">
                <Image
                src="/mewad/shop/img7.webp"
                alt="Mewad Atelier Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted-black/30" />

              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-10 h-10 border-l-2 border-t-2 border-antique-gold/40 group-hover:border-antique-gold/65 transition-colors duration-500" aria-hidden="true" />
              <div className="absolute bottom-5 right-5 w-10 h-10 border-r-2 border-b-2 border-antique-gold/40 group-hover:border-antique-gold/65 transition-colors duration-500" aria-hidden="true" />
            </div>

            {/* Decorative floating rings */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-3xl border border-antique-gold/10 -z-10 animate-float" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-18 h-18 rounded-full border border-antique-gold/8 -z-10 animate-breathe" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Blend to footer */}
      <div className="pointer-events-none">
        <div className="w-full h-10 sm:h-14 section-fade-to-footer" />
      </div>
    </section>
  )
}

