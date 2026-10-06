import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook using IntersectionObserver to fade and slide up elements.
 * Staggers by 60ms * index, fades from translateY(16px) to 0 over 400ms.
 * Respects prefers-reduced-motion.
 */
export function useReveal(index = 0, options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      return true
    }
    return false
  })

  useEffect(() => {
    if (isVisible) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -30px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [isVisible, options])

  const style = {
    transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: isVisible ? `${index * 60}ms` : '0ms',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
  }

  return { ref, isVisible, style }
}

export default useReveal
