import { useEffect, useRef, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseShootingStarOptions<T extends HTMLElement = HTMLElement> {
  containerRef: RefObject<T | null>
  startX?: number
  startY?: number
  endX?: number | ((viewportWidth: number) => number)
  endY?: number | ((viewportHeight: number) => number)
  rotation?: number
  duration?: number
  fadeDuration?: number
  fadeOverlap?: number
  moveEase?: string
  fadeEase?: string
  triggerStart?: string
  mobileBreakpoint?: number
  enabled?: boolean
  once?: boolean
}

/**
 * Reusable hook for shooting star animation on scroll
 * @param options - Animation configuration options
 * @returns Ref object to attach to the shooting star element
 */
export const useShootingStar = <T extends HTMLElement = HTMLElement>(
  options: UseShootingStarOptions<T>
): RefObject<HTMLDivElement | null> => {
  const shootingStarRef = useRef<HTMLDivElement | null>(null)

  const {
    containerRef,
    startX = -750,
    startY = -750,
    endX = (width: number) => width * 1,
    endY = (height: number) => height * 1,
    rotation = 10,
    duration = 1,
    fadeDuration = 0.8,
    fadeOverlap = 0.1,
    moveEase = 'power2.in',
    fadeEase = 'power2.out',
    triggerStart = 'top 80%',
    mobileBreakpoint = 1024,
    enabled = true,
    once = true,
  } = options

  useEffect(() => {
    if (!shootingStarRef.current || !containerRef.current || !enabled) return

    const isMobile = typeof window !== 'undefined' && window.innerWidth < mobileBreakpoint
    if (isMobile) return

    gsap.set(shootingStarRef.current, {
      x: startX,
      y: startY,
      rotation: rotation,
      opacity: 1,
    })

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: triggerStart,
      onEnter: () => {
        if (!shootingStarRef.current) return
        
        const currentViewportWidth = window.innerWidth
        const currentViewportHeight = window.innerHeight
        const currentEndX = typeof endX === 'function' ? endX(currentViewportWidth) : endX
        const currentEndY = typeof endY === 'function' ? endY(currentViewportHeight) : endY
        
        const tl = gsap.timeline()

        tl.to(shootingStarRef.current, {
          x: currentEndX,
          y: currentEndY,
          duration: duration,
          ease: moveEase,
          rotation: rotation,
        }).to(
          shootingStarRef.current,
          {
            opacity: 0,
            duration: fadeDuration,
            ease: fadeEase,
          },
          `-=${fadeOverlap}`
        )
      },
      once: once,
    })

    return () => {
      scrollTrigger.kill()
      if (shootingStarRef.current) {
        gsap.killTweensOf(shootingStarRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    containerRef.current,
    startX,
    startY,
    rotation,
    duration,
    fadeDuration,
    fadeOverlap,
    moveEase,
    fadeEase,
    triggerStart,
    mobileBreakpoint,
    enabled,
    once,
  ])

  return shootingStarRef
}
