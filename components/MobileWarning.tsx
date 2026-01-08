"use client"

import { useEffect, useState } from 'react'

export const MobileWarning = () => {
    const [showWarning, setShowWarning] = useState(true)

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window === 'undefined') return
            
            const width = window.innerWidth
            const height = window.innerHeight
            const isSmallScreen = width < 768 || height < 600
            
            setShowWarning(isSmallScreen)
        }

        // Check immediately
        checkMobile()
        
        // Also check after a small delay to catch any timing issues
        const timeoutId = setTimeout(checkMobile, 100)
        
        window.addEventListener('resize', checkMobile)
        window.addEventListener('orientationchange', checkMobile)

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('orientationchange', checkMobile)
        }
    }, [])

    if (!showWarning) return null

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
