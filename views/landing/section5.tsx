'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

export const Section5 = () => {
    const moonRef = useRef<HTMLDivElement>(null)
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

                const minScale = 0.6
                const maxScale = 1
                const scale = minScale + (maxScale - minScale) * self.progress

                gsap.set(moonRef.current, {
                    y: parallaxY,
                    scale: scale,
                    transformOrigin: '50% 50%',
                })
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className='align-center relative'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4'>
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
