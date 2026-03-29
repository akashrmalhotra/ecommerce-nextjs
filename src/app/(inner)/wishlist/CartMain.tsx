'use client';
import React, { useState, useEffect } from 'react';
import { useWishlist } from '@/components/header/WishlistContext';
import { useCart } from "@/components/header/CartContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartMain = () => {
  const { wishlistItems, removeFromWishlist, updateItemQuantity } = useWishlist();

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = wishlistItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [wishlistItems]);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon === '12345') {
      setDiscount(0.25);
      setCouponMessage('Coupon applied -25% successfully');
      localStorage.setItem('coupon', coupon);
      localStorage.setItem('discount', '0.25');
    } else {
      setDiscount(0);
      setCouponMessage('Coupon code is incorrect');
      localStorage.removeItem('coupon');
      localStorage.removeItem('discount');
    }
  };

  const clearCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('wishlistItems');
      localStorage.removeItem('coupon');
      localStorage.removeItem('discount');
    }
    setCoupon('');
    setDiscount(0);
    setCouponMessage('');
    wishlistItems.forEach(item => removeFromWishlist(item.id));
  };

  const finalTotal = subtotal - subtotal * discount;




  // add to cart to page
  const { addToCart } = useCart();
  const handleAdd = (item: any) => {
    addToCart({
      id: Date.now(),
      image: item.image,
      title: item.name ?? 'Default Product Title',
      price: parseFloat(item.price ?? '0'),
      quantity: 1,
      active: true,
    });
  };
  const addcart = () => toast('Successfully Add To Cart!');


  return (
    <div className="rts-cart-area rts-section-gap bg_light-1">
      <div className="container">
        <div className="row g-5">
          {/* Cart Items */}
          <div className="col-xl-12 col-12 order-2 order-xl-1">
            <div className="cart-area-main-wrapper">
              <div className="cart-top-area-note">
                <p>Add <span>$59.69</span> to cart and get free shipping</p>
                <div className="bottom-content-deals mt--10">
                  <div className="single-progress-area-incard">
                    <div className="progress">
                      <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rts-cart-list-area">
              <div className="single-cart-area-list head">
                <div className="product-main"><p>Products</p></div>
                <div className="price"><p>Price</p></div>
                <div className="quantity"><p>Quantity</p></div>
                <div className="subtotal"><p>SubTotal</p></div>
                <div className="subtotal"><p>Add to Cart</p></div>
              </div>

              {wishlistItems.map(item => (
                <div className="single-cart-area-list main item-parent" key={item.id}>
                  <div className="product-main-cart">
                    <div className="close section-activation" onClick={() => removeFromWishlist(item.id)}>
                      <i className="fa-regular fa-x" />
                    </div>
                    <div className="thumbnail">
                      <img src={item.image} alt="shop" />
                    </div>
                    <div className="information">
                      <h6 className="title">{item.title}</h6>
                      <span>SKU:SKUZNFER</span>
                    </div>
                  </div>
                  <div className="price"><p>${item.price.toFixed(2)}</p></div>
                  <div className="quantity">
                    <div className="quantity-edit">
                      <input type="text" className="input" value={item.quantity} readOnly />
                      <div className="button-wrapper-action">
                        <button
                          className="button minus"
                          onClick={() =>
                            item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <i className="fa-regular fa-chevron-down" />
                        </button>
                        <button
                          className="button plus"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <i className="fa-regular fa-chevron-up" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="subtotal"><p>${(item.price * item.quantity).toFixed(2)}</p></div>
                  <div className="button-area">
                    <a href="#" className="rts-btn btn-primary radious-sm with-icon"
                      onClick={e => {
                        e.preventDefault();
                        handleAdd(item);
                        addcart();
                      }}

                    >
                      <div className="btn-text">Add to Cart</div>
                      <div className="arrow-icon">
                        <i className="fa-regular fa-cart-shopping" />
                      </div>
                      <div className="arrow-icon">
                        <i className="fa-regular fa-cart-shopping" />
                      </div>
                    </a>
                  </div>

                </div>
              ))}

              {/* Coupon + Clear */}
              <div className="bottom-cupon-code-cart-area">
                <button onClick={clearCart} className="rts-btn btn-primary mr--50">Clear All</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CartMain;
