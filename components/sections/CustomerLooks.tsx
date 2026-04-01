"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const customerLooks = [
  {
    id: 1,
    image: "/mewad/person/p2.webp",
    name: "Arjun Mehta",
    handle: "@arjunstyle",
    tall: true,
  },
  {
    id: 2,
    image: "/mewad/person/p3.webp",
    name: "Priya Sharma",
    handle: "@priyalooks",
    tall: false,
  },
  {
    id: 3,
    image: "/mewad/person/p4.webp",
    name: "Vikram Singh",
    handle: "@vikramroyal",
    tall: true,
    featured: true,
  },
  {
    id: 4,
    image: "/mewad/person/p5.webp",
    name: "Ananya Patel",
    handle: "@ananyaethnic",
    tall: false,
  },
  {
    id: 5,
    image: "/mewad/person/p6.webp",
    name: "Rahul Verma",
    handle: "@rahulv",
    tall: false,
  },
  {
    id: 6,
    image: "/mewad/person/p1.webp",
    name: "Meera Reddy",
    handle: "@meerareddy",
    tall: true,
  },
]

function LookCard({
  look,
  index,
  isVisible,
}: {
  look: (typeof customerLooks)[0]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative group cursor-pointer transition-all ease-luxe",
        look.tall ? "row-span-2" : "row-span-1",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"
      )}
      style={{
        transitionDuration: `${750 + index * 100}ms`,
        transitionDelay: `${index * 70}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full h-full min-h-[180px] overflow-hidden rounded-2xl transition-all ease-luxe duration-600",
          "border border-antique-gold/10 hover:border-antique-gold/35",
          "shadow-[0_4px_20px_rgba(26,20,16,0.08)] hover:shadow-[0_12px_40px_rgba(26,20,16,0.15)]",
          look.featured ? "border-antique-gold/35 shadow-[0_4px_24px_rgba(201,169,97,0.15)]" : ""
        )}
        style={{
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        <Image
          src={look.image}
          alt={`${look.name}'s look`}
          fill
          className={cn(
            "object-cover transition-transform ease-luxe duration-1000",
            isHovered ? "scale-108" : "scale-100"
          )}
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        />

        {/* Gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-muted-black/85 via-muted-black/10 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Featured Badge */}
        {look.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-antique-gold/90 text-muted-black text-[9px] sm:text-[10px] tracking-widest uppercase rounded-full font-medium">
            Featured
          </div>
        )}

        {/* User Info */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-all ease-luxe duration-500",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <p className="text-soft-ivory text-sm font-medium">{look.name}</p>
          <p className="text-antique-gold text-xs">{look.handle}</p>
        </div>
      </div>
    </div>
  )
}

export function CustomerLooks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden surface-royal-light-soft"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full bg-antique-gold/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full bg-burnished-gold/4 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <div
            className={cn(
              "w-16 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-6 transition-all duration-1000 ease-luxe",
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block text-antique-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Community
          </span>
          <h2
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-black italic text-balance transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Customer Looks
          </h2>
          <p
            className={cn(
              "mt-4 text-muted-black/55 text-base sm:text-lg max-w-sm mx-auto font-light leading-relaxed transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "180ms" }}
          >
            Real moments of elegance shared by our distinguished patrons.
          </p>
        </div>

        {/* Responsive Gallery - 2 cols on mobile, 3 on sm+, auto rows */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
          style={{ gridAutoRows: "180px" }}
        >
          {customerLooks.map((look, index) => (
            <LookCard
              key={look.id}
              look={look}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className={cn(
            "text-center mt-10 sm:mt-14 transition-all duration-1000 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "550ms" }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 text-muted-black/60 hover:text-antique-gold transition-colors duration-500"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-xs tracking-[0.18em] uppercase">Follow us @mewad</span>
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Blend to dark reviews section */}
      <div className="pointer-events-none">
        <div className="w-full h-14 sm:h-20 section-fade-to-dark" />
      </div>
    </section>
  )
}
