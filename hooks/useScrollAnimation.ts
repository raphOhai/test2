import { useEffect, useRef, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseScrollAnimationOptions {
  selector?: string
  y?: number
  opacity?: number
  duration?: number
  ease?: string
  stagger?: number
  force3D?: boolean
  triggerStart?: string
  toggleActions?: string
  enabled?: boolean
}

/**
 * Reusable hook for scroll-triggered animations
 * @param options - Animation configuration options
 * @returns Ref object to attach to the container element
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): RefObject<HTMLDivElement | null> => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const {
    selector = '.animate-on-scroll',
    y = 40,
    opacity = 0,
    duration = 0.8,
    ease = 'power3.out',
    stagger = 0.2,
    force3D = false,
    triggerStart = 'top 80%',
    toggleActions = 'play none none reverse',
    enabled = true,
  } = options

  useEffect(() => {
    if (!containerRef.current || !enabled) return

    // If no selector provided, animate the container itself
    const targetElements = selector 
      ? containerRef.current.querySelectorAll(selector)
      : [containerRef.current]

    if (targetElements.length === 0) return

    const animation = gsap.from(targetElements, {
      y,
      opacity,
      duration,
      ease,
      stagger: selector ? stagger : 0, // Only apply stagger if animating multiple child elements
      force3D,
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === containerRef.current) {
          trigger.kill()
        }
      })
    }
  }, [selector, y, opacity, duration, ease, stagger, force3D, triggerStart, toggleActions, enabled])

  return containerRef
}
