import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div
            className='min-h-screen relative flex flex-col lg:h-screen bg-[linear-gradient(to_bottom,#000000_0%,#191E2A_40%,#191E2A_100%)]'
        >
            <div className='flex-1 flex items-center justify-center z-10 py-8 lg:py-0'>
                <h2 className='text-white text-2xl font-semibold text-center px-4 lg:text-4xl lg:px-0'>
                    Join our community and harvest $SALT
                </h2>
            </div>


            <div className=' z-10 pb-6 max-w-7xl mx-auto w-full lg:pb-8'>

                <div className='flex items-center justify-center gap-4 lg:gap-6'>
                    <Button variant='link' className='text-white no-underline hover:no-underline text-sm lg:text-base'>
                        How It Works
                    </Button>
                    <Button variant='link' className='text-white no-underline hover:no-underline text-sm lg:text-base'>
                        Buy Salt AI
                    </Button>
                </div>
                <div className='w-full h-[1px] bg-[#8E8E8E] mb-6 lg:mb-8'></div>

             
                <div className='mx-auto px-4 flex flex-row items-center justify-between'>

                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/telegram.webp' alt='twitter' width={20} height={20} />
                        </a>
                        <a href='#' className='text-white hover:opacity-80 transition-opacity'>
                            <Image src='/twitter.webp' alt='x' width={20} height={20} />
                        </a>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
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

            <Image src='/footer.webp' alt='footer' width={1000} height={1000}
                className='w-full bottom-0 left-0 z-0 absolute' />
        </div>
    )
}
