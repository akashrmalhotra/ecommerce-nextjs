"use client"
import React, { useState } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {

    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Order ID:', orderId);
        console.log('Billing Email:', email);
    };

    return (
        <div className="demo-one">
            <HeaderOne />
            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <a href="index.html">Home</a>
                                <i className="fa-regular fa-chevron-right" />
                                <a className="current" href="index.html">
                                    Trac Order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="track-order-area rts-section-gap">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tracing-order-account">
                                <h2 className="title">Orders tracking</h2>
                                <p>
                                    To keep up with the status of your order, kindly input your OrderID in the designated box below and click the "Track" button. This unique identifier can be found on your receipt as well as in the confirmation email that was sent to you.
                                </p>
                                <form className="order-tracking" onSubmit={handleSubmit}>
                                    <div className="single-input">
                                        <label htmlFor="order-id">Order Id</label>
                                        <input
                                            id="order-id"
                                            type="text"
                                            placeholder="Found in your order confirmation email"
                                            required
                                            autoComplete="off"
                                            value={orderId}
                                            onChange={(e) => setOrderId(e.target.value)}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="billing-email">Billing email</label>
                                        <input
                                            id="billing-email"
                                            type="email"
                                            placeholder="Email you used during checkout"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="rts-btn btn-primary">
                                        Track
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShortService />
            <FooterOne />
        </div>
    );
}
