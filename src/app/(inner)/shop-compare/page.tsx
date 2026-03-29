"use client";

import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import CompareElements from "./CompareElements";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <HeaderOne />

            <div className="rts-navigation-area-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link href="/">Home</Link>
                                <i className="fa-regular fa-chevron-right" />
                                <a className="current" href="#">
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-seperator">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>

            <div className="compare-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="modal-compare-area-start">
                                <div className="compare-title-area">
                                    <h1 className="title">Products Compare</h1>
                                </div>
                                <div className="modal-dialogs">
                                    <div className="modal-content">
                                        <CompareElements />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </div>
    );
}
