import React, { useEffect, useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
const Banner = () => {
    const [bannerInfo, setBannerInfo] = useState([]);
    useEffect(() => {
        fetch('https://tasty-meal-server.vercel.app/bannerInfo')
            .then(res => res.json())
            .then(data => setBannerInfo(data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className="carousel">
            {
                bannerInfo.map((info) =>
                    <div id={`slide${parseInt(info.id)}`} key={info.id} className="carousel-item relative w-full">
                        <div className='md:flex lg:flex bg-teal-200 md:w-full lg:full'>
                            <img src={info.image} className="md:w-6/12" />
                            <div className='md:w-6/12 text-center grid grid-cols content-center'>
                                <h1 className='md:text-5xl'>OUR BEST CHEFS</h1>
                                <p className='font-bold text-2xl'>{info.name}</p>
                                <p className='text-xl'>Experience : {info.experience}</p>
                                <p className='text-xl'>Recipes : {info.recipes}</p>
                                <p className='flex items-center justify-center'><AiFillHeart />{info.like}</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${parseInt(info.id) - 1}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${parseInt(info.id) + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Banner;