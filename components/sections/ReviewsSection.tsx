"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Rajesh Kapoor",
    avatar: "/mewad/person/p1.webp",
    rating: 5,
    text: "The craftsmanship is unparalleled. Every stitch tells a story of heritage and dedication. Wearing Mewad makes me feel connected to centuries of royal tradition.",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Sunita Devi",
    avatar: "/mewad/person/p2.webp",
    rating: 5,
    text: "From the moment I received my lehenga, I knew this was special. The attention to detail and quality of fabric exceeded all my expectations.",
    location: "Jaipur",
  },
  {
    id: 3,
    name: "Aditya Malhotra",
    avatar: "/mewad/person/p3.webp",
    rating: 5,
    text: "My wedding sherwani from Mewad was the highlight of the celebration. Everyone asked where I got it. Truly a masterpiece of traditional artistry.",
    location: "Delhi",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn("w-3.5 h-3.5", i < rating ? "text-antique-gold" : "text-soft-ivory/20")}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({
  review,
  index,
  isVisible,
}: {
  review: (typeof reviews)[0]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn(
        "relative transition-all ease-luxe",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{
        transitionDuration: `${800 + index * 150}ms`,
        transitionDelay: `${180 + index * 120}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "rounded-2xl p-6 sm:p-8 transition-all ease-luxe duration-700",
          "bg-soft-ivory/6 backdrop-blur-sm",
          "border border-antique-gold/15 hover:border-antique-gold/35",
          "shadow-[0_8px_40px_rgba(26,20,16,0.15)]"
        )}
        style={{
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 60px rgba(26,20,16,0.25), inset 0 0 40px rgba(201,169,97,0.08)"
            : "0 8px 40px rgba(26,20,16,0.15), inset 0 0 40px rgba(201,169,97,0.04)",
        }}
      >
        <div className="text-antique-gold/15 text-5xl font-serif leading-none mb-3 select-none">&ldquo;</div>

        <p className="text-soft-ivory/85 font-light leading-relaxed mb-5 text-sm sm:text-base">
          {review.text}
        </p>

        <div className="mb-5">
          <StarRating rating={review.rating} />
        </div>

        <div className="flex items-center gap-3.5">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-antique-gold/35 flex-shrink-0">
            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-soft-ivory text-sm font-medium">{review.name}</p>
            <p className="text-antique-gold/65 text-xs">{review.location}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#4b2231_0%,#5d2736_45%,#43202c_100%)]"
    >
      <div className="absolute top-0 left-1/4 w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-antique-gold/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[min(400px,70vw)] h-[min(400px,70vw)] rounded-full bg-burnished-gold/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32">
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-antique-gold/25 bg-antique-gold/8 mb-7 transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <svg className="w-3.5 h-3.5 text-antique-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-soft-ivory text-xs tracking-wide">949 Reviews</span>
          </div>

          <span
            className={cn(
              "block text-antique-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "80ms" }}
          >
            Testimonials
          </span>

          <h2
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-ivory italic text-balance transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            Voices of <span className="text-gold-gradient">Elegance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none">
        <div
          className="w-full h-14 sm:h-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,240,232,0) 0%, rgba(245,240,232,0.64) 56%, rgba(245,240,232,1) 100%)",
          }}
        />
      </div>
    </section>
  )
}
