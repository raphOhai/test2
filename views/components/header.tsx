import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = () => {
    return (
        <div className='flex justify-center align-center my-4 '>
            <div className='flex gap-4'>
                <Button variant='link'>
                    how it Works
                </Button>

                <Button borderStyle='gradient' className='rounded-[95px]'  >
                    Buy salt ai
                </Button>
            </div>

        </div>
    )
}
