"use client"
import React from 'react';
import Link from 'next/link';

interface BlogGridMainProps {
    Slug: string;
    blogImage: string;
    blogTitle?: string;
}

const BlogGridMain: React.FC<BlogGridMainProps> = ({
    Slug,
    blogImage,
    blogTitle,
}) => {
    return (
        <>
            <Link href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
            </Link>
            <div className="blog-body">
                <div className="top-area">
                    <div className="single-meta">
                        <i className="fa-light fa-clock" />
                        <span>15 Sep, 2023</span>
                    </div>
                    <div className="single-meta">
                        <i className="fa-regular fa-folder" />
                        <span>Modern Fashion</span>
                    </div>
                </div>
                <Link href={`/blog/${Slug}`}>
                    <h4 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h4>
                </Link>
                <Link href={`/blog/${Slug}`} className="shop-now-goshop-btn">
                    <span className="text">Read Details</span>
                    <div className="plus-icon">
                        <i className="fa-sharp fa-regular fa-plus" />
                    </div>
                    <div className="plus-icon">
                        <i className="fa-sharp fa-regular fa-plus" />
                    </div>
                </Link>
            </div>

        </>
    );
};

export default BlogGridMain;
