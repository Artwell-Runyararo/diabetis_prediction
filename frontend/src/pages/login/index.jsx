import React, { useRef, useState } from 'react';
import picture from '../../assets/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.png';
import picture1 from '../../assets/carpenter.png';
import picture2 from '../../assets/different-electrical-tools-wooden-background-flat-lay.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { Parallax, EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Space, Flex } from 'antd';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    return (
        <>
            {/* Desktop */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    height: '800px'
                }}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}

                className="mySwiper p-0 m-0"
            >
                <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Overlay div */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
                    <div className="relative w-full h-full" >
                        {/* Slide content */}
                        <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                            <div className="px-24 py-16">
                                <p>INTRODUCTION</p>

                                <div className="row">
                                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                </div>

                                <div className="title font-bold py-4" data-swiper-parallax="-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores.
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">

                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p className='text-xl'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae dolore culpa tempore libero dolores nihil laudantium quia reiciendis fuga cumque eius optio amet doloremque voluptatem minus, officia mollitia corporis.
                                    </p>
                                    <div className='py-16'>
                                        <Link to={`/login`} className='bg-purple-800 text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Sign In &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Overlay div */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
                    <div className="relative w-full h-full" >
                        <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                            <div className="px-24 py-16">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores.</p>

                                <div className="row">
                                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                </div>

                                <div className="title font-bold py-4" data-swiper-parallax="-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores.
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">

                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p className='text-xl'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae dolore culpa tempore libero dolores nihil laudantium quia reiciendis fuga cumque eius optio amet doloremque voluptatem minus, officia mollitia corporis.
                                    </p>
                                    <div className='py-16'>
                                        <Link to={`/login`} className='bg-purple-800 text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Sign In &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Overlay div */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
                    <div className="relative w-full h-full" >
                        <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                            <div className="px-24 py-16">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores.</p>

                                <div className="row">
                                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                </div>

                                <div className="text-5xl font-bold py-4 text-uppercase" data-swiper-parallax="-300">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores.</div>

                                <div className="text" data-swiper-parallax="-100">
                                    <p className='text-xl'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae dolore culpa tempore libero dolores nihil laudantium quia reiciendis fuga cumque eius optio amet doloremque voluptatem minus, officia mollitia corporis.
                                    </p>
                                    <div className='py-16'>
                                        <Link to={`/login`} className='bg-purple-800 text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Sign In &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* end of Desktop */}
        </>
    )
}

export default HeroSection