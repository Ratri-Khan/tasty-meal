import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FoodProcess = () => {
const [process, setProcess] = useState([]);
    useEffect(() => {
        fetch('https://tasty-meal-server.vercel.app/processingInfo')
            .then(res => res.json())
            .then(data => setProcess(data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div  className='bg-black text-white'>
            <h1 className="text-center text-4xl py-5">Our Food making process</h1>
            {
                process.map(info => <div key={info.id}>                
                <div className='md:flex lg:flex w-4/5 m-auto '>
                    <div className="lg:w-6/12 md:w-6/12 rounder  bg-success text-light d-none d-sm-block">
                        <iframe  src="https://www.youtube.com/embed/dA0VGEbbw4g" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-full h-full' allowFullScreen></iframe>
                    </div>
                    <div className='md:p-5 lg:p-5 md:w-6/12 lg:w-6/12'>
                        <h3 className="text-xl font-bold">{info.title}</h3>
                        <p className='text-lg'> {info.details}</p>
                    </div>
                </div>
                <div className="w-4/5 m-auto">
                    <h3 className="text-center text-4xl my-6">Food Gallery</h3>
                    <div className='pb-5'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            // modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={info.image1} alt="" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={info.image2} alt="" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={info.image3} alt="" className="img-fluid" />
                            </SwiperSlide>
    
                            <SwiperSlide>
                                <img src={info.image4} alt="" className="img-fluid" style={{ width: '100%' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={info.image5} alt="" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={info.image6} alt="" className="img-fluid" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default FoodProcess;