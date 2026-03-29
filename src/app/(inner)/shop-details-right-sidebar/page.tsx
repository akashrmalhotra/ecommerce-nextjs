"use client"
import { useState } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import RelatedProduct from "@/components/product/RelatedProduct";
import FooterOne from "@/components/footer/FooterOne";
import Product from "@/data/Product.json";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Home() {







    // tab
    const [activeTab, setActiveTab] = useState<string>('tab1');


    // modal
    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const handleClose = () => setActiveModal(null);

    const [activeImage, setActiveImage] = useState(`/assets/images/grocery/01.jpg`);
    const thumbnails = [
        {
            id: 'one',
            src: `/assets/images/grocery/01.jpg`,
            alt: 'alamin bali',
        },
        {
            id: 'two',
            src: '/assets/images/shop/02.jpg',
            alt: 'product-thumb-filter',
        },
        {
            id: 'three',
            src: '/assets/images/shop/03.jpg',
            alt: 'product-thumb-filter',
        },
        {
            id: 'four',
            src: '/assets/images/shop/04.jpg',
            alt: 'product-thumb-filter',
        },
        {
            id: 'five',
            src: '/assets/images/shop/05.jpg',
            alt: 'product-thumb-filter',
        },
    ];



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
                                    <a className="current" href="#">
                                        Vendor Details
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

            <div className="rts-chop-details-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="shopdetails-style-1-wrapper">
                        <div className="row g-5">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="product-details-popup-wrapper in-shopdetails">
                                    <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                                        <div className="product-details-popup">
                                            <div className="details-product-area">
                                                <div className="product-thumb-area">
                                                    <div className="cursor" />
                                                    <div className="thumb-wrapper one filterd-items figure">
                                                        <div className="product-thumb">
                                                            <img src={activeImage} alt='image' />
                                                        </div>
                                                    </div>
                                                    <div className="product-thumb-filter-group">
                                                        {thumbnails.map((thumb, index) => (
                                                            <div
                                                                key={thumb.id}
                                                                className={`thumb-filter filter-btn ${activeImage === thumb.src ? 'active' : ''}`}
                                                                data-show={`.${thumb.id}`}
                                                                onClick={() => setActiveImage(thumb.src)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <img src={thumb.src} alt={thumb.alt} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="contents">
                                                    <div className="product-status">
                                                        <span className="product-catagory">Dress</span>
                                                        <div className="rating-stars-group">
                                                            <div className="rating-star">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-star">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-star">
                                                                <i className="fas fa-star-half-alt" />
                                                            </div>
                                                            <span>10 Reviews</span>
                                                        </div>
                                                    </div>
                                                    <h2 className="product-title">
                                                        Priyoshop has brought to you the Hijab 3 Pieces Combo Pack
                                                    </h2>
                                                    <p className="mt--20 mb--20">
                                                        Priyoshop has brought to you the Hijab 3 Pieces Combo Pack
                                                        PS23. It is a completely modern design and you feel
                                                        comfortable to put on this hijab. Buy it at the best
                                                        price.
                                                    </p>
                                                    <span
                                                        className="product-price mb--15 d-block"
                                                        style={{ color: "#DC2626", fontWeight: 600 }}
                                                    >
                                                        {" "}
                                                        $35
                                                        <span className="old-price ml--15">$69.35</span>
                                                    </span>
                                                    <div className="product-bottom-action">
                                                        <a
                                                            href="#"
                                                            className="rts-btn btn-primary radious-sm with-icon"
                                                        >
                                                            <div className="btn-text">Add To Cart</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping" />
                                                            </div>
                                                        </a>
                                                        {/* <a href="javascript:void(0);" class="rts-btn btn-primary ml--20"><i class="fa-light fa-heart"></i></a> */}
                                                    </div>
                                                    <div className="product-uniques">
                                                        <span className="sku product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                SKU:{" "}
                                                            </span>{" "}
                                                            BO1D0MX8SJ
                                                        </span>
                                                        <span className="catagorys product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                Categories:{" "}
                                                            </span>{" "}
                                                            T-Shirts, Tops, Mens
                                                        </span>
                                                        <span className="tags product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                Tags:{" "}
                                                            </span>{" "}
                                                            fashion, t-shirts, Men
                                                        </span>
                                                        <span className="tags product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                LIFE::{" "}
                                                            </span>{" "}
                                                            6 Months
                                                        </span>
                                                        <span className="tags product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                Type:{" "}
                                                            </span>{" "}
                                                            original
                                                        </span>
                                                        <span className="tags product-unipue mb--10">
                                                            <span style={{ fontWeight: 400, marginRight: 10 }}>
                                                                Category:{" "}
                                                            </span>{" "}
                                                            Beverages, Dairy &amp; Bakery
                                                        </span>
                                                    </div>
                                                    <div className="share-option-shop-details">
                                                        <div className="single-share-option">
                                                            <div className="icon">
                                                                <i className="fa-regular fa-heart" />
                                                            </div>
                                                            <span>Add To Wishlist</span>
                                                        </div>
                                                        <div className="single-share-option">
                                                            <div className="icon">
                                                                <i className="fa-solid fa-share" />
                                                            </div>
                                                            <span>Share On social</span>
                                                        </div>
                                                        <div className="single-share-option">
                                                            <div className="icon">
                                                                <i className="fa-light fa-code-compare" />
                                                            </div>
                                                            <span>Compare</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-discription-tab-shop mt--50">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab1')}
                                                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}>
                                                Product Details
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab2')}
                                                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}>
                                                Additional Information
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                onClick={() => setActiveTab('tab3')}
                                                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}>
                                                Customer Reviews (01)
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        {activeTab === 'tab1' &&
                                            <div>
                                                <div className="single-tab-content-shop-details">
                                                    <p className="disc">
                                                        Uninhibited carnally hired played in whimpered dear gorilla
                                                        koala depending and much yikes off far quetzal goodness and
                                                        from for grimaced goodness unaccountably and meadowlark near
                                                        unblushingly crucial scallop tightly neurotic hungrily some
                                                        and dear furiously this apart.
                                                    </p>
                                                    <div className="details-row-2">
                                                        <div className="left-area">
                                                            <img src="/assets/images/shop/06.jpg" alt="shop" />
                                                        </div>
                                                        <div className="right">
                                                            <h4 className="title">
                                                                All Natural Italian-Style Chicken Meatballs
                                                            </h4>
                                                            <p className="mb--25">
                                                                Pellentesque habitant morbi tristique senectus et netus
                                                                et malesuada fames ac turpis egestas Vestibulum tortor
                                                                quam, feugiat vitae, ultricies eget, tempor sit amet,
                                                                ante. ibero sit amet quam egestas semperAenean ultricies
                                                                mi vitae est Mauris placerat eleifend.
                                                            </p>
                                                            <ul className="bottom-ul">
                                                                <li>
                                                                    Elementum sociis rhoncus aptent auctor urna justo
                                                                </li>
                                                                <li>
                                                                    Habitasse venenatis gravida nisl, sollicitudin posuere
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>}
                                        {activeTab === 'tab2' &&
                                            <div>
                                                <div className="single-tab-content-shop-details">
                                                    <p className="disc">
                                                        Uninhibited carnally hired played in whimpered dear gorilla
                                                        koala depending and much yikes off far quetzal goodness and
                                                        from for grimaced goodness unaccountably and meadowlark near
                                                        unblushingly crucial scallop tightly neurotic hungrily some
                                                        and dear furiously this apart.
                                                    </p>
                                                    <div className="table-responsive table-shop-details-pd">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Kitchen Fade Defy</th>
                                                                    <th>5KG</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>PRAN Full Cream Milk Powder</td>
                                                                    <td>3KG</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Net weight</td>
                                                                    <td>8KG</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Brand</td>
                                                                    <td>Reactheme</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Item code</td>
                                                                    <td>4000000005</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Product type</td>
                                                                    <td>Powder milk</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <p className="cansellation mt--20">
                                                        <span> Return/cancellation:</span> No change will be
                                                        applicable which are already delivered to customer. If
                                                        product quality or quantity problem found then customer can
                                                        return/cancel their order on delivery time with presence of
                                                        delivery person.
                                                    </p>
                                                    <p className="note">
                                                        <span>Note:</span> Product delivery duration may vary due to
                                                        product availability in stock.
                                                    </p>
                                                </div>
                                            </div>}

                                        {activeTab === 'tab3' &&
                                            <div>
                                                <div className="single-tab-content-shop-details">
                                                    <div className="product-details-review-product-style">
                                                        <div className="average-stars-area-left">
                                                            <div className="top-stars-wrapper">
                                                                <h4 className="review">5.0</h4>
                                                                <div className="rating-disc">
                                                                    <span>Average Rating</span>
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <span>(1 Reviews &amp; 0 Ratings)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="average-stars-area">
                                                                <h4 className="average">66.7%</h4>
                                                                <span>Recommended (2 of 3)</span>
                                                            </div>
                                                            <div className="review-charts-details">
                                                                <div className="single-review">
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                    </div>
                                                                    <div className="single-progress-area-incard">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-bar wow fadeInLeft"
                                                                                role="progressbar"
                                                                                style={{ width: "80%" }}
                                                                                aria-valuenow={25}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="pac">100%</span>
                                                                </div>
                                                                <div className="single-review">
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                    </div>
                                                                    <div className="single-progress-area-incard">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-bar wow fadeInLeft"
                                                                                role="progressbar"
                                                                                style={{ width: "80%" }}
                                                                                aria-valuenow={25}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="pac">80%</span>
                                                                </div>
                                                                <div className="single-review">
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                    </div>
                                                                    <div className="single-progress-area-incard">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-bar wow fadeInLeft"
                                                                                role="progressbar"
                                                                                style={{ width: "60%" }}
                                                                                aria-valuenow={25}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="pac">60%</span>
                                                                </div>
                                                                <div className="single-review">
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                    </div>
                                                                    <div className="single-progress-area-incard">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-bar wow fadeInLeft"
                                                                                role="progressbar"
                                                                                style={{ width: "80%" }}
                                                                                aria-valuenow={25}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="pac">40%</span>
                                                                </div>
                                                                <div className="single-review">
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                        <i className="fa-regular fa-star" />
                                                                    </div>
                                                                    <div className="single-progress-area-incard">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-bar wow fadeInLeft"
                                                                                role="progressbar"
                                                                                style={{ width: "80%" }}
                                                                                aria-valuenow={25}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="pac">30%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="submit-review-area">
                                                            <form action="#" className="submit-review-area">
                                                                <h5 className="title">Submit Your Review</h5>
                                                                <div className="your-rating">
                                                                    <span>Your Rating Of This Product :</span>
                                                                    <div className="stars">
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                        <i className="fa-solid fa-star" />
                                                                    </div>
                                                                </div>
                                                                <div className="half-input-wrapper">
                                                                    <div className="half-input">
                                                                        <input type="text" placeholder="Your Name*" />
                                                                    </div>
                                                                    <div className="half-input">
                                                                        <input type="text" placeholder="Your Email *" />
                                                                    </div>
                                                                </div>
                                                                <textarea
                                                                    name="#"
                                                                    id="#"
                                                                    placeholder="Write Your Review"
                                                                    defaultValue={""}
                                                                />
                                                                <button className="rts-btn btn-primary">
                                                                    SUBMIT REVIEW
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
                                <div className="sidebar-filter-main shop-single-area-filter">
                                    <div className="single-filter-box">
                                        <h5 className="title">Widget Price Filter</h5>
                                        <div className="filterbox-body">
                                            <form action="#" className="price-input-area">
                                                <div className="half-input-wrapper">
                                                    <div className="single">
                                                        <label htmlFor="min">Min price</label>
                                                        <input id="min" type="text" defaultValue={0} />
                                                    </div>
                                                    <div className="single">
                                                        <label htmlFor="max">Max price</label>
                                                        <input id="max" type="text" defaultValue={150} />
                                                    </div>
                                                </div>
                                                <input type="range" className="range" />
                                                <div className="filter-value-min-max">
                                                    <span>Price: $10 — $90</span>
                                                    <button className="rts-btn btn-primary">Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-filter-box">
                                        <h5 className="title">Product Categories</h5>
                                        <div className="filterbox-body">
                                            <div className="category-wrapper">
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat1" type="checkbox" />
                                                    <label htmlFor="cat1">Beverages</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat2" type="checkbox" />
                                                    <label htmlFor="cat2">Biscuits &amp; Snacks</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat3" type="checkbox" />
                                                    <label htmlFor="cat3">Breads &amp; Bakery</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat4" type="checkbox" />
                                                    <label htmlFor="cat4">Breakfast &amp; Dairy</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category with-more">
                                                    <input id="cat5" type="checkbox" />
                                                    <label htmlFor="cat5">Frozen Foods</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat6" type="checkbox" />
                                                    <label htmlFor="cat6">Fruits &amp; Vegetables</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category with-more">
                                                    <input id="cat7" type="checkbox" />
                                                    <label htmlFor="cat7">Grocery &amp; Staples</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat8" type="checkbox" />
                                                    <label htmlFor="cat8">Household Needs</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat10" type="checkbox" />
                                                    <label htmlFor="cat10">Meats &amp; Seafood</label>
                                                </div>
                                                {/* single category end */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-filter-box">
                                        <h5 className="title">Product Status</h5>
                                        <div className="filterbox-body">
                                            <div className="category-wrapper">
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat11" type="checkbox" />
                                                    <label htmlFor="cat11">In Stock</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat12" type="checkbox" />
                                                    <label htmlFor="cat12">On Sale</label>
                                                </div>
                                                {/* single category end */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-filter-box">
                                        <h5 className="title">Select Brands</h5>
                                        <div className="filterbox-body">
                                            <div className="category-wrapper">
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat13" type="checkbox" />
                                                    <label htmlFor="cat13">Frito Lay</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat14" type="checkbox" />
                                                    <label htmlFor="cat14">Nespresso</label>
                                                </div>
                                                {/* single category end */}
                                                {/* single category */}
                                                <div className="single-category">
                                                    <input id="cat17" type="checkbox" />
                                                    <label htmlFor="cat17">Welch's</label>
                                                </div>
                                                {/* single category end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <RelatedProduct />



            <ShortService />
            <FooterOne />

        </div>
    );
}
