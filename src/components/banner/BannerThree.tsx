'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const BannerThreeSwiper = () => {
  return (
    <div className="banner-three-swiper-main-wrapper swiper-button-between">
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={700}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 1, spaceBetween: 0 },
          840: { slidesPerView: 1, spaceBetween: 0 },
          1140: { slidesPerView: 1, spaceBetween: 0 },
          1540: { slidesPerView: 1, spaceBetween: 0 },
          1840: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="mySwiper-category-1"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="rts-section-gap rts-banner-area-three banner-bg-full_1">
            <div className="container-2">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-inner-content-three">
                    <span className="pre">
                      Get up to 30% off on your first $150 purchase
                    </span>
                    <h1 className="title">
                      Don’t miss our amazing <br />
                      grocery deals
                    </h1>
                    <p className="dsicription">
                      We have prepared special discounts for you on grocery products. Don't miss these opportunities...
                    </p>
                    <Link href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                      <div className="btn-text">Shop Now</div>
                      <div className="arrow-icon"><i className="fa-light fa-arrow-right"></i></div>
                      <div className="arrow-icon"><i className="fa-light fa-arrow-right"></i></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="rts-section-gap rts-banner-area-three img-two banner-bg-full_1">
            <div className="container-2">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-inner-content-three">
                    <span className="pre">
                      Get up to 10% off on your first $250 purchase
                    </span>
                    <h1 className="title">
                      Check out our incredible <br /> deals today
                    </h1>
                    <p className="dsicription">
                      We have prepared special discounts for you on grocery products. Don't miss these opportunities...
                    </p>
                    <Link href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                      <div className="btn-text">Shop Now</div>
                      <div className="arrow-icon"><i className="fa-light fa-arrow-right"></i></div>
                      <div className="arrow-icon"><i className="fa-light fa-arrow-right"></i></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div className="swiper-button-next"><i className="fa-regular fa-arrow-right"></i></div>
        <div className="swiper-button-prev"><i className="fa-regular fa-arrow-left"></i></div>
      </Swiper>
    </div>
  );
};

export default BannerThreeSwiper;
