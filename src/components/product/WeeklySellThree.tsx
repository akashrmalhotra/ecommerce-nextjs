'use client';
import { useState } from 'react';
import WeeklySellThreeMain from "@/components/product-main/WeeklySellThreeMain";
import Product from '@/data/Product.json';
import React from 'react';

interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
    price?: string;
}

const WeeklyBestSelling: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');
    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const handleClose = () => setActiveModal(null);

    const postIndicesSection1 = [5, 6, 4, 7, 8, 5, 6, 5, 8, 9];
    const postIndicesSection2 = [7, 8, 5, 6, 5, 8, 9, 18, 12, 2];
    const postIndicesSection3 = [5, 6, 8, 7, 3, 2, 1, 5, 8, 9];
    const postIndicesSection4 = [1, 2, 6, 7, 10, 2, 1, 5, 8, 11];

    const getPostsByIndices = (indices: number[]): PostType[] =>
        indices.map(index => Product[index]).filter(Boolean);

    const postsSection1 = getPostsByIndices(postIndicesSection1);
    const postsSection2 = getPostsByIndices(postIndicesSection2);
    const postsSection3 = getPostsByIndices(postIndicesSection3);
    const postsSection4 = getPostsByIndices(postIndicesSection4);

    return (
        <div>
            <div className="bg_light-1 rts-section-gapBottom">
                <div className="container-2 single-new-offer-area-border-weekly-selstyle">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between mb--15">
                                <h2 className="title-left">Don't miss this week's sales</h2>
                                <ul className="nav nav-tabs best-selling-grocery" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActiveTab('tab1')}
                                            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}>
                                            Frozen Foods
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActiveTab('tab2')}
                                            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}>
                                            Diet Foods
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActiveTab('tab3')}
                                            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}>
                                            Healthy Foods
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActiveTab('tab4')}
                                            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}>
                                            Vitamin Items
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            {activeTab === 'tab1' && (
                                <div>
                                    <div className="row g-4 mt--0">
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
                                </div>
                            )}

                            {activeTab === 'tab2' && (
                                <div>
                                    <div className="row g-4 mt--0">
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
                                </div>
                            )}

                            {activeTab === 'tab3' && (
                                <div>
                                    <div className="row g-4 mt--0">
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
                                </div>
                            )}

                            {activeTab === 'tab4' && (
                                <div>
                                    <div className="row g-4 mt--0">
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
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
        </div>
    );
};

export default WeeklyBestSelling;
