"use client"
import React from 'react'
import DealOfDayMain from "@/components/product-main/DealOfDayMain";
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


function FeaturesGrid() {


    // product content
    const selectedPosts = Product.slice(1, 11);

    const postIndicesSection1 = [1, 5];
    const postIndicesSection2 = [5, 6];
    const postIndicesSection3 = [8, 7];
    const postIndicesSection4 = [3, 2];

    // Helper function to get posts from indices
    const getPostsByIndices = (indices: number[]): PostType[] =>
        indices.map(index => Product[index]).filter(Boolean);

    // Prepare post groups
    const postsSection1 = getPostsByIndices(postIndicesSection1);
    const postsSection2 = getPostsByIndices(postIndicesSection2);
    const postsSection3 = getPostsByIndices(postIndicesSection3);
    const postsSection4 = getPostsByIndices(postIndicesSection4);

    return (
        <div className="new-offer-section-area rts-section-gap bg_light-1">
            <div className="container-2">
                <div className="row g-24">
                    <div className="col-lg-6">
                        {/* ingle new offer area */}
                        <div className="single-new-offer-area">
                            <div className="row g-40">
                                <div className="col-lg-12">
                                    <div className="new-offer-wized-title-between">
                                        <h4 className="title">Recently Added</h4>
                                        <a
                                            href="/shop-grid-sidebar"
                                            className="rts-btn btn-primary"
                                        >
                                            See More
                                        </a>
                                    </div>
                                </div>
                                {postsSection1.map((post: PostType, index: number) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <div className="single-shopping-card-one deals-of-day new-deal-offer-border-right">
                                            <DealOfDayMain
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
                        {/* ingle new offer area end */}
                    </div>
                    <div className="col-lg-6">
                        {/* ingle new offer area */}
                        <div className="single-new-offer-area">
                            <div className="row g-40">
                                <div className="col-lg-12">
                                    <div className="new-offer-wized-title-between">
                                        <h4 className="title">Top Selling</h4>
                                        <a
                                            href="/shop-grid-sidebar"
                                            className="rts-btn btn-primary"
                                        >
                                            See More
                                        </a>
                                    </div>
                                </div>
                                {postsSection2.map((post: PostType, index: number) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <div className="single-shopping-card-one deals-of-day new-deal-offer-border-right">
                                            <DealOfDayMain
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
                        {/* ingle new offer area end */}
                    </div>
                    <div className="col-lg-6">
                        {/* ingle new offer area */}
                        <div className="single-new-offer-area">
                            <div className="row g-40">
                                <div className="col-lg-12">
                                    <div className="new-offer-wized-title-between">
                                        <h4 className="title">Top Rated</h4>
                                        <a
                                            href="/shop-grid-sidebar"
                                            className="rts-btn btn-primary"
                                        >
                                            See More
                                        </a>
                                    </div>
                                </div>
                                {postsSection3.map((post: PostType, index: number) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <div className="single-shopping-card-one deals-of-day new-deal-offer-border-right">
                                            <DealOfDayMain
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
                        {/* ingle new offer area end */}
                    </div>
                    <div className="col-lg-6">
                        {/* ingle new offer area */}
                        <div className="single-new-offer-area">
                            <div className="row g-40">
                                <div className="col-lg-12">
                                    <div className="new-offer-wized-title-between">
                                        <h4 className="title">Deals of the day</h4>
                                        <a
                                            href="/shop-grid-sidebar"
                                            className="rts-btn btn-primary"
                                        >
                                            See More
                                        </a>
                                    </div>
                                </div>
                                {postsSection4.map((post: PostType, index: number) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <div className="single-shopping-card-one deals-of-day new-deal-offer-border-right">
                                            <DealOfDayMain
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
                        {/* ingle new offer area end */}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FeaturesGrid