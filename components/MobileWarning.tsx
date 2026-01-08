"use client"

import { useEffect, useState } from 'react'

export const MobileWarning = () => {
    const [isMobile, setIsMobile] = useState(false) // Default to true to show warning initially

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
            const isSmallScreen = window.innerWidth < 768
            
            setIsMobile(isMobileDevice || isSmallScreen)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    if (!isMobile) return null

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-8">
            <div className="text-center max-w-md">
                <h1 
                    className="angle-gradient text-4xl md:text-5xl font-semibold mb-4 leading-tight"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #B53EA4, #FC6F32, #FF4A59)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#FC6F32', 
                    }}
                >
                    This site is not optimized for mobile yet.
                </h1>
            </div>
        </div>
    )
}
