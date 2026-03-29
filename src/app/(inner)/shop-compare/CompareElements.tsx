"use client";

import { useState } from 'react';
import { useCompare } from "@/components/header/CompareContext";
import { useCart } from "@/components/header/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompareElements = () => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const { compareItems, removeFromCompare } = useCompare();

    const handleAdd = (item: any) => {
        addToCart({
            id: Date.now(),
            image: item.image,
            title: item.name ?? 'Default Product Title',
            price: parseFloat(item.price ?? '0'),
            quantity: 1,
            active: true,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 5000);
    };

    const addcart = () => toast('Successfully Add To Cart!');

    if (compareItems.length === 0) {
        return <div className="modal-body no-compare-show">No products to compare.</div>;
    }

    return (
        <div>
            <div className="modal-body">
                <div className="compare-main-wrapper-body">
                    <div className="single-compare-elements name">Preview</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <div className="thumbnail-preview">
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname spacifiq">
                    <div className="single-compare-elements name">Name</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Price</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements price" key={index}>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Description</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements discription" key={index}>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Rating</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <div className="rating">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i
                                        key={i}
                                        className={`fa-solid fa-star ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                                <span>({item.ratingCount})</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Weight</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <p>{item.weight}</p>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Stock status</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <div className={item.inStock ? "instocks" : "outstocks"}>
                                <span className={item.inStock ? "" : "out-stock"}>
                                    {item.inStock ? "In Stock" : "Out Of Stock"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="compare-main-wrapper-body productname">
                    <div className="single-compare-elements name">Buy Now</div>
                    {compareItems.map((item, index) => (
                        <div className="single-compare-elements" key={index}>
                            <div className="cart-counter-action">
                                <a
                                    href="#"
                                    className="rts-btn btn-primary radious-sm with-icon"
                                    onClick={e => {
                                        e.preventDefault();
                                        handleAdd(item);
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
                                </a>
                                <a
                                    href="#"
                                    className="rts-btn btn-primary radious-sm remove-this"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeFromCompare(item.name);
                                    }}
                                >
                                    <div className="btn-text"><i className="fa-light fa-trash"></i></div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CompareElements;
