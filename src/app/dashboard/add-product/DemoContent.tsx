"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    regularPrice: '',
    salePrice: '',
    productSize: '',
    stock: '',
    sku: '',
    category: '',
    tag: '',
    description: '',
    image: null as File | null,
    previewImage: '/assets/images-dashboard/grocery/16.png',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('productName', formData.productName);
    formPayload.append('regularPrice', formData.regularPrice);
    formPayload.append('salePrice', formData.salePrice);
    formPayload.append('stock', formData.stock);
    formPayload.append('sku', formData.sku);
    formPayload.append('category', formData.category);
    formPayload.append('tag', formData.tag);
    formPayload.append('description', formData.description);
    if (formData.image) {
      formPayload.append('image', formData.image);
    }

    // 🛠️ Replace with actual API endpoint
    // await fetch('/api/upload', {
    //   method: 'POST',
    //   body: formPayload,
    // });

    console.log('Form data submitted:', Object.fromEntries(formPayload.entries()));
  };

  const handleCancel = () => {
    console.log('Form cancelled');
    // Optional: reset or navigate away
  };

  return (
    <div className="body-root-inner">
      <div className="transection">
        <div className="vendor-list-main-wrapper product-wrapper add-product-page">
          <div className="card-body table-product-select">
            <div className="header-two show right-collups-add-product">
              <div className="right-collups-area-top">
                <h6 className="title" style={{ fontSize: '32px' }}>
                  Add New Product
                </h6>
                <p>Add information and add new product</p>
              </div>

              <form onSubmit={handleSubmit} className="input-main-wrapper">
                <div className="single-input">
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    id="productName"
                    placeholder="Quaker Oats Healthy Meal..."
                    value={formData.productName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="regularPrice">Regular Price</label>
                  <input
                    type="text"
                    id="regularPrice"
                    placeholder="240"
                    value={formData.regularPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="salePrice">Sale Price</label>
                  <input
                    type="text"
                    id="salePrice"
                    placeholder="$250"
                    value={formData.salePrice}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="single-input">
                  <label htmlFor="size">Add Size</label>
                  {/* <input
                    type="text"
                    id="size"
                    placeholder="Small"
                    value={formData.productSize}
                    onChange={handleInputChange}
                  /> */}
                  <select className="nice-select size">
                    <option>Small</option>
                    <option>Large</option>
                    <option>XL Size</option>
                    <option>XXL Size</option>
                  </select>
                </div>

                <div className="single-input">
                  <label htmlFor="stock">Stock</label>
                  <input
                    type="text"
                    id="stock"
                    placeholder="530"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="sku">SKU</label>
                  <input
                    type="text"
                    id="sku"
                    placeholder="3245"
                    value={formData.sku}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    placeholder="Notebook"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    id="tag"
                    placeholder="Iphone, Mobile"
                    value={formData.tag}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    placeholder="Type something"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="single-input">
                  <div className="file-upload-add-product">
                    <div className="profile-left">
                      <div className="profile-image mb--30">
                        <Image
                          src={formData.previewImage}
                          alt="Product Preview"
                          width={100}
                          height={100}
                          id="rts_image"
                        />
                        <span>Drag and drop Image</span>
                      </div>
                      <div className="button-area">
                        <div className="brows-file-wrapper">
                          <input
                            name="rts_images1"
                            id="rts_images1"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                          <label htmlFor="rts_images1" className="rts-btn btn-primary opacity-none">
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button-area-botton-wrapper-p-list">
                  <button type="submit" className="rts-btn btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="rts-btn btn-primary bg-transparent"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="left">
          <p>Copyright © 2024 All Right Reserved.</p>
        </div>
        <ul>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddProductPage;
