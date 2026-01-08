import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Send, X } from 'lucide-react'

export const Footer = () => {
    return (
        <div
            className='h-screen relative flex flex-col '
        >
            <div className='flex-1 flex items-center justify-center z-10'>
                <h2 className='text-white text-4xl font-semibold text-center'>
                    Join our community and harvest $SALT
                </h2>
            </div>


            <div className=' z-10 pb-8 max-w-7xl mx-auto w-full '>

                <div className='flex items-center justify-center gap-6'>
                    <Button variant='link' className='text-white no-underline hover:no-underline'>
                        How It Works
                    </Button>
                    <Button variant='link' className='text-white no-underline hover:no-underline'>
                        Buy Salt AI
                    </Button>
                </div>
                <div className='w-full h-[1px] bg-[#8E8E8E] mb-8'></div>

             
                <div className='mx-auto px-4 flex items-center justify-between'>

                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/telegram.png' alt='twitter' width={20} height={20} />
                        </a>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/twitter.png' alt='x' width={20} height={20} />
                        </a>
                    </div>

                    <div className='flex items-center gap-6'>
                        <p  className='text-[#8E8E8E] text-[12px] no-underline hover:no-underline'>
                            Terms of Use
                        </p>
                        <p  className='text-[#8E8E8E] text-[12px] no-underline hover:no-underline'>
                            Privacy Policy
                        </p>
                        <p  className='text-[#8E8E8E] text-[12px] no-underline hover:no-underline'>
                            Cookie Policy
                        </p>
                    </div>
                </div>
            </div>

            <Image src='/footer.png' alt='footer' width={1000} height={1000}
                className='w-full bottom-0 left-0 z-0 absolute' />
        </div>
    )
}
