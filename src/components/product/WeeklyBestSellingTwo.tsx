"use client"
import { useState } from 'react';
import WeeklyBestSellingTwoMain from "@/components/product-main/WeeklyBestSellingTwoMain";
import Product from '@/data/Product.json';




interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
}




function WeeklyBestSellingTwo() {



    // modal
    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const handleClose = () => setActiveModal(null);


    // product content
    const selectedPosts = Product.slice(1, 11);

    const postIndicesSection1 = [17,18,19,20,21,22];
    const postIndicesSection2 = [5, 6, 4, 7, 8, 5, 6, 5, 8, 9, 18, 12, 2];
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
            <>
                {/* weekly best seller area start */}
                <div className="weekly-best-seller-area rts-section-gap bg_light-1">
                    <div className="container-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="titlw-area-between-best-seller-anim">
                                    <h2 className="title">Weekly Best Seller Grocery</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 mt--10">
                            


                            {postsSection1.map((post: PostType, index: number) => (
                                <div
                                    key={index}
                                    className="col-xl-2 col-md-3 col-md-4 col-sm-6 col-12"
                                >
                                    <div className="weekly-best-seller-item-single">
                                        <WeeklyBestSellingTwoMain
                                            Slug={post.slug}
                                            ProductImage={post.image}
                                            ProductTitle={post.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* weekly best seller area end */}
            </>
        </div>
    )
}

export default WeeklyBestSellingTwo