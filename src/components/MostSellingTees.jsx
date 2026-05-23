import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
    {
        id: 1,
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777227251/Picsart_25-06-14_17-32-44-477_xgub67.jpg'
        ],
        name: 'Dare to Disturb',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 2, // Fixed duplicate id
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777227251/gf3_atq9jj.jpg'
        ],
        name: 'PowerPuff Girls',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 3, // Fixed duplicate id
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005295/Picsart_25-05-30_00-42-41-167_1_sq1mdw.jpg'
        ],
        name: 'Cartoon  Caus',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 4, // Fixed duplicate id
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753008193/Picsart_25-05-30_00-16-23-630_w9331b.jpg'
        ],
        name: 'Harry Potter HOGWARTS',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 5, // Fixed duplicate id
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005550/Picsart_25-05-30_14-29-30-555_sxwf4o.jpg'
        ],
        name: 'SPOOKY Ghost Smoking Kills',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 6, // Fixed duplicate id
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005295/Picsart_25-05-30_00-42-41-167_1_sq1mdw.jpg'
        ],
        name: 'FT Comic',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
]

export const MostSellingTees = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="text-3xl font-anton-regular font-bold w-full text-center p-2 text-white bg-black">
                MOST SELLING TEES
            </div>
            <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-4 px-4 py-2 w-max">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/product/${product.id}`, { state: product })}
                            role="button"
                            tabIndex="0"
                            className="w-[300px] shrink-0 bg-white shadow rounded-lg p-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-80 object-cover rounded-md mb-2"
                                loading="lazy"
                            />
                            <div className="text-lg font-semibold">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                            <div className="text-base font-bold text-green-600">{product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MostSellingTees;