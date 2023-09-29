import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FoodProcess = () => {
const [process, setProcess] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/processingInfo')
            .then(res => res.json())
            .then(data => setProcess(data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div  className='bg-black text-white'>
            <h1 className="text-center text-4xl py-5">Our Food making process</h1>
            {
                process.map(info => <div>                
                <div className='md:flex w-4/5 m-auto '>
                    <div className="rounder  bg-success text-light d-none d-sm-block">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dA0VGEbbw4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='p-5'>
                        <h3 className="text-xl font-bold">{info.title}</h3>
                        <p> {info.details}</p>
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