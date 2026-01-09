"use client"
import BlueGradient from '@/components/assets/blueGradient'
import { RedGradinet } from '@/components/assets/redGradinet'
import { Header } from '@/views/components/header'
import { Footer } from '@/views/components/footer'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)


export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const planetRef = useRef<HTMLDivElement>(null)
  const redGradientRef = useRef<HTMLDivElement>(null)
  const blueGradientRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      ScrollTrigger.update()
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    if (planetRef.current) {

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value?: number) {
          if (value !== undefined) {
            lenis.scrollTo(value, { immediate: true })
          }
          return lenis.scroll
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed',
      })

      const getScrollDistance = () => {
        return Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
      }

      ScrollTrigger.create({
        scroller: document.body,
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {

          const scrollDistance = getScrollDistance()
          const parallaxY = self.progress * scrollDistance * 0.60
          gsap.set(planetRef.current, {
            y: parallaxY
          })

          if (blueGradientRef.current) {
            const parallaxYBlue = self.progress * scrollDistance * 0.60
            gsap.set(blueGradientRef.current, {
              y: parallaxYBlue
            })
          }

          const heroTitle = document.getElementById('hero-title') as HTMLElement
          if (heroTitle) {

            const gradient1Colors = ['#B53EA4', '#FC6F32', '#FF4A59']
            const gradient2Colors = ['#FFD6F9', '#FFCBB4', '#FFBEC3']

            const interpolateColor = (color1: string, color2: string, factor: number): string => {
              const hex1 = color1.replace('#', '')
              const hex2 = color2.replace('#', '')

              const r1 = parseInt(hex1.substring(0, 2), 16)
              const g1 = parseInt(hex1.substring(2, 4), 16)
              const b1 = parseInt(hex1.substring(4, 6), 16)

              const r2 = parseInt(hex2.substring(0, 2), 16)
              const g2 = parseInt(hex2.substring(2, 4), 16)
              const b2 = parseInt(hex2.substring(4, 6), 16)

              const r = Math.round(r1 + (r2 - r1) * factor)
              const g = Math.round(g1 + (g2 - g1) * factor)
              const b = Math.round(b1 + (b2 - b1) * factor)

              return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`
            }

            let transitionFactor = 0
            if (self.progress >= 0.01 && self.progress <= 0.04) {

              transitionFactor = (self.progress - 0.01) / (0.04 - 0.01)

            } else if (self.progress > 0.04) {

              transitionFactor = 1
            } else {

              transitionFactor = 0
            }

            const interpolatedColors = gradient1Colors.map((color1, index) => {
              return interpolateColor(color1, gradient2Colors[index], transitionFactor)
            })

            const gradientString = `linear-gradient(45deg, ${interpolatedColors.join(', ')})`
            gsap.set(heroTitle, {
              backgroundImage: gradientString,
              immediateRender: false
            })

            if (!heroTitle.classList.contains('angle-gradient')) {
              heroTitle.classList.add('angle-gradient')
            }
            heroTitle.classList.remove('angle-gradient2')
          }
        }
      })
    }
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      lenis.destroy()
      lenisRef.current = null
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      ScrollTrigger.scrollerProxy(document.body, {})
    }
  }, [])

  return (
    <div className='position-relative overflow-hidden lg:overflow-x-hidden'>
      <div ref={blueGradientRef} className='hidden lg:block absolute top-0 left-20'>
        <BlueGradient />
      </div>
      <div ref={redGradientRef} className='fixed pointer-events-none bottom-[-100px] left-[-20%] scale-90'>
        <RedGradinet />
      </div>

      <div ref={planetRef} className='absolute top-0 right-[-1px] pointer-events-none overflow-hidden lg:right-[-10px] lg:overflow-visible' style={{ transform: 'translateZ(0)' }}>
        <Image src='/planet2.webp' alt='footer' width={700} height={700} />
      </div>
      <div className='max-w-7xl mx-auto relative z-10 px-4 lg:px-0'>
        <Header />
        {children}
      </div>
      <div className="bg-gradient-to-b from-transparent to-black">
        <Footer />
      </div>
    </div>
  )
}
