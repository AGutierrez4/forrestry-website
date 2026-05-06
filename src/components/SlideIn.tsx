import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  from?: 'left' | 'right' | 'bottom'
  delay?: number
  className?: string
}

export default function SlideIn({ children, from = 'bottom', delay = 0, className = '' }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-60px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)'
    switch (from) {
      case 'left': return 'translate(-20px, 0)'
      case 'right': return 'translate(20px, 0)'
      case 'bottom':
      default: return 'translate(0, 20px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
