"use client"
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import CartMain from "./CartMain";
import FooterOne from "@/components/footer/FooterOne";


export default function Home() {

    return (
        <div className="demo-one">
            <HeaderOne />
            <>
                <div className="rts-navigation-area-breadcrumb bg_light-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navigator-breadcrumb-wrapper">
                                    <a href="index.html">Home</a>
                                    <i className="fa-regular fa-chevron-right" />
                                    <a className="current" href="index.html">
                                        My Cart
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
            </>


            <CartMain />
            <ShortService />
            <FooterOne />
        </div>
    );
}
