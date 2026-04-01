"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const storeImages = [
  {
    id: 1,
    image: "/mewad/shop/img2.webp",
    title: "Main Atelier",
    wide: true,
  },
  {
    id: 2,
    image: "/mewad/shop/img3.webp",
    title: "Boutique Interior",
    wide: false,
  },
  {
    id: 3,
    image: "/mewad/shop/img4.webp",
    title: "Collection Display",
    wide: false,
  },
  {
    id: 4,
    image: "/mewad/shop/img6.webp",
    title: "Showcase Hall",
    wide: true,
  },
]

const contactOptions = [
  {
    id: "phone",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    id: "location",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Open Maps",
    value: "Malad Station, Mumbai",
    href: "https://share.google/eywXnaVYp3llX3Ob4",
  },
  {
    id: "whatsapp",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876543210?text=Hi%20Mewad%2C%20I%27d%20like%20to%20know%20more%20about%20your%20collection.",
  },
]

function StoreImageCard({
  store,
  index,
  isVisible,
}: {
  store: (typeof storeImages)[0]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative group transition-all ease-luxe",
        store.wide ? "sm:col-span-2" : "sm:col-span-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDuration: `${800 + index * 120}ms`,
        transitionDelay: `${index * 90}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all ease-luxe duration-700",
          store.wide ? "aspect-[16/9] sm:aspect-[4/3]" : "aspect-[4/3]",
          "shadow-[0_8px_30px_rgba(26,20,16,0.1)] hover:shadow-[0_16px_50px_rgba(26,20,16,0.2)]",
          "border border-antique-gold/15 hover:border-antique-gold/35"
        )}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <Image
          src={store.image}
          alt={store.title}
          fill
          className={cn(
            "object-cover transition-transform ease-luxe duration-1000",
            isHovered ? "scale-[1.08]" : "scale-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-muted-black/90 via-muted-black/20 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-65"
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-5 sm:p-7 transition-all ease-luxe duration-500",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-80"
          )}
        >
          <p className="text-soft-ivory font-serif text-lg sm:text-xl italic">{store.title}</p>
          <div className="mt-2 w-8 group-hover:w-12 h-px bg-antique-gold/60 transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}

function ContactCard({
  option,
  index,
  isVisible,
}: {
  option: (typeof contactOptions)[0]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isExternal = /^https?:\/\//.test(option.href)

  return (
    <a
      href={option.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group block transition-all ease-luxe",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDuration: `${800 + index * 150}ms`,
        transitionDelay: `${500 + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative p-6 sm:p-7 rounded-2xl glass-royal-light transition-all ease-luxe duration-700",
          "border border-antique-gold/15 hover:border-antique-gold/45",
          "shadow-[0_4px_20px_rgba(26,20,16,0.07)] hover:shadow-[0_12px_40px_rgba(26,20,16,0.15)]"
        )}
        style={{
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500",
            "bg-sand-beige text-antique-gold",
            isHovered ? "bg-antique-gold text-muted-black" : ""
          )}
        >
          {option.icon}
        </div>
        <p className="text-muted-black/55 text-xs tracking-[0.15em] uppercase mb-1.5">{option.label}</p>
        <p className="text-muted-black font-serif text-lg sm:text-xl italic">{option.value}</p>

        <div
          className={cn(
            "absolute top-6 right-6 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500",
            "bg-sand-beige text-antique-gold",
            isHovered ? "bg-antique-gold text-muted-black translate-x-0.5" : ""
          )}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export function StorePresence() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="store"
      className="relative overflow-hidden surface-royal-light"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32">
        {/* Header */}
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
            Our Boutique
          </span>
          <h2
            className={cn(
              "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-black italic text-balance transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            A Temple of Elegance
          </h2>
          <p
            className={cn(
              "mt-4 text-muted-black/55 text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed transition-all duration-800 ease-luxe",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "180ms" }}
          >
            Step into a world of curated luxury, where each collection tells a story of royal heritage.
          </p>
        </div>

        {/* Store Images - 1 col on mobile, 3 col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-14 md:mb-16">
          {storeImages.map((store, index) => (
            <StoreImageCard key={store.id} store={store} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {contactOptions.map((option, index) => (
            <ContactCard key={option.id} option={option} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* Blend to brand story section */}
      <div className="pointer-events-none">
        <div className="w-full h-12 sm:h-16 section-fade-to-light" />
      </div>
    </section>
  )
}


