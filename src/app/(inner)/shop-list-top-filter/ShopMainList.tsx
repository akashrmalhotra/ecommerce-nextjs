"use client"
import React, { useState } from 'react';
import { useCart } from "@/components/header/CartContext";
import { toast } from 'react-toastify';
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

  // 🔥 FIXED QUANTITY (React State Only)
  const [qty, setQty] = useState(1);
  const increaseQty = () => setQty(prev => prev + 1);
  const decreaseQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  // cart item
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: Date.now(),
      image: `/assets/images/grocery/${ProductImage}`,
      title: ProductTitle ?? 'Default Product Title',
      price: parseFloat(Price ?? '0'),
      quantity: qty, // 👈 FIXED
      active: true,
    });
    toast('Successfully Add To Cart !');
  };

  return (
    <>
      <div className="single-shopping-card-one discount-offer">
        <a href={`/shop/${Slug}`} className="thumbnail-preview">
          <div className="badge">
            <span>
              25% <br /> Off
            </span>
            <i className="fa-solid fa-bookmark" />
          </div>
          <img src={`/assets/images/grocery/${ProductImage}`} alt="grocery" />
        </a>

        <div className="body-content">
          <div className="title-area-left">
            <a href={`/shop/${Slug}`}>
              <h4 className="title">{ProductTitle ?? 'How to growing your business'}</h4>
            </a>

            <span className="availability">500g Pack</span>

            <div className="price-area">
              <span className="current">${Price}</span>
              <div className="previous">$36.00</div>
            </div>

            <div className="cart-counter-action">
              <div className="quantity-edit">
                <input type="text" className="input" value={qty} readOnly />

                <div className="button-wrapper-action">
                  <button className="button minus" onClick={decreaseQty}>
                    <i className="fa-regular fa-chevron-down" />
                  </button>

                  <button className="button plus" onClick={increaseQty}>
                    +<i className="fa-regular fa-chevron-up" />
                  </button>
                </div>
              </div>

              <a
                href="#"
                className="rts-btn btn-primary radious-sm with-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd();
                }}
              >
                <div className="btn-text">Add To Cart</div>

                <div className="arrow-icon">
                  <i className="fa-regular fa-cart-shopping" />
                </div>
                <div className="arrow-icon">
                  <i className="fa-regular fa-cart-shopping" />
                </div>
              </a>
            </div>
          </div>

          <div className="natural-value">
            <h6 className="title">Nutritional Values</h6>

            <div className="single"><span>Energy(kcal):</span><span>211</span></div>
            <div className="single"><span>Protein(g):</span><span>211</span></div>
            <div className="single"><span>magnetiam(kcal):</span><span>211</span></div>
            <div className="single"><span>Calory(kcal):</span><span>211</span></div>
            <div className="single"><span>Vitamine(kcal):</span><span>211</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridMain;
