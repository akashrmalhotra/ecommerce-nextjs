"use client"
import React from 'react'
import ProductSmListMain from "@/components/product-main/ProductSmListMain";
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




function RecentlyAdded() {


    // product content

    const postIndicesSection1 = [1, 2, 3, 4];
    const postIndicesSection2 = [5, 6, 7, 8];
    const postIndicesSection3 = [9, 10, 11, 12];
    const postIndicesSection4 = [13, 14, 15, 16];

    // Helper function to get posts from indices
    const getPostsByIndices = (indices: number[]): PostType[] => indices.map(index => Product[index]).filter(Boolean);

    // Prepare post groups
    const postsSection1 = getPostsByIndices(postIndicesSection1);
    const postsSection2 = getPostsByIndices(postIndicesSection2);
    const postsSection3 = getPostsByIndices(postIndicesSection3);
    const postsSection4 = getPostsByIndices(postIndicesSection4);





    return (
        <div>
            <>
                {/* four feature area start */}
                <div className="four-feature-in-one rts-section-gap">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3">
                                {/* single four feature */}
                                <div className="feature-product-list-wrapper">
                                    <div className="title-area">
                                        <h2 className="title">Recently Added</h2>
                                    </div>


                                    {postsSection1.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="single-product-list"
                                        >
                                            <ProductSmListMain
                                                Slug={post.slug}
                                                ProductImage={post.image}
                                                ProductTitle={post.title}
                                                Price={post.price}
                                            />
                                        </div>
                                    ))}

                                </div>
                                {/* single four feature end */}
                            </div>
                            <div className="col-lg-3">
                                {/* single four feature */}
                                <div className="feature-product-list-wrapper">
                                    <div className="title-area">
                                        <h2 className="title">Top Rated</h2>
                                    </div>
                                    {postsSection2.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="single-product-list"
                                        >
                                            <ProductSmListMain
                                                Slug={post.slug}
                                                ProductImage={post.image}
                                                ProductTitle={post.title}
                                                Price={post.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* single four feature end */}
                            </div>
                            <div className="col-lg-3">
                                {/* single four feature */}
                                <div className="feature-product-list-wrapper">
                                    <div className="title-area">
                                        <h2 className="title">Top Selling</h2>
                                    </div>
                                    {postsSection3.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="single-product-list"
                                        >
                                            <ProductSmListMain
                                                Slug={post.slug}
                                                ProductImage={post.image}
                                                ProductTitle={post.title}
                                                Price={post.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* single four feature end */}
                            </div>
                            <div className="col-lg-3">
                                {/* single four feature */}
                                <div className="feature-product-list-wrapper">
                                    <div className="title-area">
                                        <h2 className="title">Deals of the day</h2>
                                    </div>
                                    {postsSection4.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="single-product-list"
                                        >
                                            <ProductSmListMain
                                                Slug={post.slug}
                                                ProductImage={post.image}
                                                ProductTitle={post.title}
                                                Price={post.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* single four feature end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* four feature area end */}
            </>

        </div>
    )
}

export default RecentlyAdded