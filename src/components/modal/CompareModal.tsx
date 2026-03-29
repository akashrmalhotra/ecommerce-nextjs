"use client"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
interface ModalProps {
    show: boolean;
    handleClose: () => void;
}
const ModalComponent: React.FC<ModalProps> = ({ show, handleClose }) => {
    return (
        <div className="modal-compare-area-start ">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-compare"
            >
                <Modal.Header closeButton>
                </Modal.Header>

                <>

                    <div className="compare-main-wrapper-body">
                        <div className="single-compare-elements name">Preview</div>
                        <div className="single-compare-elements">
                            <div className="thumbnail-preview">
                                <img src="/assets/images/grocery/01.jpg" alt="grocery" />
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="thumbnail-preview">
                                <img src="/assets/images/grocery/02.jpg" alt="grocery" />
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="thumbnail-preview">
                                <img src="/assets/images/grocery/03.jpg" alt="grocery" />
                            </div>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname spacifiq">
                        <div className="single-compare-elements name">Name</div>
                        <div className="single-compare-elements">
                            <p>J.Crew Mercantile Women's Short</p>
                        </div>
                        <div className="single-compare-elements">
                            <p>Amazon Essentials Women's Tanks</p>
                        </div>
                        <div className="single-compare-elements">
                            <p>Amazon Brand - Daily Ritual Wom</p>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Price</div>
                        <div className="single-compare-elements price">
                            <p>$25.00</p>
                        </div>
                        <div className="single-compare-elements price">
                            <p>$39.25</p>
                        </div>
                        <div className="single-compare-elements price">
                            <p>$12.00</p>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Description</div>
                        <div className="single-compare-elements discription">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard
                            </p>
                        </div>
                        <div className="single-compare-elements discription">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard
                            </p>
                        </div>
                        <div className="single-compare-elements discription">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard
                            </p>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Rating</div>
                        <div className="single-compare-elements">
                            <div className="rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <span>(25)</span>
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <span>(19)</span>
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="rating">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <span>(120)</span>
                            </div>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Weight</div>
                        <div className="single-compare-elements">
                            <div className="rating">
                                <p>320 gram</p>
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <p>370 gram</p>
                        </div>
                        <div className="single-compare-elements">
                            <p>380 gram</p>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Stock status</div>
                        <div className="single-compare-elements">
                            <div className="instocks">
                                <span>In Stock</span>
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="outstocks">
                                <span className="out-stock">Out Of Stock</span>
                            </div>
                        </div>
                        <div className="single-compare-elements">
                            <div className="instocks">
                                <span>In Stock</span>
                            </div>
                        </div>
                    </div>
                    <div className="compare-main-wrapper-body productname">
                        <div className="single-compare-elements name">Buy Now</div>
                        <div className="single-compare-elements">
                            <div className="cart-counter-action">
                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                        <div className="single-compare-elements">
                            <div className="cart-counter-action">
                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                        <div className="single-compare-elements">
                            <div className="cart-counter-action">
                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                    </div>
                </>


            </Modal>
        </div>

    );
};

export default ModalComponent;
