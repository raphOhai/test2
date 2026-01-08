import { useEffect, useRef, RefObject } from 'react'
import { gsap } from 'gsap'

interface UsePulsingGlowOptions {
  minOpacity?: number
  maxOpacity?: number
  duration?: number
  ease?: string
  enabled?: boolean
}

/**
 * Reusable hook for creating a pulsing glow animation
 * @param options - Animation configuration options
 * @returns Ref object to attach to the element you want to animate
 */
export const usePulsingGlow = <T extends HTMLElement | SVGGElement>(
  options: UsePulsingGlowOptions = {}
): RefObject<T | null> => {
  const glowRef = useRef<T>(null)

  const {
    minOpacity = 0.4,
    maxOpacity = 0.9,
    duration = 3,
    ease = 'sine.inOut',
    enabled = true,
  } = options

  useEffect(() => {
    if (!glowRef.current || !enabled) return

    gsap.set(glowRef.current, { opacity: minOpacity })
    
    gsap.to(glowRef.current, {
      opacity: maxOpacity,
      duration,
      ease,
      repeat: -1,
      yoyo: true,
    })

    return () => {
      if (glowRef.current) {
        gsap.killTweensOf(glowRef.current)
      }
    }
  }, [minOpacity, maxOpacity, duration, ease, enabled])

  return glowRef
}
