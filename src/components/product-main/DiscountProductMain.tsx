"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from "@/components/header/CartContext";
import { useWishlist } from "@/components/header/WishlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

    // Increase quantity
    const increase = () => setQuantity(prev => prev + 1);

    // Decrease quantity
    const decrease = () =>
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // Add to cart
    const handleAdd = () => {
        addToCart({
            id: Date.now(),
            image: `/assets/images/grocery/${ProductImage}`,
            title: ProductTitle ?? 'Default Product Title',
            price: parseFloat(Price ?? '0'),
            quantity: quantity,
            active: true,
        });

        setAdded(true);
        toast('Successfully Add To Cart !');
        setTimeout(() => setAdded(false), 3000);
    };

    // Add to wishlist
    const handleWishlist = () => {
        addToWishlist({
            id: Date.now(),
            image: `/assets/images/grocery/${ProductImage}`,
            title: ProductTitle ?? 'Default Product Title',
            price: parseFloat(Price ?? '0'),
            quantity: 1,
        });

        toast('Successfully Add To Wishlist !');
    };

    return (
        <>
            <Link href={`/shop/${Slug}`} className="thumbnail-preview">
                <div className="badge">
                    <span>25% <br />Off</span>
                    <i className="fa-solid fa-bookmark" />
                </div>
                <img src={`/assets/images/grocery/${ProductImage}`} alt="grocery" />
            </Link>

            <div className="body-content">
                <Link href={`/shop/${Slug}`}>
                    <h4 className="title">{ProductTitle ?? 'How to growing your business'}</h4>
                </Link>

                <span className="availability">500g Pack</span>

                <div className="price-area">
                    <span className="current">{`$${Price}`}</span>
                    <div className="previous">$36.00</div>
                </div>

                <div className="cart-counter-action">
                    {/* Quantity */}
                    <div className="quantity-edit">
                        <input
                            type="text"
                            className="input"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(Number(e.target.value) || 1)
                            }
                        />
                        <div className="button-wrapper-action">
                            <button className="button minus" onClick={decrease}>
                                <i className="fa-regular fa-chevron-down" />
                            </button>

                            <button className="button plus" onClick={increase}>
                                <i className="fa-regular fa-chevron-up" />
                            </button>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <Link
                        href="#"
                        className="rts-btn btn-primary radious-sm with-icon add-to-cart"
                        onClick={e => {
                            e.preventDefault();
                            handleAdd();
                        }}
                    >
                        <div className="btn-text">{added ? 'Added' : 'Add'}</div>

                        <div className="arrow-icon">
                            <i className={`fa-regular ${added ? 'fa-check' : 'fa-cart-shopping'}`} />
                        </div>
                        <div className="arrow-icon">
                            <i className={`fa-regular ${added ? 'fa-check' : 'fa-cart-shopping'}`} />
                        </div>
                    </Link>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default BlogGridMain;
