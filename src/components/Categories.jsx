import React from 'react'

export const Categories = () => {
    return (
        <div className='h-[480px]'>
            <div className="text-3xl anton font-bold w-full text-center p-2 bg-black text-white">
                CATEGORIES
            </div>
            <div className='flex gap-2 m-2 mx-8'>
                <div className='basis-1/4 h-96'>
                    <h4 className='w-full text-center'>Cartoon Caus MERCH</h4>
                    <img src="https://res.cloudinary.com/dpof6jswm/image/upload/v1753006600/Picsart_25-05-30_00-42-41-167__1_-removebg-preview_xtrfke.png" className='h-full w-full'/>
                </div>
                <div className='basis-1/4 h-96'>
                    <h4 className='w-full text-center'> Harry Potter MERCH</h4>
                    <img src="https://res.cloudinary.com/dpof6jswm/image/upload/v1753005294/Picsart_25-06-28_13-07-29-502_cjxnag.jpg" className='h-full w-full'/>
                </div>
                <div className='basis-1/4 h-96'>
                    <h4 className='w-full text-center'>Spooky MERCH</h4>
                    <img src="https://res.cloudinary.com/dpof6jswm/image/upload/v1753006688/Picsart_25-05-30_14-29-30-555-removebg-preview_d10kpk.png" className='h-full w-full'/>
                </div>
                <div className='basis-1/4 h-96'>
                    <h4 className='w-full text-center'>Anime MERCH</h4>
                    <img src="https://res.cloudinary.com/dpof6jswm/image/upload/v1753007855/Picsart_25-06-14_12-37-55-103-removebg-preview_yz6dot.png" className='h-full w-full'/>
                </div>
            </div>
        </div>
    )
}
