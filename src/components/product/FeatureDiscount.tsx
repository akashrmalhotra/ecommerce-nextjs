"use client"
import Link from 'next/link'
import React from 'react'

function FeatureDiscount() {
    return (
        <div>
            <>
                {/* rts category feature area start */}
                <div className="category-feature-area rts-section-gapTop">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="single-feature-card bg_image one">
                                    <div className="content-area">
                                        <Link href="/shop" className="rts-btn btn-primary">
                                            Weekend Discount
                                        </Link>
                                        <h3 className="title">
                                            Drink Fresh Corn Juice <br />
                                            <span>Good Taste</span>
                                        </h3>
                                        <Link href="/shop" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="single-feature-card bg_image two">
                                    <div className="content-area">
                                        <Link href="/shop" className="rts-btn btn-primary">
                                            Weekend Discount
                                        </Link>
                                        <h3 className="title">
                                            Organic Lemon Flavored
                                            <span>Banana Chips</span>
                                        </h3>
                                        <Link href="/shop" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="single-feature-card bg_image three">
                                    <div className="content-area">
                                        <a href="/shop" className="rts-btn btn-primary">
                                            Weekend Discount
                                        </a>
                                        <h3 className="title">
                                            Nozes Pecanera Brasil
                                            <span>Chocolate Snacks</span>
                                        </h3>
                                        <Link href="/shop" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="single-feature-card bg_image four">
                                    <div className="content-area">
                                        <a href="/shop" className="rts-btn btn-primary">
                                            Weekend Discount
                                        </a>
                                        <h3 className="title">
                                            Strawberry Water Drinks
                                            <span>Flavors Awesome</span>
                                        </h3>
                                        <Link href="/shop" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts category feature area end */}
            </>

        </div>
    )
}

export default FeatureDiscount