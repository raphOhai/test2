"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section2 = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const logosRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !logosRef.current) return

        // Wait for layout to be ready
        setTimeout(() => {
            if (!logosRef.current) return

            // Get the actual width of the logos container
            const logosWidth = logosRef.current.scrollWidth
            const containerWidth = containerRef.current?.offsetWidth || window.innerWidth

            // Calculate how much to scroll (logos width minus container width)
            const scrollAmount = logosWidth - containerWidth + 100 // Add some padding

            // Create horizontal scroll animation
            gsap.to(logosRef.current, {
                x: -scrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%', // Start when section is 80% into viewport
                    end: 'bottom 20%', // End when section is 20% from bottom of viewport
                    scrub: 1, // Smooth scrubbing
                    pin: false, // Don't pin, just scroll the content
                    invalidateOnRefresh: true,
                    markers: false, // Set to true for debugging
                }
            })
        }, 100)

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    return (
        <div ref={containerRef} className='flex flex-col gap-8 py-16'>
            <h1 className='text-[30px] font-bold text-white leading-[110%] text-center'>
                Projects integrated into the Arrakis AI Ecosystem
            </h1>
            <div className='relative overflow-hidden'>
                <div ref={logosRef} className='flex gap-6 px-4'>
                    <Image
                        src='/logos/Frame.png'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.png'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.png'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.png'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.png'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.png'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.png'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.png'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.png'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.png'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.png'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.png'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.png'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                </div>
            </div>
        </div>
    );
};
