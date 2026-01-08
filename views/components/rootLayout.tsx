"use client"
import BlueGradient from '@/components/assets/blueGradient'
import { RedGradinet } from '@/components/assets/redGradinet'
import { Header } from '@/views/components/header'
import { Footer } from '@/views/components/footer'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const planetRef = useRef<HTMLDivElement>(null)
  const redGradientRef = useRef<HTMLDivElement>(null)
  const blueGradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (planetRef.current) {
      const getScrollDistance = () => {
        return Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
      }

      ScrollTrigger.create({
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='position-relative overflow-x-hidden'>
      <div ref={blueGradientRef} className='absolute top-0 left-20 '>
        <BlueGradient />
      </div>
      <div ref={redGradientRef} className='fixed pointer-events-none top-0 left-[-20%] scale-90' >
        <RedGradinet />
      </div>

      <div ref={planetRef} className='absolute top-0 right-[-10px] pointer-events-none' style={{ transform: 'translateZ(0)' }}>
        <Image src='/planet2.webp' alt='footer' width={700} height={700} />
      </div>
      <div className='max-w-7xl mx-auto relative z-10'>
        <Header />
        {children}
      </div>
      <div className="bg-gradient-to-b from-transparent to-black">
        <Footer />
      </div>
    </div>
  )
}
