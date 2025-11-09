import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className='bg-black text-white p-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

                <div>
                    <h3 className='font-stage-wander text-3xl mb-2'>FROZEN THREAD</h3>
                    <p className='text-gray-400'>Unraveling stitch by stitch.</p>
                </div>

                <div>
                    <h4 className='font-anton-regular text-xl mb-3'>QUICK LINKS</h4>
                    <ul className='space-y-2'>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Home</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>New Arrivals</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Categories</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white'>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-anton-regular text-xl mb-3'>FOLLOW US</h4>
                    <div className='flex gap-4'>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            <FaTwitter size={24} />
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
                        Md Abid Hussain
                    </a>
                </div>

            </div>
        </footer>
    )
}
export default Footer;