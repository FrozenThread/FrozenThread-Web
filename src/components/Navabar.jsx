import React from 'react'

export const Navabar = () => {
    return (
        <div className='w-full'>
            <div className='bg-black text-white text-2xl text-center copperplate-bold p-1 h-10'>10% OFF ON FIRST ORDER</div>
            <div className='flex h-28'>
                <div className='basis-1/3'></div>
                <div className='basis-2/3 flex items-center w-full'>
                    <img src='https://res.cloudinary.com/dpof6jswm/image/upload/v1752934461/Picsart_25-07-19_16-25-41-646_crsh8v.png' height={140} width={150}></img>
                    <div className='bg-black w-1 h-5/6 mr-4'></div>
                    <div className='stage-wander text-5xl text-wrap w-20'>FROZEN THREAD</div>
                </div>
            </div>
        </div>
    )
}
