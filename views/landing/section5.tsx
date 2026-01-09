'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

export const Section5 = () => {
    const moonRef = useRef<HTMLDivElement>(null)
    const shootingStarRef = useRef<HTMLDivElement>(null)
    const containerRef = useScrollAnimation({
        selector: '.section5-animate',
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        force3D: false,
        triggerStart: 'top 80%',
        toggleActions: 'play none none reverse',
    })


    useEffect(() => {
        if (!moonRef.current) return

        const isMobile = window.innerWidth < 1024
        if (isMobile) return




        ScrollTrigger.create({
            trigger: moonRef.current,
            start: 'top 120%',
            end: 'bottom top',
            scrub: 8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const maxDistance = 300
                const parallaxY = self.progress * maxDistance

                gsap.set(moonRef.current, {
                    y: parallaxY
                })
            },
        })

        if (shootingStarRef.current && containerRef.current) {
            const isMobile = window.innerWidth < 1024
            if (isMobile) return

            const viewportHeight = window.innerHeight
            const viewportWidth = window.innerWidth


            const horizontalDistance = viewportHeight
            const endX = viewportWidth * 0.7
            const endY = viewportHeight * 0.9

            const startX = -750
            const startY = -750;

            gsap.set(shootingStarRef.current, {
                x: startX,
                y: startY,
                rotation: 10,
                opacity: 1,
            })

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'top 20%',
                onEnter: () => {
                    const tl = gsap.timeline()

                    tl.to(shootingStarRef.current, {
                        x: endX,
                        y: endY,
                        duration: 1,
                        ease: 'power2.in',
                        rotation: 10,
                    })
                        .to(shootingStarRef.current, {
                            opacity: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                        }, '-=0.1')
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
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4'>
                <div ref={shootingStarRef} className='pointer-events-none absolute top-[-100px] left-0 z-10'>
                    <Image src='/shootingStar.webp' alt='section5' width={500} height={500} className='w-32 h-32 lg:w-auto lg:h-auto' />
                </div>

                <div className='flex flex-col gap-3 lg:gap-4 lg:mt-30'>
                    <h1 className='section5-animate text-[24px] font-bold text-white text-start leading-[120%] lg:text-[45px] lg:leading-[110%]'>
                        Join our community
                    </h1>

                    <p className='section5-animate text-sm font-400 text-white text-start w-full lg:text-lg lg:w-[90%]'>
                        Join us on our mission to to the moon & revolutionize open source AI development so that we can build a permissionless, democratized, and decentralized AI.
                        Let the fate of AI be in our hands and not that of big tech companies.
                    </p>


                    <div className='flex items-center gap-4 section5-animate'>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/telegram.webp' alt='twitter' width={100} height={100} className='w-10 h-auto ' />
                        </a>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/twitter.webp' alt='x' width={100} height={100} className='w-10 h-auto ' />
                        </a>
                    </div>

                </div>

                <div ref={moonRef} className='flex justify-center lg:justify-end'>
                    <Image src='/moon.webp' alt='section5' width={500} height={500} />
                </div>

            </div>

        </div>
    )
}
