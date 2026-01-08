'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section5 = () => {
    const moonRef = useRef<HTMLDivElement>(null)
    const shootingStarRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!moonRef.current) return

        ScrollTrigger.create({
            trigger: moonRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const parallaxY = self.progress * 200 * 0.50 
                gsap.set(moonRef.current, {
                    y: parallaxY
                })
            },
        })

        if (shootingStarRef.current && containerRef.current) {
            const viewportHeight = window.innerHeight
            const viewportWidth = window.innerWidth

            const verticalDistance = viewportHeight + 500
            const horizontalDistance = verticalDistance

            const startX = -1500 
            const startY = -1500 

            const endX = viewportWidth + horizontalDistance
            const endY = viewportHeight + verticalDistance

            gsap.set(shootingStarRef.current, {
                x: startX,
                y: startY,
                rotation: 25,
            })

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'top 20%',
                onEnter: () => {
                    gsap.to(shootingStarRef.current, {
                        x: endX,
                        y: endY,
                        duration: 2,
                        ease: 'power2.in',
                        rotation: 25,
                        onComplete: () => {
                            if (shootingStarRef.current) {
                                shootingStarRef.current.remove()
                            }
                        }
                    })
                },
                once: true,
            })
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className='align-center relative'>
            <div className='grid grid-cols-2 gap-4'>
                 <div ref={shootingStarRef} className='pointer-events-none absolute top-0 left-0 z-10'>
                    <Image src='/shootingStar.webp' alt='section5' width={500} height={500} />
                 </div>

                <div className='flex flex-col gap-4 mt-30'>
                    <h1 className='text-[45px] font-bold text-white text-start leading-[110%]'>
                        Text here
                    </h1>

                    <p className='text-lg font-400 text-white text-start w-[90%]'>
                        Every month, we run a competition between all the AI models submitted on a leaderboard. The best model will be featured and will earn tokens.
                    </p>

                    <div>
                        <Button borderStyle='gradient' className='rounded-[95px] ' size='lg'>
                            Read Whitepaper
                        </Button>
                    </div>

                </div>

                <div ref={moonRef} className='flex justify-end'>
                    <Image src='/moon.webp' alt='section5' width={500} height={500} />
                </div>

            </div>

        </div>
    )
}
