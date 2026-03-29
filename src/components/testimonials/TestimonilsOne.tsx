"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';




const CustomerFeedback = () => {
    return (
        <div className="rts-cuystomers-feedback-area rts-section-gap2">
            <div className="container-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-left pl--0">
                            <h2 className="title-left mb--0">Customer Feedbacks</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt--50">
                    <div className="col-lg-12">
                        <div className="customers-feedback-area-main-wrapper">
                            <div className="rts-caregory-area-one">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="category-area-main-wrapper-one">
                                            <Swiper
                                                modules={[Autoplay]}
                                                scrollbar={{
                                                    hide: true,
                                                }}
                                                autoplay={{
                                                    delay: 3000, // Delay between transitions (3 seconds)
                                                    disableOnInteraction: false, // Continue autoplay after user interactions
                                                }}
                                                loop={true}
                                                className="mySwiper-category-1"
                                                breakpoints={{
                                                    0: { slidesPerView: 1, spaceBetween: 30 },
                                                    320: { slidesPerView: 1, spaceBetween: 30 },
                                                    480: { slidesPerView: 1, spaceBetween: 30 },
                                                    640: { slidesPerView: 1, spaceBetween: 30 },
                                                    840: { slidesPerView: 2, spaceBetween: 30 },
                                                    1140: { slidesPerView: 2, spaceBetween: 30 },
                                                }}
                                            >
                                                <SwiperSlide>
                                                    <div className="single-customers-feedback-area">
                                                        <div className="top-thumbnail-area">
                                                            <div className="left">
                                                                <img src="assets/images/testimonial/01.png" alt="logo" />
                                                                <div className="information">
                                                                    <h4 className="title">Andrew D. Smith</h4>
                                                                    <span>Manager</span>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <img src="assets/images/testimonial/02.png" alt="logo" />
                                                            </div>
                                                        </div>
                                                        <div className="body-content">
                                                            <p className="disc">
                                                                “According to the council of supply chain professionals the council of
                                                                logistics management logistics is the process of planning, implementing
                                                                and controlling procedures”
                                                            </p>
                                                        </div>
                                                    </div>

                                                </SwiperSlide><SwiperSlide>
                                                    <div className="single-customers-feedback-area">
                                                        <div className="top-thumbnail-area">
                                                            <div className="left">
                                                                <img src="assets/images/testimonial/01.png" alt="logo" />
                                                                <div className="information">
                                                                    <h4 className="title">Andrew D. Smith</h4>
                                                                    <span>Manager</span>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <img src="assets/images/testimonial/02.png" alt="logo" />
                                                            </div>
                                                        </div>
                                                        <div className="body-content">
                                                            <p className="disc">
                                                                “According to the council of supply chain professionals the council of
                                                                logistics management logistics is the process of planning, implementing
                                                                and controlling procedures”
                                                            </p>
                                                        </div>
                                                    </div>

                                                </SwiperSlide><SwiperSlide>
                                                    <div className="single-customers-feedback-area">
                                                        <div className="top-thumbnail-area">
                                                            <div className="left">
                                                                <img src="assets/images/testimonial/01.png" alt="logo" />
                                                                <div className="information">
                                                                    <h4 className="title">Andrew D. Smith</h4>
                                                                    <span>Manager</span>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <img src="assets/images/testimonial/02.png" alt="logo" />
                                                            </div>
                                                        </div>
                                                        <div className="body-content">
                                                            <p className="disc">
                                                                “According to the council of supply chain professionals the council of
                                                                logistics management logistics is the process of planning, implementing
                                                                and controlling procedures”
                                                            </p>
                                                        </div>
                                                    </div>

                                                </SwiperSlide><SwiperSlide>
                                                    <div className="single-customers-feedback-area">
                                                        <div className="top-thumbnail-area">
                                                            <div className="left">
                                                                <img src="assets/images/testimonial/01.png" alt="logo" />
                                                                <div className="information">
                                                                    <h4 className="title">Andrew D. Smith</h4>
                                                                    <span>Manager</span>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <img src="assets/images/testimonial/02.png" alt="logo" />
                                                            </div>
                                                        </div>
                                                        <div className="body-content">
                                                            <p className="disc">
                                                                “According to the council of supply chain professionals the council of
                                                                logistics management logistics is the process of planning, implementing
                                                                and controlling procedures”
                                                            </p>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* rts-caregory-area-one end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;
