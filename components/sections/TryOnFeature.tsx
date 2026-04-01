"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function TryOnFeature() {
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
      id="tryon"
      className="relative overflow-hidden surface-royal-dark"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full bg-antique-gold/8 blur-[150px] animate-gold-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-14 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 lg:max-w-xl w-full">
            <div
              className={cn(
                "w-14 h-px bg-gradient-to-r from-antique-gold to-transparent mb-6 transition-all duration-1000 ease-luxe",
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              )}
            />

            <span
              className={cn(
                "block text-antique-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "80ms" }}
            >
              Virtual Experience
            </span>

            <h2
              className={cn(
                "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-ivory italic leading-[1.1] mb-5 text-balance transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "160ms" }}
            >
              See Yourself in{" "}
              <span className="text-gold-gradient">Royalty</span>
            </h2>

            <p
              className={cn(
                "text-soft-ivory/65 text-base sm:text-lg font-light leading-relaxed mb-7 transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "240ms" }}
            >
              Experience the grandeur before you own it. Our virtual try-on brings
              centuries of craftsmanship to your fingertips, letting you visualize
              each intricate detail as if it were made for you.
            </p>

            {/* Feature Points */}
            <ul
              className={cn(
                "space-y-3.5 mb-9 transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "320ms" }}
            >
              {[
                "True-to-life fabric visualization",
                "Personalized sizing recommendations",
                "360-degree view of embroidery details",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-antique-gold/70 flex-shrink-0" />
                  <span className="text-soft-ivory/75 text-sm tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "transition-all duration-800 ease-luxe",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "420ms" }}
            >
              <button className="group relative px-9 py-4 bg-antique-gold text-muted-black text-xs tracking-[0.18em] uppercase font-medium overflow-hidden transition-all duration-700 hover:shadow-[0_0_40px_rgba(201,169,97,0.4)]">
                <span className="relative z-10">Try Now</span>
                <div className="absolute inset-0 bg-burnished-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxe" />
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            className={cn(
              "flex-1 relative w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 transition-all duration-1000 ease-luxe",
              isVisible ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-8 lg:translate-x-10"
            )}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="relative mx-auto w-56 sm:w-64 lg:w-72">
              {/* Floating Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-14 bg-black/25 blur-[30px] rounded-full" />

              {/* Phone Frame */}
              <div className="relative bg-muted-black rounded-[2.8rem] p-2.5 shadow-2xl border border-antique-gold/20 animate-float">
                <div className="relative overflow-hidden rounded-[2.3rem] aspect-[9/19] bg-deep-maroon">
                  <Image
                    src="/person/p5.webp"
                    alt="Virtual Try-On Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/60 via-transparent to-transparent" />

                  {/* App UI */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="rounded-xl p-3 glass-royal-pill">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-soft-ivory text-xs font-medium">Royal Sherwani</span>
                        <span className="text-antique-gold text-[10px]">Perfect Match</span>
                      </div>
                      <div className="flex gap-1.5">
                        {["#6B1F2F", "#C9A961", "#1A1410"].map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border border-soft-ivory/20"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scan Line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-antique-gold/35 to-transparent animate-pulse" style={{ animationDuration: "2s" }} />
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-muted-black rounded-full" />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border border-antique-gold/15 rounded-full animate-breathe" />
              <div className="absolute -bottom-2 -left-4 w-14 h-14 border border-antique-gold/10 rounded-full animate-breathe" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Blend transition to next light section */}
      <div className="pointer-events-none">
        <div className="w-full h-14 sm:h-20 section-fade-to-light" />
      </div>
    </section>
  )
}

