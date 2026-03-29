import Link from 'next/link'
import React from 'react'

function BannerFour() {
    return (
        <div>
            <>
                {/* rts banenr area start */}
                <div className="rts-banner-area rts-section-gap banner-bg_4 bg_image  d-flex align-items-center">
                    <div className="transparent-person">
                        <img src="/assets/images/banner/transparent/01.png" alt="banenr" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* banner inner content area start */}
                                <div className="banner-area-start-4">
                                    <span className="pre">Get up to -30% off on your purchase</span>
                                    <h1 className="title">
                                        Buy From Different Kind <br />
                                        of Grocery Store
                                    </h1>
                                    <p>Don't miss these opportunities...</p>
                                    <div className="rts-btn-banner-area">
                                        <Link href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">Shop Now</div>
                                            <div className="arrow-icon">
                                                <i className="fa-light fa-arrow-right" />
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-light fa-arrow-right" />
                                            </div>
                                        </Link>
                                        <div className="price-area">
                                            <span>from</span>
                                            <h3 className="title">$80.99</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* banner inner content area end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts banenr area ends */}
            </>

        </div>
    )
}

export default BannerFour