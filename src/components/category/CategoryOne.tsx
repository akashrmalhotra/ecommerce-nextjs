"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function CategoryOne() {
    return (
        <div>
            <>
                {/* rts category area satart */}
                <div className="rts-caregory-area-two rts-section-gap">
                    <div className="container-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category-area-main-wrapper-two">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        spaceBetween={1}
                                        slidesPerView={8}
                                        loop={true}
                                        speed={2000}
                                        autoplay={{
                                            delay: 4000,
                                        }}
                                        className="mySwiper-category-1 swiper-data"
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        breakpoints={{
                                            0: { slidesPerView: 1, spaceBetween: 0 },
                                            320: { slidesPerView: 2, spaceBetween: 0 },
                                            480: { slidesPerView: 3, spaceBetween: 0 },
                                            640: { slidesPerView: 6, spaceBetween: 0 },
                                            840: { slidesPerView: 7, spaceBetween: 0 },
                                            1140: { slidesPerView: 8, spaceBetween: 0 },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/01.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/02.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/03.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/04.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/05.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/06.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/07.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/08.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-category-one">
                                                <Link href="/shop">
                                                    <img src="assets/images/category/01.png" alt="category" />
                                                    <p>Organic Vegetable</p>
                                                    <span>299 Items</span>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts category area end */}
            </>

        </div>
    )
}

export default CategoryOne