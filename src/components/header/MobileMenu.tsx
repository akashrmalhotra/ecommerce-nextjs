'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [openThirdLevelKey, setOpenThirdLevelKey] = useState<string | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenuIndex(prev => (prev === index ? null : index));
    };

    const toggleThirdMenu = (key: string) => {
        setOpenThirdLevelKey(prev => (prev === key ? null : key));
    };

    return (
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">

                {/* Home */}
                <li className={`has-droupdown ${openMenuIndex === 0 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(0)}>Home</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 0 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/">Home One</Link></li>
                        <li><Link className="mobile-menu-link" href="/index-two">Home Two</Link></li>
                        <li><Link className="mobile-menu-link" href="/index-three">Home Three</Link></li>
                        <li><Link className="mobile-menu-link" href="/index-four">Home Four</Link></li>
                        <li><Link className="mobile-menu-link" href="/index-five">Home Five</Link></li>
                    </ul>
                </li>

                {/* About */}
                <li><Link className="main" href="/about">About</Link></li>

                {/* Pages */}
                <li className={`has-droupdown ${openMenuIndex === 1 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(1)}>Pages</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 1 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/about">About</Link></li>
                        <li><Link className="mobile-menu-link" href="/faq">Faq's</Link></li>
                        <li><Link className="mobile-menu-link" href="/invoice">Invoice</Link></li>
                        <li><Link className="mobile-menu-link" href="/contact">Contact</Link></li>
                        <li><Link className="mobile-menu-link" href="/register">Register</Link></li>
                        <li><Link className="mobile-menu-link" href="/login">Login</Link></li>
                        <li><Link className="mobile-menu-link" href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link className="mobile-menu-link" href="/cookies-policy">Cookies Policy</Link></li>
                        <li><Link className="mobile-menu-link" href="/terms-condition">Terms Condition</Link></li>
                        <li><Link className="mobile-menu-link" href="/404">Error Page</Link></li>
                    </ul>
                </li>

                {/* Shop */}
                <li className={`has-droupdown ${openMenuIndex === 2 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(2)}>Shop</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 2 ? 'mm-show' : ''}`}>

                        {/* Shop Layout */}
                        <li className="has-droupdown third-lvl">
                            <a href="#" className="main" onClick={() => toggleThirdMenu('shopLayout')}>Shop Layout</a>
                            <ul className={`submenu-third-lvl mm-collapse ${openThirdLevelKey === 'shopLayout' ? 'mm-show' : ''}`}>
                                <li><Link href="/shop-grid-sidebar">Shop Grid Sidebar</Link></li>
                                <li><Link href="/shop-list-sidebar">Shop List Sidebar</Link></li>
                                <li><Link href="/shop-grid-top-filter">Shop Grid Top Filter</Link></li>
                                <li><Link href="/shop-list-top-filter">Shop List Top Filter</Link></li>
                            </ul>
                        </li>

                        {/* Shop Details */}
                        <li className="has-droupdown third-lvl">
                            <a href="#" className="main" onClick={() => toggleThirdMenu('shopDetails')}>Shop Details</a>
                            <ul className={`submenu-third-lvl mm-collapse ${openThirdLevelKey === 'shopDetails' ? 'mm-show' : ''}`}>
                                <li><Link href="/shop-details">Shop Details</Link></li>
                                <li><Link href="/shop-details-2">Shop Details 2</Link></li>
                                <li><Link href="/shop-grid-top-filter">Shop Grid Top Filter</Link></li>
                                <li><Link href="/shop-list-top-filter">Shop List Top Filter</Link></li>
                            </ul>
                        </li>

                        {/* Product Feature */}
                        <li className="has-droupdown third-lvl">
                            <a href="#" className="main" onClick={() => toggleThirdMenu('productFeature')}>Product Feature</a>
                            <ul className={`submenu-third-lvl mm-collapse ${openThirdLevelKey === 'productFeature' ? 'mm-show' : ''}`}>
                                <li><Link href="/shop-details-variable">Shop Details Variable</Link></li>
                                <li><Link href="/shop-details-affiliats">Shop Details Affiliats</Link></li>
                                <li><Link href="/shop-details-group">Shop Details Group</Link></li>
                                <li><Link href="/shop-compare">Shop Compare</Link></li>
                            </ul>
                        </li>

                        {/* Shop Others */}
                        <li className="has-droupdown third-lvl">
                            <a href="#" className="main" onClick={() => toggleThirdMenu('shopOthers')}>Shop Others</a>
                            <ul className={`submenu-third-lvl mm-collapse ${openThirdLevelKey === 'shopOthers' ? 'mm-show' : ''}`}>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/checkout">Checkout</Link></li>
                                <li><Link href="/trackorder">Trackorder</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Blog */}
                <li className={`has-droupdown ${openMenuIndex === 3 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(3)}>Blog</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 3 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/blog">Blog</Link></li>
                        <li><Link className="mobile-menu-link" href="/blog-list-left-sidebar">Blog Left Sidebar</Link></li>
                        <li><Link className="mobile-menu-link" href="/blog-list-right-sidebar">Blog List Right Sidebar</Link></li>
                    </ul>
                </li>

                {/* Contact */}
                <li><Link className="main" href="/contact">Contact Us</Link></li>

            </ul>
        </nav>
    );
};

export default MobileMenu;
