import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductPage = () => {
    const location = useLocation();
    const product = location.state;
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!product || !product.images) {
        return <div className="p-8 text-center text-xl">No product data found.</div>;
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
            {/* Image Slider Wrapper */}
            <div className="flex-1 relative group w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
                <img 
                    src={product.images[currentSlide]} 
                    alt={`${product.name} view ${currentSlide + 1}`} 
                    className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Show slider controls only if there are multiple images */}
                {product.images.length > 1 && (
                    <>
                        <button 
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                        >
                            ❮
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                        >
                            ❯
                        </button>
                        
                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-2">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Product Details Text */}
            <div className="flex-1 flex flex-col justify-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-4">{product.name}</h1>
                <p className="text-2xl font-semibold text-green-600 mb-6">{product.price}</p>
                <button className="bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Contact Now to Order!
                </button>
            </div>
        </div>
    )
}

export default ProductPage;