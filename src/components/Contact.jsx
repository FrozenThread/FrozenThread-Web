import React from 'react'

export const Contact = () => {
    return (
        <div className='h-96 bg-blue-200 p-4 flex flex-col gap-4 items-center justify-center'>
            <h2 className='copperplate-bold text-3xl w-full text-center'>CONTACT US</h2>
            <div className='h-full  mx-auto'>
                <form action="" className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='name'>Enter Name</label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Enter your Name'
                            className=' bg-white px-2 rounded-md w-1/2'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email'>Enter your E-mail Id</label>
                        <input
                            id='email'
                            type='email'
                            placeholder='Enter your Email'
                            className=' bg-white px-2 rounded-md w-1/2'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phoneNumber'>Enter Phone Number</label>
                        <input
                        id='phoneNumber'
                            type='number'
                            placeholder='Enter your Phone Number'
                            className=' bg-white px-2 rounded-md w-1/2'
                        />
                    </div>
                    <button type='submit' className='bg-[#97d86f] px-4 py-2 text-xl cursor-pointer rounded-b-md'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
