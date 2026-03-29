"use client"
import { useState } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";

import FooterOne from "@/components/footer/FooterOne";
import Link from 'next/link';

export default function Home() {

    const [activeTab, setActiveTab] = useState('tab1');



    return (
        <div>
            <HeaderOne />


            <>
                <div className="rts-navigation-area-breadcrumb bg_light-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navigator-breadcrumb-wrapper">
                                    <Link href="/">Home</Link>
                                    <i className="fa-regular fa-chevron-right" />
                                    <a className="current" href="/shop">
                                        Vendor Grid
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-seperator bg_light-1">
                    <div className="container">
                        <hr className="section-seperator" />
                    </div>
                </div>

                <div className="vendor-search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="vendor-search-area-wrapper">
                                    <h1 className="title">Vendors List</h1>
                                    <form action="#" className="search-vendor-form">
                                        <input
                                            type="text"
                                            placeholder="Search vendors (by name or ID)..."
                                        />
                                        <Link href="/shop" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">Search</div>
                                            <div className="arrow-icon">
                                                <i className="fa-light fa-magnifying-glass" />
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-light fa-magnifying-glass" />
                                            </div>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vendor filter area start */}
                <div className="vendor-search-area rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="filter-search-area-top-between filter-select-area">
                                    <div className="top-filter">
                                        <span>Showing 1–20 of 57 results</span>
                                        <div className="right-end">
                                            <span>Sort: Short By Latest</span>
                                            <div className="button-tab-area">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            onClick={() => setActiveTab('tab2')}
                                                            className={`nav-link single-button ${activeTab === 'tab2' ? 'active' : ''}`}
                                                        >
                                                            <svg
                                                                width={16}
                                                                height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    x="0.5"
                                                                    y="0.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3B28"
                                                                />
                                                                <rect
                                                                    x="0.5"
                                                                    y="9.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3B28"
                                                                />
                                                                <rect
                                                                    x="9.5"
                                                                    y="0.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3B28"
                                                                />
                                                                <rect
                                                                    x="9.5"
                                                                    y="9.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3B28"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            onClick={() => setActiveTab('tab1')}
                                                            className={`single-button nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                                        >
                                                            <svg
                                                                width={16}
                                                                height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    x="0.5"
                                                                    y="0.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3C28"
                                                                />
                                                                <rect
                                                                    x="0.5"
                                                                    y="9.5"
                                                                    width={6}
                                                                    height={6}
                                                                    rx="1.5"
                                                                    stroke="#2C3C28"
                                                                />
                                                                <rect
                                                                    x={9}
                                                                    y={3}
                                                                    width={7}
                                                                    height={1}
                                                                    fill="#2C3C28"
                                                                />
                                                                <rect
                                                                    x={9}
                                                                    y={12}
                                                                    width={7}
                                                                    height={1}
                                                                    fill="#2C3C28"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content mt--20" id="myTabContent">
                                    {activeTab === 'tab2' &&
                                        <div>
                                            <div className="row g-4">
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/01.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Fresh Iuice Bar <span className="closed">Closed</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <a
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/02.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Food Character <span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/03.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Food Forulard <span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/04.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Authentic Grocery <span className="closed">Closed</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/05.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Fresh Food<span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/06.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Food Forulard <span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/07.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Food Forulard <span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/08.svg" alt="vendor" />
                                                        </div>
                                                        <h3 className="title">
                                                            Botanic Natural Product<span className="open">open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <span>4.50 out of 5</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>
                                                                530 Post Ct El Dorado Hills California ,United States
                                                            </p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>+1 (511) 934-8170</p>
                                                        </div>
                                                        <Link
                                                            href="/shop"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {activeTab === 'tab1' &&
                                        <div>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/01.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Fresh Iuice Bar <span className="closed">Closed</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/02.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Food Character <span className="open">Open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/03.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Food Forulard <span className="open">Open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/04.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Authentic Grocery <span className="closed">Closed</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/05.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Fresh Food<span className="open">Open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/06.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Food Forulard <span className="open">Open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/07.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Food Forulard <span className="open">Open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src="assets/images/vendor/08.svg" alt="vendor" />
                                                        </div>
                                                        <div className="inner">
                                                            <h3 className="title">
                                                                Botanic Natural Product
                                                                <span className="open">open</span>
                                                            </h3>
                                                            <div className="stars-area">
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <span>4.50 out of 5</span>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-regular fa-location-dot" />
                                                                <p>
                                                                    530 Post Ct El Dorado Hills California ,United States
                                                                </p>
                                                            </div>
                                                            <div className="location">
                                                                <i className="fa-solid fa-phone-volume" />
                                                                <p>+1 (511) 934-8170</p>
                                                            </div>
                                                            <Link
                                                                href="/shop"
                                                                className="rts-btn btn-primary radious-sm with-icon"
                                                            >
                                                                <div className="btn-text">Visit Store</div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                                <div className="arrow-icon">
                                                                    <i className="fa-light fa-arrow-right" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vendor filter area end */}
            </>
            <ShortService />
            <FooterOne />

        </div>
    );
}
