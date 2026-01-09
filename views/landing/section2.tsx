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
                    start: 'top 120%', 
                    end: 'bottom 20%', 
                    scrub: 3, 
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
        <div ref={containerRef} className='align-center w-full sm:px-0'>
            <h1 className='text-[18px] font-bold text-white leading-[130%] text-center sm:text-[20px] sm:leading-[125%] lg:text-[30px] lg:leading-[110%]'>
                Projects integrated into the Arrakis AI Ecosystem
            </h1>
            <div className='relative overflow-hidden'>
                <div ref={logosRef} className='flex gap-3 px-2 lg:gap-6 lg:px-4'>
                    <img
                        src='/logos/Frame.webp'
                        alt='project1'
              
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
                    <img
                        src='/logos/Group.webp'
                        alt='project2'
    
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
           
                    <img
                        src='/logos/solana.webp'
                        alt='project4'
                   
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
                    <img
                        src='/logos/Frame.webp'
                        alt='project1'
                  
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
                    <img
                        src='/logos/Group.webp'
                        alt='project2'
                
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
        
                    <img
                        src='/logos/solana.webp'
                        alt='project4'
                     
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />

                    <img
                        src='/logos/solana.webp'
                        alt='project4'
                    
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
                    <img
                        src='/logos/Frame.webp'
                        alt='project1'
                  
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
                    <img
                        src='/logos/Group.webp'
                        alt='project2'
                  
                        className='w-20 h-20 sm:w-20 sm:h-20 md:w-64 md:h-64 object-contain flex-shrink-0'
                    />
             
                </div>
            </div>
        </div>
    );
};
