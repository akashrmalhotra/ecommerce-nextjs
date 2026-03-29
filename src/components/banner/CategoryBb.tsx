"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { img: "/assets/images/category/01.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/02.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/03.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/04.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/05.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/06.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/07.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/08.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/09.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/10.png", name: "Organic Vegetable" },
  { img: "/assets/images/category/06.png", name: "Organic Vegetable" },
];

function CategoryBannerBottom() {
  return (
    <div className="rts-caregory-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="category-area-main-wrapper-one">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={12}
                slidesPerView={10}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 12 },
                  320: { slidesPerView: 2, spaceBetween: 12 },
                  480: { slidesPerView: 3, spaceBetween: 12 },
                  640: { slidesPerView: 4, spaceBetween: 12 },
                  840: { slidesPerView: 4, spaceBetween: 12 },
                  1140: { slidesPerView: 10, spaceBetween: 12 },
                }}
              >
                {categories.map((cat, idx) => (
                  <SwiperSlide key={idx}>
                    <Link href="/shop-grid-sidebar" className="single-category-one">
                      <Image
                        src={cat.img}
                        alt={cat.name}
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                      <p>{cat.name}</p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBannerBottom;
