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


        setTimeout(() => {
            if (!logosRef.current) return


            const logosWidth = logosRef.current.scrollWidth
            const containerWidth = containerRef.current?.offsetWidth || window.innerWidth

            const scrollAmount = logosWidth - containerWidth + 100 

            gsap.to(logosRef.current, {
                x: -scrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%', 
                    end: 'bottom 20%', 
                    scrub: 1, 
                    pin: false,
                    invalidateOnRefresh: true,
                    markers: false,
                }
            })
        }, 100)

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    return (
        <div ref={containerRef} className=''>
            <h1 className='text-[20px] font-bold text-white leading-[120%] text-center lg:text-[30px] lg:leading-[110%]'>
                Projects integrated into the Arrakis AI Ecosystem
            </h1>
            <div className='relative overflow-hidden mt-4 lg:mt-0'>
                <div ref={logosRef} className='flex gap-3 px-2 lg:gap-6 lg:px-4'>
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.webp'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.webp'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.webp'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/red.webp'
                        alt='project3'
                        width={80}
                        height={80}
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/solana.webp'
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
