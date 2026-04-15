import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  minHeight?: number
}

export default function LazySection({ children, minHeight = 400 }: LazySectionProps) {
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
      { rootMargin: '800px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (isVisible) {
    return <>{children}</>
  }

  return <div ref={ref} style={{ minHeight }} />
}
