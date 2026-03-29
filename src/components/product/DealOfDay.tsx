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





function DealOfDay() {




    // product content
    const selectedPosts = Product.slice(1, 11);

    const postIndicesSection1 = [1, 5, 6, 4, 7,];
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
        <>
            {/* deal of the day area start */}
            <div className="rts-deal-ofthe-day rts-section-gap">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="titlw-area-between-best-seller-anim">
                                <h2 className="title">Deals Of The Day</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mt--10">
                        {postsSection1.map((post: PostType, index: number) => (
                            <div
                                key={index}
                                className="col-lg-20 col-md-4 col-sm-6 col-12"
                            >
                                <div className="single-shopping-card-one deals-of-day">
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
            </div>
            {/* deal of the day area end */}
        </>

    )
}

export default DealOfDay