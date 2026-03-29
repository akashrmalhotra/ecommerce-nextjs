'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const FeaturedCategories = () => {
  const categories = [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png',
    '07.png',
    '08.png',
    '09.png',
    '10.png',
  ];

  return (
    <div className="rts-category-area rts-section-gapTop">
      <div className="container-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h2 className="title-left mb--0">Featured Categories</h2>
              <div className="next-prev-swiper-wrapper">
                <div className="swiper-button-prev">
                  <i className="fa-regular fa-chevron-left"></i>
                </div>
                <div className="swiper-button-next">
                  <i className="fa-regular fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={7}
                loop={true}
                speed={1000}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 12 },
                  320: { slidesPerView: 2, spaceBetween: 12 },
                  480: { slidesPerView: 3, spaceBetween: 12 },
                  640: { slidesPerView: 4, spaceBetween: 12 },
                  840: { slidesPerView: 4, spaceBetween: 12 },
                  1140: { slidesPerView: 7, spaceBetween: 12 },
                }}
                className="mySwiper-category-1"
              >
                {categories.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-category-one">
                      <Link href="shop-grid-sidebar.html">
                        <img src={`/assets/images/category/${img}`} alt="category" />
                        <p>Organic Vegetable</p>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
