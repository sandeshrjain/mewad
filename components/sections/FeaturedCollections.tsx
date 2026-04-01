"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const collections = [
  {
    id: 1,
    title: "Royal Sherwani",
    subtitle: "Regal Craftsmanship",
    image: "/person/p2.webp",
  },
  {
    id: 2,
    title: "Heritage Kurta",
    subtitle: "Timeless Elegance",
    image: "/person/p3.webp",
  },
  {
    id: 3,
    title: "Bandhani Lehenga",
    subtitle: "Artisan Legacy",
    image: "/person/p4.webp",
  },
]

function CollectionCard({
  collection,
  index,
  isVisible,
}: {
  collection: (typeof collections)[0]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative transition-all ease-luxe",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      )}
      style={{
        transitionDuration: `${800 + index * 150}ms`,
        transitionDelay: `${index * 120}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl glass-royal-light transition-all ease-luxe duration-700",
          "shadow-[0_8px_40px_rgba(26,20,16,0.1)] hover:shadow-[0_20px_60px_rgba(26,20,16,0.2)]",
          "border border-antique-gold/15 hover:border-antique-gold/40"
        )}
        style={{
          transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className={cn(
              "object-cover transition-transform ease-luxe duration-1000",
              isHovered ? "scale-110" : "scale-100"
            )}
          />

          {/* Gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-deep-maroon/85 via-deep-maroon/15 to-transparent transition-opacity duration-700",
              isHovered ? "opacity-100" : "opacity-70"
            )}
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <div
            className={cn(
              "transition-all ease-luxe duration-700",
              isHovered ? "translate-y-0" : "translate-y-2"
            )}
          >
            <span className="block text-antique-gold text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-1.5 font-light">
              {collection.subtitle}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-soft-ivory italic">
              {collection.title}
            </h3>

            <div
              className={cn(
                "mt-3 overflow-hidden transition-all ease-luxe duration-500",
                isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <span className="inline-flex items-center text-antique-gold text-xs tracking-wider uppercase gap-2">
                Explore
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedCollections() {
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
      id="collections"
      className="relative overflow-hidden surface-royal-light"
    >
      {/* Top wave overlap from Hero */}
      <div className="h-10 sm:h-14 bg-soft-ivory/80" />

      {/* Ambient gold glow */}
      <div className="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-antique-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-burnished-gold/4 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-16 sm:pb-24 md:pb-32">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
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
            style={{ transitionDelay: "80ms" }}
          >
            Curated Excellence
          </span>
          <h2
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-black italic text-balance transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "160ms" }}
          >
            Featured Collections
          </h2>
          <p
            className={cn(
              "mt-4 sm:mt-6 text-muted-black/55 text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "240ms" }}
          >
            Each piece tells a story of royal heritage, meticulously crafted for the modern connoisseur.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 ease-luxe",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "700ms" }}
        >
          <button className="group relative px-7 py-3 text-muted-black text-xs tracking-[0.18em] uppercase font-light overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-antique-gold">
              View All Collections
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] group-hover:w-full h-px bg-antique-gold/40 group-hover:bg-antique-gold transition-all duration-600 ease-luxe" />
          </button>
        </div>
      </div>

      {/* Bottom blend into darker section */}
      <div className="pointer-events-none">
        <div className="w-full h-14 sm:h-20 section-fade-to-dark" />
      </div>
    </section>
  )
}

