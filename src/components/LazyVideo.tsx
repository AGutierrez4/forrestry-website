import { useRef, useEffect, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  label?: string
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

export default function LazyVideo({ src, className = '', label }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isMobile])

  if (isMobile) {
    return (
      <div className={`${className} bg-[#111111] flex items-center justify-center`}>
        <span className="text-green/60 text-sm font-medium">{label || 'Demo'}</span>
      </div>
    )
  }

  return (
    <div ref={ref}>
      {isVisible ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={className}
        />
      ) : (
        <div className={`${className} bg-[#111111]`} />
      )}
    </div>
  )
}
