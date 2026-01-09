'use client'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HeroSection3 = () => {
    const shootingStarRef = useRef<HTMLDivElement>(null)
    const containerRef = useScrollAnimation({
        selector: '.section3-animate',
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
        if (shootingStarRef.current && containerRef.current) {
            const isMobile = window.innerWidth < 1024
            if (isMobile) return

            const viewportHeight = window.innerHeight
            const viewportWidth = window.innerWidth

            const endX = viewportWidth * 1
            const endY = viewportHeight * 1

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
                onEnter: () => {
                    const tl = gsap.timeline()

                    tl.to(shootingStarRef.current, {
                        x: endX,
                        y: endY,
                        duration: 1,
                        ease: 'power2.in',
                        rotation: 10,
                    }).to(
                        shootingStarRef.current,
                        {
                            opacity: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                        },
                        '-=0.1'
                    )
                },
                once: true,
            })
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className='w-full grid grid-cols-12 gap-4 relative'>
            {/* Shooting star is rendered in a fixed, overflow-hidden layer so it doesn't affect page scroll */}
            <div className='pointer-events-none fixed inset-0 z-10 overflow-hidden'>
                <div ref={shootingStarRef} className='absolute top-[-100px] left-0'>
                    <Image
                        src='/shootingStar.webp'
                        alt='section3'
                        width={500}
                        height={500}
                        className='w-32 h-32 lg:w-auto lg:h-auto'
                    />
                </div>
            </div>
            <div className='col-span-12 lg:col-span-8 space-y-3  lg:space-y-4 '>
                <h2 className='section3-animate text-[24px] font-bold text-white text-start leading-[120%] lg:text-[45px] lg:leading-[110%]'>
                    Crowdsourcing our collective intelligence to build the best AI
                </h2>
                <p className='section3-animate text-sm font-400 text-white text-start lg:text-lg'>
                    Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
                </p>
                <p className='section3-animate text-sm font-400 text-white text-start lg:text-lg'>
                    Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
                </p>

                <div className='section3-animate'>
                    <Button borderStyle='gradient' size='lg' className='rounded-[95px] py-2 px-4 lg:py-3 lg:px-8'>
                        Use The Cutting Edge AI
                    </Button>
                </div>

            </div>

            <div className='col-span-12 lg:col-span-4'>
            
            </div>


        </div>
    )
}
