"use client"
import { useState, useEffect } from 'react';
import ProductDetails from "@/components/modal/ProductDetails";
import CompareModal from "@/components/modal/CompareModal";
import { useCart } from "@/components/header/CartContext";
import { useWishlist } from "@/components/header/WishlistContext";

import { useCompare } from '@/components/header/CompareContext'; //
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';


interface BlogGridMainProps {
    Slug: string;
    ProductImage: string;
    ProductTitle?: string;
    Price?: string;
}

const BlogGridMain: React.FC<BlogGridMainProps> = ({
    Slug,
    ProductImage,
    ProductTitle,
    Price,
}) => {


    type ModalType = 'one' | 'two' | 'three' | null;
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const handleClose = () => setActiveModal(null);



    // add to cart
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({
            id: Date.now(), // use a unique ID per click
            image: `/assets/images/grocery/${ProductImage}`,
            title: ProductTitle ?? 'How to growing your business',
            price: Price ? parseFloat(Price) : 0,
            quantity: 1,
            active: true,
        });
    };

    const { addToWishlist } = useWishlist();
    const handleWishlist = () => {
        addToWishlist({
            id: Date.now(),
            image: `/assets/images/grocery/${ProductImage}`,
            title: ProductTitle ?? 'Default Product Title',
            price: parseFloat(Price ?? '0'),
            quantity: 1,
        });
    };




    const { addToCompare } = useCompare();
    const handleCompare = () => {
        addToCompare({
            image: `/assets/images/grocery/${ProductImage}`,
            name: ProductTitle ?? 'Default Product Title',
            price: Price ?? '0',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', // Or dynamic if available
            rating: 5, // Static or dynamic value
            ratingCount: 25, // You can replace this
            weight: '500g', // If you have dynamic, replace it
            inStock: true, // Or false
        });
    };


    // tostify
    const compare = () => toast('Successfully Add To Compare !');
    const addcart = () => toast('Successfully Add To Cart !');
    const wishList = () => toast('Successfully Add To Wishlist !');


    return (
        <>

            <div className="onsale-offer">
                <span>On sale</span>
            </div>
            <div className="image-and-action-area-wrapper">
                <Link href={`/shop/${Slug}`} className="thumbnail-preview">
                    <img src={`/assets/images/grocery/${ProductImage}`} alt="grocery" />
                </Link>
                <div className="action-share-option">
                    <div
                        className="single-action openuptip message-show-action"
                        data-flow="up"
                        title="Add To Wishlist"
                        onClick={() => {
                            handleWishlist();
                            wishList();
                        }}
                    >
                        <i className="fa-light fa-heart" />
                    </div>
                    <div
                        className="single-action openuptip"
                        data-flow="up"
                        title="Compare"
                        onClick={() => {
                            handleCompare();
                            compare();
                        }}
                    >
                        <i className="fa-solid fa-arrows-retweet" />
                    </div>
                    <div
                        className="single-action openuptip cta-quickview product-details-popup-btn"
                        data-flow="up"
                        title="Quick View"
                        onClick={() => setActiveModal('two')}
                    >
                        <i className="fa-regular fa-eye" />
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="start-area-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                </div>
                <Link href={`/shop/${Slug}`}>
                    <h4 className="title">
                        {ProductTitle ? ProductTitle : 'How to growing your business'}
                    </h4>
                </Link>
                <span className="availability">500g Pack</span>
                <div className="price-area">
                    <span className="current">{`${Price}`}</span>
                    <div className="previous">$36.00</div>
                </div>
                <div className="cart-counter-action">
                    <Link
                        href="#"
                        className="rts-btn btn-primary radious-sm with-icon"
                        onClick={e => {
                            e.preventDefault();
                            handleAdd();
                            addcart();
                        }}
                    >
                        <div className="btn-text">Add To Cart</div>
                        <div className="arrow-icon">
                            <i className="fa-regular fa-cart-shopping" />
                        </div>
                        <div className="arrow-icon">
                            <i className="fa-regular fa-cart-shopping" />
                        </div>
                    </Link>
                </div>
            </div>

            <CompareModal show={activeModal === 'one'} handleClose={handleClose} />
    <ProductDetails
        show={activeModal === 'two'}
        handleClose={handleClose}
        productImage={`/assets/images/grocery/${ProductImage}`}
        productTitle={ProductTitle ?? 'Default Product Title'}
        productPrice={Price ?? '0'}
      />
        </>
    );
};

export default BlogGridMain;
