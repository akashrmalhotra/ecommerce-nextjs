"use client"
import React from 'react';
import { useState } from 'react';
import WeeklySellThreeMain from "@/components/product-main/WeeklySellThreeMain";
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



const WeeklySellFour: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>('tab1');
    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const handleClose = () => setActiveModal(null);



    const postIndicesSection1 = [5, 6, 4, 7, 8];
    const postIndicesSection2 = [7, 8, 5, 6, 5];
    const postIndicesSection3 = [5, 6, 8, 7, 3];
    const postIndicesSection4 = [1, 2, 6, 7, 10];

    const getPostsByIndices = (indices: number[]): PostType[] =>
        indices.map(index => Product[index]).filter(Boolean);

    const postsSection1 = getPostsByIndices(postIndicesSection1);
    const postsSection2 = getPostsByIndices(postIndicesSection2);
    const postsSection3 = getPostsByIndices(postIndicesSection3);
    const postsSection4 = getPostsByIndices(postIndicesSection4);

    return (
        <div>
            <>
                {/* popular product area start */}
                <div className="popular-product-weekly-seller-item rts-section-gapTop">
                    <div className="container-2 rts-section-gapBottom single-new-offer-area-border-weekly-selstyle bg_light-1">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-area-between">
                                    <h2 className="title-left mb--0">Don't miss this week's sales</h2>
                                    <ul className="nav nav-tabs" id="myTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab1')}
                                                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                            >
                                                All
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab2')}
                                                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                            >
                                                {" "}
                                                Baking material{" "}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab3')}
                                                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                            >
                                                Milks &amp; Dairies{" "}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab4')}
                                                className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                                            >
                                                Vagetable
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-12">
                                {activeTab === 'tab1' &&
                                    <div>
                                        <div className="row g-4">
                                            {postsSection1.map((post: PostType, index: number) => (
                                                <div key={index} className="col-lg-20 col-md-4 col-sm-6 col-12">
                                                    <div className="single-shopping-card-one deals-of-day">
                                                        <WeeklySellThreeMain
                                                            Slug={post.slug}
                                                            ProductImage={post.image}
                                                            ProductTitle={post.title}
                                                            Price={post.price}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>}{activeTab === 'tab2' &&
                                        <div>
                                            <div className="row g-4">
                                                {postsSection2.map((post: PostType, index: number) => (
                                                    <div key={index} className="col-lg-20 col-md-4 col-sm-6 col-12">
                                                        <div className="single-shopping-card-one deals-of-day">
                                                            <WeeklySellThreeMain
                                                                Slug={post.slug}
                                                                ProductImage={post.image}
                                                                ProductTitle={post.title}
                                                                Price={post.price}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>}{activeTab === 'tab3' &&
                                            <div>
                                                <div className="row g-4">
                                                    {postsSection3.map((post: PostType, index: number) => (
                                                        <div key={index} className="col-lg-20 col-md-4 col-sm-6 col-12">
                                                            <div className="single-shopping-card-one deals-of-day">
                                                                <WeeklySellThreeMain
                                                                    Slug={post.slug}
                                                                    ProductImage={post.image}
                                                                    ProductTitle={post.title}
                                                                    Price={post.price}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>}{activeTab === 'tab4' &&
                                                <div>
                                                    <div className="row g-4">
                                                        {postsSection4.map((post: PostType, index: number) => (
                                                            <div key={index} className="col-lg-20 col-md-4 col-sm-6 col-12">
                                                                <div className="single-shopping-card-one deals-of-day">
                                                                    <WeeklySellThreeMain
                                                                        Slug={post.slug}
                                                                        ProductImage={post.image}
                                                                        ProductTitle={post.title}
                                                                        Price={post.price}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* popular product area end */}
            </>
        </div>
    );
}

export default WeeklySellFour;
