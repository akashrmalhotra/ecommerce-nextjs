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

            <a href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
            </a>
            <div className="inner-content-body">
                <div className="tag-area">
                    <div className="single">
                        <i className="fa-light fa-clock" />
                        <span>15 Sep, 2023</span>
                    </div>
                    <div className="single">
                        <i className="fa-light fa-folder" />
                        <span>Modern Fashion</span>
                    </div>
                </div>
                <a className="title-main" href={`/blog/${Slug}`}>
                    <h3 className="title animated fadeIn">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h3>
                </a>
                <p className="disc mb--20">
                    Bibendum ac non dis aliquet rhoncus litora dui ante, ornare
                    faucibus torquent per parturient enim sem, nunc condimentum
                    luctus tortor justo pharetra placerat. Lobortis quis odio neque
                    varius donec egestas turpis, nisi ut inceptos etiam placerat
                    habitasse nisl, dignissim fusce habitant libero accumsan quam.
                </p>
                <div className="button-area">
                    <a
                        href={`/blog/${Slug}`}
                        className="rts-btn btn-primary radious-sm with-icon"
                    >
                        <div className="btn-text">Read Details</div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
};

export default BlogGridMain;
