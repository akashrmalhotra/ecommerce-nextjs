"use client";
import React from 'react';
import BlogTwoMain from './BlogTwoMain';
import Posts from '@/data/Posts.json';

interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
}


function BlogTwo() {
    const selectedPosts = Posts.slice(11, 14);
    return (
        <>
            {/* rts blog area start */}
            <div className="blog-area-start rts-section-gap">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--0">Latest Blog Post Insights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cover-card-main-over">
                                <div className="row g-4">
                                    {selectedPosts.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="col-lg-4 col-md-6 col-sm-12"
                                        >
                                            <div className="single-blog-area-start">
                                                <BlogTwoMain
                                                    Slug={post.slug}
                                                    blogImage={post.image}
                                                    blogTitle={post.title}
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
            {/* rts blog area end */}
        </>

    )
}

export default BlogTwo