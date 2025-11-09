// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const images = [
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161888/1_20251101_195929_0000_iz8ihh.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161888/2_20251101_195929_0001_ks1lrq.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161885/3_20251101_195929_0002_uxjdwt.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161882/4_20251101_195930_0003_j7enym.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161887/5_20251101_195930_0004_yk6pmg.jpg",
    "https://res.cloudinary.com/dpof6jswm/image/upload/f_auto,q_auto,w_1920,c_limit/v1762161892/6_20251101_195930_0005_tvheao.jpg",
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