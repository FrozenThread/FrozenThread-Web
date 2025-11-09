import React from 'react'
// 1. Keep the original 'fa' icons
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
// 2. Add a new import line for FaThreads from 'fa6'
import { FaThreads } from 'react-icons/fa6'

export const Footer = () => {
    return (
        // Main container with black background and white text
        <footer className='bg-black text-white p-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

                {/* Column 1: Brand and Slogan */}
                <div>
                    <h3 className='font-stage-wander text-3xl mb-2'>FROZEN THREAD</h3>
                    <p className='text-gray-400'>Unraveling stitch by stitch.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className='font-anton-regular text-xl mb-3'>QUICK LINKS</h4>
                    <ul className='space-y-2'>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Home</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>New Arrivals</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Categories</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Follow Us */}
                <div>
                    <h4 className='font-anton-regular text-xl mb-3'>FOLLOW US</h4>
                    <div className='flex gap-4'>
                        <a 
                            href="https://www.instagram.com/thefrozenthread/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-gray-400 hover:text-white'
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a 
                            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.facebook.com/61576011752955/&ved=2ahUKEwjo6MXxluWQAxXOS3ADHXzaIOoQFnoECD8QAQ&usg=AOvVaw0A7xEjBbAmzxLPx8sj3HmZ" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-gray-400 hover:text-white'
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a 
                            href="https://whatsapp.com/channel/0029VadzXHK1dAvvVkpbsG0I" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-gray-400 hover:text-white'
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a 
                            href="https://www.threads.com/@thefrozenthread?invite=0" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-gray-400 hover:text-white'
                        >
                            <FaThreads size={24} />
                        </a>
                    </div>
                </div>

            </div>

            <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-500'>
                <div>
                    &copy; {new Date().getFullYear()} Frozen Thread. All Rights Reserved.
                </div>
                
                <div className='mt-2'>
                    Developed by 
                    <a 
                        href="https://www.linkedin.com/in/md-abid-hussain09" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='font-medium text-gray-400 hover:text-white underline ml-1'
                    >
                        Abid Hussain
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;