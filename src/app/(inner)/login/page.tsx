
import HeaderOne from "@/components/header/HeaderOne";
import AboutBanner from "@/components/banner/AboutBanner";
import CounterOne from "@/components/counterup/CounterOne";
import AboutOne from "@/components/about/AboutOne";
import Team from "@/components/about/Team";
import ServiceOne from "@/components/service/ServiceOne";
import TestimonilsOne from "@/components/testimonials/TestimonilsOne";
import ShortService from "@/components/service/ShortService";

import FooterOne from "@/components/footer/FooterOne";
import Link from "next/link";

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
            <a className="current" href="register.html">
              Log In
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
  {/* rts register area start */}
  <div className="rts-register-area rts-section-gap bg_light-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="registration-wrapper-1">
            <div className="logo-area mb--0">
              <img
                className="mb--10"
                src="assets/images/logo/fav.png"
                alt="logo"
              />
            </div>
            <h3 className="title">Login Into Your Account</h3>
            <form action="#" className="registration-form">
              <div className="input-wrapper">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password*</label>
                <input type="password" id="password" />
              </div>
              <button className="rts-btn btn-primary">Login Account</button>
              <div className="another-way-to-registration">
                <div className="registradion-top-text">
                  <span>Or Register With</span>
                </div>
                <div className="login-with-brand">
                  <a href="#" className="single">
                    <img src="assets/images/form/google.svg" alt="login" />
                  </a>
                  <a href="#" className="single">
                    <img src="assets/images/form/facebook.svg" alt="login" />
                  </a>
                </div>
                <p>
                  Don't have Acocut? <Link href="/register">Registration</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts register area end */}
</>




            <ShortService/>
            <FooterOne />

        </div>
    );
}
