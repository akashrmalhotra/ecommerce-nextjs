'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    img: '/assets/images/grocery/08.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
  {
    id: 2,
    img: '/assets/images/grocery/09.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
  {
    id: 3,
    img: '/assets/images/grocery/10.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
  {
    id: 4,
    img: '/assets/images/grocery/11.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
  {
    id: 5,
    img: '/assets/images/grocery/12.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
  {
    id: 6,
    img: '/assets/images/grocery/13.jpg',
    title: 'Pastine Mellin Filid Angelo 100% Di Grano Tenero',
    pack: '500g Pack',
    currentPrice: '$36.00',
    previousPrice: '$36.00',
  },
];

export default function CategorySlider() {
  useEffect(() => {
    // Ensure Swiper navigation works after mount
  }, []);

  return (
    <div className="rts-category-area rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-area-between">
                    <h2 className="title-left mb--0">Hand Picked Products for 10% Offer</h2>
                    <div className="next-prev-swiper-wrapper d-sm-none">
                      <div className="swiper-button-prevs">
                        <i className="fa-regular fa-chevron-left"></i>
                      </div>
                      <div className="swiper-button-nexts">
                        <i className="fa-regular fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="rts-caregory-area-one">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="category-area-main-wrapper-one">
                          <Swiper
                            modules={[Navigation]}
                            navigation={{
                              nextEl: '.swiper-button-nexts',
                              prevEl: '.swiper-button-prevs',
                            }}
                            spaceBetween={15}
                            slidesPerView={4}
                            loop={true}
                            speed={1000}
                            breakpoints={{
                              0: { slidesPerView: 1 },
                              320: { slidesPerView: 1 },
                              480: { slidesPerView: 2 },
                              640: { slidesPerView: 2 },
                              840: { slidesPerView: 3 },
                              1140: { slidesPerView: 4 },
                            }}
                            className="mySwiper-category-1 swiper-data"
                          >
                            {products.map((item) => (
                              <SwiperSlide key={item.id}>
                                <div className="single-shopping-card-one tranding-product">
                                  <Link href="/shop" className="thumbnail-preview">
                                    <Image
                                      src={item.img}
                                      alt="grocery"
                                      width={300}
                                      height={300}
                                      layout="responsive"
                                    />
                                  </Link>
                                  <div className="body-content">
                                    <a href="/shop">
                                      <h4 className="title">{item.title}</h4>
                                    </a>
                                    <span className="availability">{item.pack}</span>
                                    <div className="price-area">
                                      <span className="current">{item.currentPrice}</span>
                                      <div className="previous">{item.previousPrice}</div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* rts category area end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
