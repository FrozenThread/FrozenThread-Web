import React from 'react'

export const Contact = () => {
    return (
        <div className='w-full py-12'>
            <div className="text-3xl font-anton-regular font-bold w-full text-center p-2 bg-black text-white mb-8">
                CONTACT US
            </div>

            <div className='max-w-6xl mx-auto w-full px-4 flex flex-col lg:flex-row lg:items-center'>
                
                
                <div className="w-full lg:w-1/2 lg:text-right lg:pr-8 lg:border-r border-gray-500">
                    <h3 className='font-stage-wander text-5xl text-black'>
                        Get In Touch
                    </h3>
                    <p className='font-anton-regular text-2xl text-gray-700 mt-4'>
                        We're excited to talk with you.
                    </p>
                    <p className='text-lg text-gray-600 mt-2'>
                        Contact us for your queries and orders. Use the form to send us a message, and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className='w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-8'>
                    <form
                        action="https://formspree.io/f/xovpppkq"
                        method="POST"
                        className='flex flex-col gap-5'
                    >
                        <div className='flex flex-col'>
                            <label htmlFor='name' className='mb-1 font-medium'>Enter Name</label>
                            <input
                                id='name'
                                type='text'
                                name='name' 
                                placeholder='Enter your Name'
                                className='w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='mb-1 font-medium'>Enter your E-mail Id</label>
                            <input
                                id='email'
                                type='email'
                                name='email' 
                                placeholder='Enter your Email'
                                className='w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='phoneNumber' className='mb-1 font-medium'>Enter Phone Number (Optional)</label>
                            <input
                                id='phoneNumber'
                                type='tel'
                                name='phone' 
                                placeholder='Enter your Phone Number'
                                className='w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='message' className='mb-1 font-medium'>Product Inquiry</label>
                            <textarea
                                id='message'
                                name='message' 
                                rows='4'
                                placeholder='e.g., "Hi, I am interested in the Spooky Ghost t-shirt in size Large..."'
                                className='w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='bg-black text-white px-4 py-2 text-xl cursor-pointer rounded-md w-full hover:bg-gray-800 transition-colors'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;