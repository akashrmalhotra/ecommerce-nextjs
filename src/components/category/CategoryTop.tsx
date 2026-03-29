'use client';
import Link from "next/link";

 // optional, for client-side code

const MyComponent = () => (
    <div>

        <div className="category-feature-area rts-section-gap">
            <div className="container-2">
                <div className="row g-24">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="single-feature-card ssthree style-three bg_image one">
                            <div className="content-area">
                                <Link href="shop-grid-top-filter.html" className="rts-btn btn-primary">
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
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="single-feature-card ssthree style-three bg_image two">
                            <div className="content-area">
                                <Link href="shop-grid-top-filter.html" className="rts-btn btn-primary">
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
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="single-feature-card ssthree style-three bg_image three">
                            <div className="content-area">
                                <Link href="shop-grid-top-filter.html" className="rts-btn btn-primary">
                                    Weekend Discount
                                </Link>
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
                </div>
            </div>
        </div>

    </div>
);

export default MyComponent;
