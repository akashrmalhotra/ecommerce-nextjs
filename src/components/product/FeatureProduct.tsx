"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import WeeklyBestSellingMain from "@/components/product-main/WeeklyBestSellingMain";
import Product from '@/data/Product.json';


interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
    price?: string;
}

function FeatureProduct() {


    // number count up and down
    useEffect(() => {
        const handleQuantityClick = (e: Event) => {
            const button = e.currentTarget as HTMLElement;
            const parent = button.closest('.quantity-edit') as HTMLElement | null;
            if (!parent) return;

            const input = parent.querySelector('.input') as HTMLInputElement | null;
            const addToCart = parent.querySelector('a.add-to-cart') as HTMLElement | null;
            if (!input) return;

            let oldValue = parseInt(input.value || '1', 10);
            let newVal = oldValue;

            if (button.classList.contains('plus')) {
                newVal = oldValue + 1;
            } else if (button.classList.contains('minus')) {
                newVal = oldValue > 1 ? oldValue - 1 : 1;
            }

            input.value = newVal.toString();
            if (addToCart) {
                addToCart.setAttribute('data-quantity', newVal.toString());
            }
        };

        const buttons = document.querySelectorAll('.quantity-edit .button');

        // 💡 Remove any existing handlers first (safe rebind)
        buttons.forEach(button => {
            button.removeEventListener('click', handleQuantityClick);
            button.addEventListener('click', handleQuantityClick);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', handleQuantityClick);
            });
        };
    }, []);






    // modal activation
    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);



    const handleClose = () => setActiveModal(null);

    // product content
    const selectedPosts = Product.slice(1, 11);

    const postIndicesSection1 = [1];
    const postIndicesSection2 = [5];
    const postIndicesSection3 = [6];
    const postIndicesSection4 = [16];

    // Helper function to get posts from indices
    const getPostsByIndices = (indices: number[]): PostType[] =>
        indices.map(index => Product[index]).filter(Boolean);

    // Prepare post groups
    const postsSection1 = getPostsByIndices(postIndicesSection1);
    const postsSection2 = getPostsByIndices(postIndicesSection2);
    const postsSection3 = getPostsByIndices(postIndicesSection3);
    const postsSection4 = getPostsByIndices(postIndicesSection4);



    return (
        <div>
            <>
                {/* rts grocery feature area start */}
                <div className="rts-grocery-feature-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-area-between">
                                    <h2 className="title-left">Featured Grocery</h2>
                                    <div className="next-prev-swiper-wrapper">
                                        <div className="swiper-button-prev">
                                            <i className="fa-regular fa-chevron-left" />
                                        </div>
                                        <div className="swiper-button-next">
                                            <i className="fa-regular fa-chevron-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category-area-main-wrapper-one">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        scrollbar={{
                                            hide: true,
                                        }}
                                        autoplay={{
                                            delay: 3000, // Delay between transitions (3 seconds)
                                            disableOnInteraction: false, // Continue autoplay after user interactions
                                        }}
                                        loop={true}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        className="mySwiper-category-1"
                                        breakpoints={{
                                            0: { slidesPerView: 1, spaceBetween: 30 },
                                            320: { slidesPerView: 2, spaceBetween: 30 },
                                            480: { slidesPerView: 3, spaceBetween: 30 },
                                            640: { slidesPerView: 3, spaceBetween: 30 },
                                            840: { slidesPerView: 4, spaceBetween: 30 },
                                            1140: { slidesPerView: 6, spaceBetween: 30 },
                                        }}
                                    >
                                        <SwiperSlide>
                                            {postsSection1.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection2.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection3.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection4.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection1.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection2.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {postsSection3.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className=""
                                                >
                                                    <div className="single-shopping-card-one">
                                                        <WeeklyBestSellingMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts grocery feature area end */}
            </>
        </div>
    )
}

export default FeatureProduct