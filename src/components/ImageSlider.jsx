// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const images = [
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018907/1_20251101_195929_0000_vils15.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018907/2_20251101_195929_0001_ckzofu.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018908/5_20251101_195930_0004_hswcy4.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018906/4_20251101_195930_0003_d32hw7.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018909/6_20251101_195930_0005_mu7v5t.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/v1762018911/3_20251101_195929_0002_kue8ko.jpg",
]

const ImageSlider = () => {
    return (
        <div className="w-full h-screen ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full h-full"
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                            <img
                                src={src}
                                alt={`Slide ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Optional overlay text */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h2 className="text-white text-4xl md:text-6xl font-bold">
                                    
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSlider
