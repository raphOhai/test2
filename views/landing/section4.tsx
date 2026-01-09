'use client'

import React, { useEffect, useRef } from 'react'
import { LeaderboardTable } from '../components/table'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section4 = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (!containerRef.current) return

        gsap.from(containerRef.current, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
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
        <div ref={containerRef} className='flex flex-col gap-3 lg:gap-4 w-full px-4 sm:px-0'>
            <div className="flex flex-col gap-3 lg:gap-4">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                    <h1 className='text-[20px] font-bold text-white text-center leading-[130%] sm:text-[24px] sm:leading-[120%] lg:text-[45px] lg:leading-[110%] lg:text-start'>
                        LLM Leaderboard
                    </h1>



                    <div className="hidden lg:flex lg:justify-end">
                        <div>
                            <Button borderStyle='gradient' className='rounded-[95px] ' size='lg'>
                                Submit your model
                            </Button>
                        </div>
                    </div>

                </div>
                <p className='text-sm font-400 text-white text-center sm:text-start w-full lg:text-lg lg:w-[90%]'>
                    We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks.
                    The higher the score, the better the LLM.
                </p>

            </div>
            <div className='-mx-4 sm:mx-0'>
                <LeaderboardTable />
            </div>
        </div>
    )
}
