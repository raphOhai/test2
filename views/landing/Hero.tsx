"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
    const pillsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (pillsRef.current.length === 0) return
        gsap.set(pillsRef.current, {
            y: 50,
            opacity: 0
        })

        ScrollTrigger.create({
            trigger: document.body,
            start: 'top+=2%', 
            end: 'bottom bottom',
            onEnter: () => {
                const tl = gsap.timeline()

                tl.to(pillsRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    stagger: 0.15,
                })
            },
            once: true,
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === document.body) {
                    trigger.kill()
                }
            })
        }
    }, [])
    return (
        <div className='w-full'>
            <h1 id='hero-title' className='font-semibold angle-gradient hero-title text-[32px] leading-[120%] mt-8 tracking-[-2%] text-center lg:text-[95px] lg:leading-[110%] lg:mt-30 lg:tracking-[-3%] lg:text-start transition-all'>
                A new economic primitive for funding decentralized AI
            </h1>
            <p className='text-sm font-400 text-white mt-3 text-center lg:text-lg lg:mt-4 lg:text-start'>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
            </p>
            <div className='mt-6 flex flex-row gap-2 items-center justify-center lg:mt-8 lg:gap-0 lg:justify-start'>
                <Button borderStyle='gradient' className='rounded-[95px] flex-1 lg:flex-none' size='lg' >
                    Buy salt ai
                </Button>
                <Button variant='link' className='text-white whitespace-nowrap'>
                    Learn more
                </Button>
            </div>

            <div className='grid grid-cols-1 gap-4 mt-12 lg:grid-cols-12 lg:mt-20'>
                <div className='lg:col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='LLM models' value='1,873' />
                </div>
                <div className='lg:col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='Paid to data scientists' value='$326,734' />
                </div>
                <div className='lg:col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='Developers' value='6,557' />
                </div>
            </div>
        </div>
    )
}

const StatsPill = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className='rounded-[95px] px-4 py-3 flex flex-col gap-1 align-center justify-center bg-gradient-to-r from-[#B53EA4]/20 via-[#FC6F32]/20 to-[#FF4A59]/20 lg:px-8 lg:py-4'>
            <p className='text-[28px] font-bold text-white text-center lg:text-[45px]'>
                {value}
            </p>
            <p className='text-[13px] font-400 text-white text-center lg:text-[15px]'>
                {title}
            </p>
        </div>
    )
}
