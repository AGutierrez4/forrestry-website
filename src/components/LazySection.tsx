import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
}

export default function LazySection({ children }: LazySectionProps) {
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
      { rootMargin: '400px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : '100px' }}>
      {isVisible ? children : null}
    </div>
  )
}
