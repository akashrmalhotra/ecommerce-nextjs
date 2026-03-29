'use client';

import React, { useState } from 'react';
import HeaderOne from '@/components/header/HeaderOne';
import ShortService from '@/components/service/ShortService';
import FooterOne from '@/components/footer/FooterOne';
import BlogListMain from './BlogListMain';
import Posts from '@/data/Posts.json';
import Link from 'next/link';

interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
}

export default function BlogGridPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const totalPages = Math.ceil(Posts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = Posts.slice(startIndex, startIndex + postsPerPage);

    return (
        <div className="demo-one">
            {/* Header */}
            <HeaderOne />

            {/* Breadcrumb Area */}
            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link href="/">Home</Link>
                                <i className="fa-regular fa-chevron-right" />
                                <a className="current" href="#">
                                    Blog Lists With Sidebar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="section-seperator bg_light-1">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>

            <div className="blog-sidebar-area rts-section-gap" style={{ transform: "none" }}>
                <div className="container" style={{ transform: "none" }}>
                    <div className="row" style={{ transform: "none" }}>
                        <div className="col-lg-8 order-lg-1 order-md-2 order-sm-2 order-2">
                            {currentPosts.map((post: PostType, index: number) => (
                                <div
                                    key={index}
                                    className="single-blog-main-wrapper-top"
                                >
                                    <div className="single-blog-style-card-border mb--40">
                                        <BlogListMain
                                            Slug={post.slug}
                                            blogImage={post.image}
                                            blogTitle={post.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className="col-lg-4 pl--60 order-lg-2 order-md-1 order-sm-1 order-1 pl_md--10 pl_sm--10 rts-sticky-column-item"
                            style={{
                                position: "relative",
                                overflow: "visible",
                                boxSizing: "border-box",
                                minHeight: 1
                            }}
                        >
                            <div
                                className="theiaStickySidebar"
                                style={{
                                    paddingTop: 0,
                                    paddingBottom: 1,
                                    position: "static",
                                    transform: "none",
                                    top: 0,
                                    left: "1292.66px"
                                }}
                            >
                                <div className="blog-sidebar-single-wized">
                                    <form action="#">
                                        <input type="text" placeholder="Search Here" />
                                        <button>
                                            <i className="fa-regular fa-magnifying-glass" />
                                        </button>
                                    </form>
                                </div>
                                <div className="blog-sidebar-single-wized with-title">
                                    <h4 className="title">Categories</h4>
                                    <div className="category-main-wrapper">
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Baking Material</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Bread and Juice</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Clothing &amp; Beauty</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Fresh Vegetable</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Fresh Seafood</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Milks and Daires</p>
                                        </div>
                                        {/* single category area end */}
                                        {/* single category area start */}
                                        <div className="single-category-area">
                                            <p>Wine &amp; Drinks</p>
                                        </div>
                                        {/* single category area end */}
                                    </div>
                                </div>
                                <div className="blog-sidebar-single-wized with-title">
                                    <h4 className="title">Latest Post</h4>
                                    <div className="latest-post-small-area-wrapper">
                                        {/* single latest post */}
                                        <div className="single-latest-post-area">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="/assets/images/blog/thumb/01.jpg" alt="thumbnail" />
                                            </a>
                                            <div className="inner-content-area">
                                                <div className="icon-top-area">
                                                    <i className="fa-light fa-clock" />
                                                    <span>Sep 25, 2024</span>
                                                </div>
                                                <a href="#">
                                                    <h5 className="title-sm-blog">
                                                        Crowd-Pleasing Meals Made with Our Grocery Staples
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                        {/* single latest post end */}
                                        {/* single latest post */}
                                        <div className="single-latest-post-area">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="/assets/images/blog/thumb/02.jpg" alt="thumbnail" />
                                            </a>
                                            <div className="inner-content-area">
                                                <div className="icon-top-area">
                                                    <i className="fa-light fa-clock" />
                                                    <span>Sep 25, 2024</span>
                                                </div>
                                                <a href="#">
                                                    <h5 className="title-sm-blog">
                                                        Reducing Your Carbon Footprint with Our Sustainable
                                                        Products"
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                        {/* single latest post end */}
                                        {/* single latest post */}
                                        <div className="single-latest-post-area">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="/assets/images/blog/thumb/03.jpg" alt="thumbnail" />
                                            </a>
                                            <div className="inner-content-area">
                                                <div className="icon-top-area">
                                                    <i className="fa-light fa-clock" />
                                                    <span>Sep 25, 2024</span>
                                                </div>
                                                <a href="#">
                                                    <h5 className="title-sm-blog">
                                                        Discovering New Flavors in Our Ethnic Foods Aisle
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                        {/* single latest post end */}
                                    </div>
                                </div>
                                <div className="blog-sidebar-single-wized with-title">
                                    <h4 className="title">Tags</h4>
                                    <div className="tags-area-blog-short-main">
                                        {/* single */}
                                        <button className="single-category">Shampoo</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Butter</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Birthday</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Gifts</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Facial</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Green</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Lotion</button>
                                        {/* single end */}
                                        {/* single */}
                                        <button className="single-category">Scrub</button>
                                        {/* single end */}
                                    </div>
                                </div>
                                <div className="blog-sidebar-single-wized with-title">
                                    <h4 className="title">Instagram Posts</h4>
                                    <div className="instagram-post-main-wrapper">
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/04.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/05.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/06.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/07.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/08.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/09.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/10.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                        {/* single-instagram-post */}
                                        <a href="#">
                                            <div className="single-instagram-post">
                                                <img src="/assets/images/blog/thumb/11.jpg" alt="post" />
                                            </div>
                                        </a>
                                        {/* single-instagram-post end */}
                                    </div>
                                </div>
                                <div className="blog-sidebar-single-wized with-add bg_image">
                                    <div className="add-are-content">
                                        <span className="pre">Weekend Discount</span>
                                        <h5 className="title">
                                            Discover Real organic <br />
                                            <span>Flavors Vegetable</span>
                                        </h5>
                                        <a href="#" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <ShortService />
            <FooterOne />
        </div>
    );
}
