"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductDetails from "@/components/modal/ProductDetails";
import CompareModal from "@/components/modal/CompareModal";

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

    // number count up and down
    useEffect(() => {
        const handleQuantityClick = (e: Event) => {
            const button = e.currentTarget as HTMLElement;
            const parent = button.closest('.quantity-edit') as HTMLElement | null;
            if (!parent) return;

            const input = parent.querySelector('.input') as HTMLInputElement | null;
            const addToCart = parent.querySelector('a.add-to-cart') as HTMLElement | null;
            if (!input) return;

            let oldValue = parseInt(input.value || '1', 10);
            let newVal = oldValue;

            if (button.classList.contains('plus')) {
                newVal = oldValue + 1;
            } else if (button.classList.contains('minus')) {
                newVal = oldValue > 1 ? oldValue - 1 : 1;
            }

            input.value = newVal.toString();
            if (addToCart) {
                addToCart.setAttribute('data-quantity', newVal.toString());
            }
        };

        const buttons = document.querySelectorAll('.quantity-edit .button');

        // 💡 Remove any existing handlers first (safe rebind)
        buttons.forEach(button => {
            button.removeEventListener('click', handleQuantityClick);
            button.addEventListener('click', handleQuantityClick);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', handleQuantityClick);
            });
        };
    }, []);



    return (
        <>
            <Link href={`/shop/${Slug}`} className="thumbanil">
                <img src={`/assets/images/best-seller/${ProductImage}`} alt="seller" />
                <div className="action-share-option">
                    <div
                        className="single-action openuptip message-show-action"
                        data-data-flow="up"
                        title="Add To Wishlist"
                    >
                        <i className="fa-light fa-heart" />
                    </div>
                    <div
                        className="single-action openuptip"
                        data-data-flow="up"
                        title="Compare"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        <i className="fa-solid fa-arrows-retweet" />
                    </div>
                    <div
                        className="single-action openuptip cta-quickview product-details-popup-btn"
                        data-data-flow="up"
                        title="Quick View"
                    >
                        <i className="fa-regular fa-eye" />
                    </div>
                </div>
            </Link>
            <div className="inner">
                <Link href={`/shop/${Slug}`}>
                    <h4 className="title">{ProductTitle ? ProductTitle : 'How to growing your business'}</h4>
                </Link>
                <h6 className="price">{`$${Price}`}</h6>
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
