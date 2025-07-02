import React from 'react'
const products = [
    {
        id: 1,
        image: '/images/product1.jpg',
        name: 'Cartoon  Caus',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 2,
        image: '/images/product2.jpg',
        name: 'Harry Potter HOGWARTS',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 3,
        image: '/images/product3.jpg',
        name: 'Spooky Ghost Diffy the Oddy',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 4,
        image: '/images/product4.jpg',
        name: 'SPOOKY Ghost Smoking Kills',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    {
        id: 5,
        image: '/images/product5.jpg',
        name: 'FT Comic',
        category: 'Oversized t-shirt',
        price: '₹599',
    },
    // Add more products as needed
]
export const MostSellingTees = () => {
    return (
        <div className="">
            <div className="text-3xl anton font-bold w-full text-center p-2 text-white bg-black">
                MOST SELLING TEES
            </div>

            <div className="overflow-x-auto overflow-y-hidden">
                <div className="flex gap-4 px-4 py-2 w-max">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-[400px] bg-white shadow rounded-lg p-3 hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-90 object-cover rounded-md mb-2"
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
