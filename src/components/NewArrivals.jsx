import React from 'react'

const products = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005295/Picsart_25-05-30_00-42-41-167_1_sq1mdw.jpg',
        name: 'Cartoon  Caus',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005294/Picsart_25-06-28_13-07-29-502_cjxnag.jpg',
        name: 'Harry Potter HOGWARTS',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005550/Picsart_25-05-30_14-29-30-555_sxwf4o.jpg',
        name: 'SPOOKY Ghost Smoking Kills',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005550/Picsart_25-05-30_14-29-30-555_sxwf4o.jpg',
        name: 'Spooky Ghost Diffy the Oddy',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_400/v1753005295/Picsart_25-05-30_00-42-41-167_1_sq1mdw.jpg',
        name: 'FT Comic',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    // Add more products as needed
]

export const NewArrivals = () => {
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
                            
                            className="w-[300px] shrink-0 bg-white shadow rounded-lg p-3 hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={product.image}
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