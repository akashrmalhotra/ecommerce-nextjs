"use client";
import React from 'react';
import BlogOneMain from './BlogOneMain';
import Posts from '@/data/Posts.json';

interface PostType {
    category?: string;
    slug: string;
    image: string;
    title?: string;
    author?: string;
    publishedDate?: string;
}

function BlogOne() {
    // Slice posts 11 to 15 (index 10 to 14)
    const selectedPosts = Posts.slice(11, 15);

    return (
        <div>
            {/* rts top tranding product area */}
            <div className="rts-blog-area rts-section-gap bg_gradient-tranding-items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--0">Latest Blog Post Insights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cover-card-main-over-1">
                                <div className="row g-4">
                                    {selectedPosts.map((post: PostType, index: number) => (
                                        <div
                                            key={index}
                                            className="col-lg-3 col-md-6 col-sm-12"
                                        >
                                            <div className="single-blog-area-start">
                                                <BlogOneMain
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
            {/* rts top tranding product area end */}
        </div>
    );
}

export default BlogOne;
