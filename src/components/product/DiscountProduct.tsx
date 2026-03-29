"use client"
import React, { useEffect } from 'react';
import DiscountProductMain from "@/components/product-main/DiscountProductMain";
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

function DiscountProduct() {


    // product content
    const selectedPosts = Product.slice(1, 11);

    const postIndicesSection1 = [1, 5, 6, 4];
    const postIndicesSection2 = [5, 6, 4, 7, 8, 5, 6, 5, 8, 9, 18, 12];
    const postIndicesSection3 = [5, 6, 8, 7, 3, 2, 1, 5, 8, 9, 13, 2];
    const postIndicesSection4 = [1, 2, 6, 7, 10, 2, 1, 5, 8, 11, 12, 16];

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
            {/* rts grocery feature area start */}
            <div className="rts-grocery-feature-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">Products With Discounts</h2>
                                <div className="countdown">
                                    <div className="countDown">12/05/2025 10:20:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-with-discount">
                                <div className="row g-5">
                                    <div className="col-xl-4 col-lg-12">
                                        <a href="shop-details.html" className="single-discount-with-bg">
                                            <div className="inner-content">
                                                <h4 className="title">
                                                    Alpro Organic Flavored <br />
                                                    Fresh Juice
                                                </h4>
                                                <div className="price-area">
                                                    <span>Only</span>
                                                    <h4 className="title">$15.00</h4>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="shop-details.html"
                                            className="single-discount-with-bg bg-2"
                                        >
                                            <div className="inner-content">
                                                <h4 className="title">
                                                    Alpro Organic Flavored <br />
                                                    Fresh Juice
                                                </h4>
                                                <div className="price-area">
                                                    <span>Only</span>
                                                    <h4 className="title">$15.00</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-8 col-lg-12">
                                        <div className="row g-4">

                                            {postsSection1.map((post: PostType, index: number) => (
                                                <div
                                                    key={index}
                                                    className="col-lg-6"
                                                >
                                                    <div className="single-shopping-card-one discount-offer">
                                                        <DiscountProductMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts grocery feature area end */}
        </div>
    )
}

export default DiscountProduct