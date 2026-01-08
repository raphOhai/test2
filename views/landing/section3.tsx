'use client'

import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HeroSection3 = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const elements = containerRef.current.querySelectorAll('.section3-animate')

        gsap.from(elements, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            force3D: false,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className='w-[70%] space-y-4'>
            <div></div>
            <h2 className='section3-animate text-[45px] font-bold text-white text-start leading-[110%]'>
                Crowdsourcing our collective intelligence to build the best AI
            </h2>
            <p className='section3-animate text-lg font-400 text-white text-start'>
                Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
            </p>
            <p className='section3-animate text-lg font-400 text-white text-start'>
                Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
            </p>

            <div className='section3-animate'>
                <Button borderStyle='gradient' size='lg' className='rounded-[95px]'>
                    Use The Cutting Edge AI
                </Button>
            </div>

        </div>
    )
}
