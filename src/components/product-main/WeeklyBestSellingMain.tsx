'use client';

import { useState, useEffect } from 'react';
import ProductDetails from "@/components/modal/ProductDetails";
import CompareModal from "@/components/modal/CompareModal";
import { useCart } from "@/components/header/CartContext";
import { useWishlist } from "@/components/header/WishlistContext";
import { useCompare } from '@/components/header/CompareContext';
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

  // ✅ Swiper Anti-Hydration Fix (safe version)
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  // Other hooks (must stay in order)
  type ModalType = 'one' | 'two' | 'three' | null;
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const handleClose = () => setActiveModal(null);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { addToCompare } = useCompare();

  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // quantity
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const handleAdd = () => {
    addToCart({
      id: Date.now(),
      image: `/assets/images/grocery/${ProductImage}`,
      title: ProductTitle ?? 'Default Product Title',
      price: parseFloat(Price ?? '0'),
      quantity,
      active: true,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 5000);
  };

  const handleWishlist = () => {
    addToWishlist({
      id: Date.now(),
      image: `/assets/images/grocery/${ProductImage}`,
      title: ProductTitle ?? 'Default Product Title',
      price: parseFloat(Price ?? '0'),
      quantity: 1,
    });
    setWishlisted(true);
    setTimeout(() => setWishlisted(false), 3000);
  };

  const handleCompare = () => {
    addToCompare({
      image: `/assets/images/grocery/${ProductImage}`,
      name: ProductTitle ?? 'Default Product Title',
      price: Price ?? '0',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 5,
      ratingCount: 25,
      weight: '500g',
      inStock: true,
    });
  };

  const compare = () => toast('Successfully Add To Compare !');
  const addcart = () => toast('Successfully Add To Cart !');
  const wishList = () => toast('Successfully Add To Wishlist !');

  return (
    <>
      {/* ⛔ Don't render UI until DOM ready, but WITHOUT breaking hooks */}
      {!domReady ? null : (
        <>
          <div className="image-and-action-area-wrapper">
            <Link href={`/shop/${Slug}`} className="thumbnail-preview">
              <div className="badge">
                <span>
                  25% <br />
                  Off
                </span>
                <i className="fa-solid fa-bookmark" />
              </div>
              <img src={`/assets/images/grocery/${ProductImage}`} alt="grocery" />
            </Link>
            <div className="action-share-option">
              <span
                className="single-action openuptip message-show-action"
                data-flow="up"
                title="Add To Wishlist"
                onClick={() => {
                  handleWishlist();
                  wishList();
                }}
              >
                <i className="fa-light fa-heart" />
              </span>
              <span
                className="single-action openuptip"
                data-flow="up"
                title="Compare"
                onClick={() => {
                  handleCompare();
                  compare();
                }}
              >
                <i className="fa-solid fa-arrows-retweet" />
              </span>
              <span
                className="single-action openuptip cta-quickview product-details-popup-btn"
                data-flow="up"
                title="Quick View"
                onClick={() => setActiveModal('two')}
              >
                <i className="fa-regular fa-eye" />
              </span>
            </div>
          </div>

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
              <div className="quantity-edit">
                <input
                  type="text"
                  className="input"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                />
                <div className="button-wrapper-action">
                  <button className="button minus" onClick={decrease}>
                    <i className="fa-regular fa-chevron-down" />
                  </button>
                  <button className="button plus" onClick={increase}>
                    +<i className="fa-regular fa-chevron-up" />
                  </button>
                </div>
              </div>

              <Link
                href="#"
                className="rts-btn btn-primary add-to-card radious-sm with-icon"
                onClick={e => {
                  e.preventDefault();
                  handleAdd();
                  addcart();
                }}
              >
                <div className="btn-text">{added ? 'Added' : 'Add'}</div>
                <div className="arrow-icon">
                  <i className={added ? "fa-solid fa-check" : "fa-regular fa-cart-shopping"} />
                </div>
                <div className="arrow-icon">
                  <i className={added ? "fa-solid fa-check" : "fa-regular fa-cart-shopping"} />
                </div>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Modals always mounted (does not affect swiper width) */}
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
