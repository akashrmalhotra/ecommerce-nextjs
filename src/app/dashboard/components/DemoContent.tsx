import React from 'react'
import ApexChartOne from "./ApexChartOne";
import ApexChartTwo from "./ApexChartTwo";
import TopProductCountries from "./TopProductCountries";
import OtherBestSeller from "./OtherBestSeller";

function DemoContent() {
    return (
        <div>
            <div className='body-root-inner'>
                <div className='transection'>
                    <div className="title-right-actioin-btn-wrapper-product-list">
                        <h3 className="title">Overview</h3>
                        <div className="button-wrapper">
                            <div className="single-select">
                                <select className="nice-select">
                                    <option>Week</option>
                                    <option>Month</option>
                                    <option>Year</option>
                                    <option>6 Month</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row g-5">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="single-over-fiew-card">
                            <span className="top-main">Revenue</span>
                            <div className="bottom">
                                <h2 className="title">₹1280</h2>
                                <div className="right-primary">
                                    <div className="increase">
                                        <i className="fa-light fa-arrow-up" />
                                        <span>50.8%</span>
                                    </div>
                                    <img src="/assets/images-dashboard/avatar/04.png" alt="orrdr" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="single-over-fiew-card">
                            <span className="top-main">Revenue</span>
                            <div className="bottom">
                                <h2 className="title">158</h2>
                                <div className="right-primary">
                                    <div className="increase">
                                        <i className="fa-light fa-arrow-up" />
                                        <span>50.8%</span>
                                    </div>
                                    <img src="/assets/images-dashboard/avatar/05.png" alt="orrdr" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="single-over-fiew-card">
                            <span className="top-main">Revenue</span>
                            <div className="bottom">
                                <h2 className="title">358</h2>
                                <div className="right-primary">
                                    <div className="increase">
                                        <i className="fa-light fa-arrow-up" />
                                        <span>50.8%</span>
                                    </div>
                                    <img src="/assets/images-dashboard/avatar/06.png" alt="orrdr" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="single-over-fiew-card">
                            <span className="top-main">Revenue</span>
                            <div className="bottom">
                                <h2 className="title">₹89k</h2>
                                <div className="right-primary">
                                    <div className="increase">
                                        <i className="fa-light fa-arrow-up" />
                                        <span>50.8%</span>
                                    </div>
                                    <img src="/assets/images-dashboard/avatar/07.png" alt="orrdr" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt--10 g-5'>
                    <ApexChartOne />
                    <ApexChartTwo />
                    <TopProductCountries />
                    <OtherBestSeller />
                </div>

                <div className="footer-copyright">
                    <div className="left">
                        <p>Copyright © 2025 All Right Reserved.</p>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default DemoContent