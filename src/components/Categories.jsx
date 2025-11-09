import React from 'react'

export const Categories = () => {
    return (
        <div className='py-4'>
            <div className="text-3xl font-anton-regular font-bold w-full text-center p-2 bg-black text-white">
                CATEGORIES
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>

                <div className='h-96'>
                    <h4 className='w-full text-center'>Cartoon Caus MERCH</h4>
                    <img 
                        src="https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753006600/Picsart_25-05-30_00-42-41-167__1_-removebg-preview_xtrfke.png" 
                        className='h-[85%] w-full object-contain' 
                        loading="lazy"
                    />
                </div>

                <div className='h-96'>
                    <h4 className='w-full text-center'> Harry Potter MERCH</h4>
                    <img 
                        src="https://res.cloudinary.com/dpof6jswm/image/upload/v1762694580/Picsart_25-06-28_13-07-29-502-removebg-preview_zqjjhl.png" 
                        className='h-[85%] w-full object-contain'
                        loading="lazy"
                    />
                </div>

                <div className='h-96'>
                    <h4 className='w-full text-center'>Spooky MERCH</h4>
                    <img 
                        src="https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753006688/Picsart_25-05-30_14-29-30-555-removebg-preview_d10kpk.png" 
                        className='h-[85%] w-full object-contain'
                        loading="lazy"
                    />
                </div>

                <div className='h-96'>
                    <h4 className='w-full text-center'>Anime MERCH</h4>
                    <img 
                        src="https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753007855/Picsart_25-06-14_12-37-55-103-removebg-preview_yz6dot.png" 
                        className='h-[85%] w-full object-contain'
                        loading="lazy"
                    />
                </div>
                
            </div>
        </div>
    )
}
export default Categories;