"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section2 = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const logosRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const logosWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!titleRef.current || !logosWrapperRef.current || !containerRef.current) return


        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        })


        gsap.from(logosWrapperRef.current, {
            y: 70,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        })


        if (!logosRef.current) return

        setTimeout(() => {
            if (!logosRef.current || !containerRef.current) return

            const logosWidth = logosRef.current.scrollWidth
            const containerWidth = containerRef.current?.offsetWidth || window.innerWidth

            const scrollAmount = logosWidth - containerWidth + 100

            gsap.to(logosRef.current, {
                x: -scrollAmount,
                ease: 'none',
                force3D: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                    end: '+=300%',
                    scrub: 1,
                    pin: false,
                    invalidateOnRefresh: true,
                    markers: false,
                }
            })
        }, 100)

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars?.trigger === containerRef.current) {
                    trigger.kill()
                }
            })
        }
    }, [containerRef])
    return (
        <div ref={containerRef} className='align-center w-full sm:px-0 flex flex-col items-center justify-center gap-3 lg:gap-10'>
            <h1 ref={titleRef} className='text-white text-2xl font-semibold text-center px-4 lg:text-4xl lg:px-0'>
                Projects integrated into the Arrakis AI Ecosystem
            </h1>
            <div ref={logosWrapperRef} className='relative overflow-hidden'>
                <div ref={logosRef} className='flex gap-3 px-2 lg:gap-2 lg:px-4'>
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}

                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />


<Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}

                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />
                    <Image
                        src='/logos/Group.webp'
                        alt='project2'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/solana.webp'
                        alt='project4'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    <Image
                        src='/logos/Frame.webp'
                        alt='project1'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0'
                    />

                    
                    {/* having issues with the aspect ratio of the image will escalate to the design team for now we hide on mobile */}
                    <Image
                        src='/telegram.webp'
                        alt='project2'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0 hidden lg:block'
                    />

                    {/* having issues with the aspect ratio of the image will escalate to the design team for now we hide on mobile */}
                    <Image
                        src='/logos/red.webp'
                        alt='project4'
                        width={500}
                        height={500}
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-[420px] md:h-[58px] object-contain flex-shrink-0 hidden lg:block'
                    />
                    

                </div>
            </div>
        </div>
    );
};
