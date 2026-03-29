'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from './CartContext';






const CartDropdown: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const activeItems = cartItems.filter((item) => item.active);
  const total = activeItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 125;
  const remaining = freeShippingThreshold - total;

  return (
    <div className="btn-border-only cart category-hover-header">
      <i className="fa-sharp fa-regular fa-cart-shopping" />
      <span className="text">Cart</span>
      <span className="number">{activeItems.length}</span>

      <div className="category-sub-menu card-number-show">
        <h5 className="shopping-cart-number">
          Shopping Cart ({activeItems.length.toString().padStart(2, '0')})
        </h5>

        {activeItems.map((item) => (
          <div key={item.id} className="cart-item-1 border-top">
            <div className="img-name">
              <div className="close section-activation" onClick={() => removeFromCart(item.id)}>
                <i className="fa-regular fa-x" />
              </div>
              <div className="thumbanil">
                <Image src={item.image} alt={item.title} width={60} height={60} />
              </div>
              <div className="details">
                <Link href='/shop/details-profitable-business-makes-your-profit'>
                  <h5 className="title">{item.title}</h5>
                </Link>
                <div className="number">
                  {item.quantity} <i className="fa-regular fa-x" />
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="sub-total-cart-balance">
          <div className="bottom-content-deals mt--10">
            <div className="top">
              <span>Sub Total:</span>
              <span className="number-c">${total.toFixed(2)}</span>
            </div>
            <div className="single-progress-area-incard">
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  role="progressbar"
                  style={{
                    width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
            {total < freeShippingThreshold && (
              <p>
                Spend More <span>${remaining.toFixed(2)}</span> to reach{' '}
                <span>Free Shipping</span>
              </p>
            )}
          </div>

          <div className="button-wrapper d-flex align-items-center justify-content-between">
            <Link href="/cart" className="rts-btn btn-primary">
              View Cart
            </Link>
            <Link href="/checkout" className="rts-btn btn-primary border-only">
              CheckOut
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
