import { useRef, useEffect, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
}

export default function LazyVideo({ src, className = '' }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={isVisible ? src : undefined}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  )
}
