"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export function LazySection({ children, className = "", threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="h-96 bg-gray-100 animate-pulse" />}
    </div>
  )
}
