"use client"
import Link from 'next/link'
import React from 'react'

function BestDiscount() {
    return (
        <div>
            <>
                {/* rts feature product 2 area start */}
                <div className="rts-feature-large-product-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="feature-product-area-large-2 bg_image">
                                    <div className="inner-feature-product-content">
                                        <span>Weekend Discount</span>
                                        <h2 className="title">
                                            Feed The Best Energy <br />
                                            Drink Booster
                                        </h2>
                                        <p>Just don’t miss the special offer this week</p>
                                        <Link
                                            href="/shop"
                                            className="rts-btn btn-primary"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-product-area-large-2 bg_2 bg_image">
                                    <div className="inner-feature-product-content">
                                        <span>Weekend Discount</span>
                                        <h2 className="title">
                                            Our Garden Fresh <br />
                                            Vegetables
                                        </h2>
                                        <p>Just don’t miss the special offer this week</p>
                                        <Link
                                            href="/shop"
                                            className="rts-btn btn-primary"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts feature product 2 area end */}
            </>

        </div>
    )
}

export default BestDiscount