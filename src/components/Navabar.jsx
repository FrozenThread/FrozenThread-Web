import React from 'react'

export const Navabar = () => {
    return (
        <div className='w-full'>
            <div className='bg-black text-white text-base sm:text-2xl text-center copperplate-bold p-1 h-10 flex items-center justify-center'>
                10% OFF ON FIRST ORDER
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center p-4 sm:h-28 gap-4'>

                <img
                    src='https://res.cloudinary.com/dpof6jswm/image/upload/v1752934461/Picsart_25-07-19_16-25-41-646_crsh8v.png'
                    className='h-24 w-24 sm:h-32 sm:w-32'
                    alt="Frozen Thread Logo"
                />
                <div className='hidden sm:block bg-black w-1 h-20'></div>

                <div className='stage-wander text-5xl text-center'>
                    FROZEN THREAD
                </div>

            </div>
        </div>
    )
}

export default Navabar