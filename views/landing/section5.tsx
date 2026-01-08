'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section5 = () => {
    const moonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!moonRef.current) return

        ScrollTrigger.create({
            trigger: moonRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                // Calculate parallax based on element's scroll progress
                // Move moon at 50% of scroll speed (faster than before)
                // Progress is 0 when element enters, 1 when it exits
                const parallaxY = self.progress * 200 * 0.50 // 200px max movement at 50% speed
                gsap.set(moonRef.current, {
                    y: parallaxY
                })
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='align-center '>
            <div className='grid grid-cols-2 gap-4'>

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
                    <Image src='/moon.png' alt='section5' width={500} height={500} />
                </div>

            </div>

        </div>
    )
}
