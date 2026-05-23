import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
    {
        id: 1,
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777226512/Picsart_25-06-14_12-53-06-933_e8rs9h.jpg',
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1779547840/Picsart_25-06-10_20-18-30-541_nlmkgb.jpg'
        ],
        name: 'Stitch  Art',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 2,
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777226512/mm11_woewdl.jpg',
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1779549107/mm22_phakia.jpg',
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1779549169/mm33_bwrmw8.jpg'
        ],
        name: 'Demon Slayer - Tanjiro',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 3, 
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777226511/Picsart_25-07-04_18-26-25-733_ruhamn.jpg',
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1779549489/Picsart_25-07-04_18-27-49-400_oucinu.jpg'
        ],
        name: 'Porsche',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 4, 
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005294/Picsart_25-06-28_13-07-29-502_cjxnag.jpg'
        ],
        name: 'Harry Potter HOGWARTS',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 5, 
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777226511/A_White_Back_1_r1emf7.jpg'
        ],
        name: 'OnePiece - ZORO',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 6, 
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005550/Picsart_25-05-30_14-29-30-555_sxwf4o.jpg'
        ],
        name: 'Spooky Ghost Diffy the Oddy',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
    {
        id: 7, 
        images: [
            'https://res.cloudinary.com/dpof6jswm/image/upload/v1777226512/mm1_pcwlf5.jpg'
        ],
        name: 'OnePiece - LUFFYd',
        category: 'Oversized t-shirt',
        price: '₹999',
    },
]

export const NewArrivals = () => {
    const navigate = useNavigate();

    return (
        <div className="m-2">
            <div className="text-3xl font-anton-regular font-bold w-full text-center p-2">
                NEW ARRIVALS
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
export default NewArrivals;