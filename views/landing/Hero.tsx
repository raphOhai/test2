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

        // Set initial state - pills hidden and slightly below
        gsap.set(pillsRef.current, {
            y: 50,
            opacity: 0
        })

        // Create staggered slide-in animation triggered at 2% scroll
        ScrollTrigger.create({
            trigger: document.body,
            start: 'top+=2%', // Trigger at 2% from top
            end: 'bottom bottom',
            onEnter: () => {
                // Create timeline for staggered animation
                const tl = gsap.timeline()

                tl.to(pillsRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    stagger: 0.15, // Stagger each pill by 0.15s
                })
            },
            once: true, // Only trigger once
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
            <h1 id='hero-title' className='font-semibold angle-gradient hero-title text-[95px] leading-[110%] mt-30 tracking-[-3%] transition-all'>
                A new economic primitive for funding decentralized AI
            </h1>
            <p className='text-lg font-400 text-white mt-4'>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
            </p>
            <div className='mt-8'>
                <Button borderStyle='gradient' className='rounded-[95px]' size='lg' >
                    Buy salt ai
                </Button>
                <Button variant='link' className='text-white'>
                    Learn more
                </Button>
            </div>

            <div className='grid grid-cols-12 gap-4 mt-20'>
                <div className='col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='LLM models' value='1,873' />
                </div>
                <div className='col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='Paid to data scientists' value='$326,734' />
                </div>
                <div className='col-span-4 opacity-0' ref={(el) => { if (el && !pillsRef.current.includes(el)) pillsRef.current.push(el) }}>
                    <StatsPill title='Developers' value='6,557' />
                </div>
            </div>
        </div>
    )
}

const StatsPill = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className='rounded-[95px] px-8 py-4 flex flex-col gap-1 align-center justify-center bg-gradient-to-r from-[#B53EA4]/20 via-[#FC6F32]/20 to-[#FF4A59]/20'>
            <p className='text-[45px] font-bold text-white text-center'>
                {value}
            </p>
            <p className='text-[15px] font-400 text-white text-center'>
                {title}
            </p>
        </div>
    )
}
