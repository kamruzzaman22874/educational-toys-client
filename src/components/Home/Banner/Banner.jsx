// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../../../assets/image/slider1.webp"
import slider2 from "../../../assets/image/slider2.webp"
import slider3 from "../../../assets/image/slider3.webp"
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Banner.css';

const Banner = () => {
    return (

        <>
            <Swiper navigation={true} autoplay={{ delay: 3000 }} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='md:rleative -top-72'>
                        <img src={slider1} alt="" />
                        <div className='bg-[#fb1180] space-y-3 md:w-[40%] absolute md:top-36 md:py-16 px-16 md:left-[400px] md:opacity-80 rounded'>
                            <h2 className='md:text-3xl text-white font-semibold'>MEGA SALE !</h2>
                            <h1 className='md:text-6xl text-white font-bold'>30% OFFER</h1>
                            <footer className='absolute w-full'>
                                <h3 className='bg-[#7a073d] text-white py-3  relative -bottom-4 right-16'>ALL KIDS OF FASSION PRODUCTS</h3>
                            </footer>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider2} />
                        <div className='bg-[#fb1180] md:h-[400px] absolute md:top-10 md:left-48  opacity-80 rounded-full'>
                            <div className='relative md:top-[25%] w-full px-16 space-y-6'>
                                <h2 className='text-3xl rounded font-semibold bg-white'>FINAL SALE !</h2>
                                <h1 className='text-5xl text-white font-bold'>20% OFFER</h1>
                                <h3 className='text-white'>ALL KIDS OF FASSION PRODUCTS</h3>
                                <button className='bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider3} />
                        <div className='bg-[#fb1180] w-[40%] absolute top-16 py-16 px-16 left-[130px] opacity-80 rounded'>
                            <h2 className='text-3xl text-white font-semibold'>MEGA SALE !</h2>
                            <h1 className='text-7xl text-white font-bold'>30% OFFER</h1>
                            <footer className='absolute w-full'>
                                <h3 className='bg-[#7a073d] text-white py-3  relative -bottom-4 right-16'>ALL KIDS OF FASSION PRODUCTS</h3>
                            </footer>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
        // <Carousel autoPlay={false} infiniteLoop={true} interval={1000} showArrows={true}>
        // <div className='rleative'>
        //     <img src={slider1} alt="" />
        //     <div className='bg-[#fb1180] w-[40%] absolute top-36 py-16 px-16 left-[400px] opacity-80 rounded'>
        //         <h2 className='text-3xl text-white font-semibold'>MEGA SALE !</h2>
        //         <h1 className='text-7xl text-white font-bold'>30% OFFER</h1>
        //         <footer className='absolute w-full'>
        //             <h3 className='bg-[#7a073d] text-white py-3  relative -bottom-4 right-16'>ALL KIDS OF FASSION PRODUCTS</h3>
        //         </footer>
        //     </div>
        // </div>
        // <div>
        //     <img src={slider2} />
        //     <div className='bg-[#fb1180] h-[400px] absolute top-10 left-48  opacity-80 rounded-full'>
        //         <div className='relative top-[25%] w-full px-16 space-y-6'>
        //             <h2 className='text-3xl rounded font-semibold bg-white'>FINAL SALE !</h2>
        //             <h1 className='text-5xl text-white font-bold'>20% OFFER</h1>
        //             <h3 className='text-white'>ALL KIDS OF FASSION PRODUCTS</h3>
        //             <button className='bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded'>Shop Now</button>
        //         </div>
        //     </div>
        // </div>
            // <div>
            //     <img src={slider3} />
            //     <div className='bg-[#fb1180] w-[40%] absolute top-16 py-16 px-16 left-[130px] opacity-80 rounded'>
            //         <h2 className='text-3xl text-white font-semibold'>MEGA SALE !</h2>
            //         <h1 className='text-7xl text-white font-bold'>30% OFFER</h1>
            //         <footer className='absolute w-full'>
            //             <h3 className='bg-[#7a073d] text-white py-3  relative -bottom-4 right-16'>ALL KIDS OF FASSION PRODUCTS</h3>
            //         </footer>
            //     </div>
            // </div>
        // </Carousel>
    );
};

export default Banner;