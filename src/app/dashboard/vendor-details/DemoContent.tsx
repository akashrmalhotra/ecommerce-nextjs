import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  time: string;
  packSize: string;
  currentPrice: string;
  previousPrice: string;
}

const VendorDetailsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeRange, setTimeRange] = useState('last Week');

  // Vendor data
  const vendor = {
    name: 'Food Forulard',
    status: 'Open',
    rating: 4.5,
    address: '530 Post Ct El Dorado Hills California, United States',
    phone: '+1 (511) 934-8170',
    productsAvailable: 3214,
    image: '/assets/images-dashboard/vendor/01.svg',
    bannerImage: '/assets/images-dashboard/vendor/01.png'
  };

  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Kellin Filid Angelo 100% Di Grano Tenero',
      image: '/assets/images-dashboard/grocery/08.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    },
    {
      id: 2,
      name: 'Angelo 100% Di Grano Tenero',
      image: '/assets/images-dashboard/grocery/09.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    },
    {
      id: 3,
      name: 'Eellin Filid Angelo 100% Di Grano Tenero',
      image: '/assets/images-dashboard/grocery/10.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    },
    {
      id: 4,
      name: 'Hellin Filid Angelo 100% Di Grano Tenero',
      image: '/assets/images-dashboard/grocery/11.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    },
    {
      id: 5,
      name: 'More Filid Angelo 100% Di Grano Tenero',
      image: '/assets/images-dashboard/grocery/12.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    },
    {
      id: 6,
      name: 'Best Filid Angelo 100% Di Grano Kuller',
      image: '/assets/images-dashboard/grocery/13.jpg',
      time: '9 MINS',
      packSize: '500g Pack',
      currentPrice: '$36.00',
      previousPrice: '$36.00'
    }
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="stars-area">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa-solid fa-star ${i < Math.floor(rating) ? 'filled' : ''}`}
          />
        ))}
        <span>({rating.toFixed(2)} out of 5)</span>
      </div>
    );
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filtering happens automatically through state
  };

  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    // You can add additional filtering logic here based on time range
  };

  return (
    <div className="body-root-inner">
      <div className="row">
        <div className="col-lg-12">
          {/* Vendor Banner Area */}
          <div className="vendor-details-banner--area">
            <div className="row g-5">
              <div className="col-xl-3 col-lg-12 col-md-12">
                <div className="vendor-banner-left">
                  <Image
                    src={vendor.image}
                    alt="vendor"
                    width={150}
                    height={150}
                  />
                  <div className="header-area">
                    <h4 className="title">
                      {vendor.name} <span>{vendor.status}</span>
                    </h4>
                  </div>
                  {renderStars(vendor.rating)}
                  <div className="location">
                    <i className="fa-regular fa-location-dot" />
                    <p>{vendor.address}</p>
                  </div>
                  <div className="location">
                    <i className="fa-regular fa-phone-volume" />
                    <p>{vendor.phone}</p>
                  </div>
                  <div className="location">
                    <i className="fa-regular fa-cart-shopping" />
                    <p>{vendor.productsAvailable} Product Available</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-12 col-md-12">
                <div className="banner-vendor-details bg_image">
                  <div className="content-area">
                    <a href="#" className="rts-btn btn-primary">
                      Weekend Discount
                    </a>
                    <h3 className="title animated fadeIn">
                      Drink Fresh Corn Juice <br />
                      <span>Good Taste</span>
                    </h3>
                    <a href="#" className="shop-now-goshop-btn">
                      <span className="text">Shop Now</span>
                      <div className="plus-icon">
                        <i className="fa-sharp fa-regular fa-plus" />
                      </div>
                      <div className="plus-icon">
                        <i className="fa-sharp fa-regular fa-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Header */}
          <div className="product-area-add-wrapper bg_image">
            <h2 className="title">Products</h2>
            <Image
              src="/assets/images-dashboard/vendor/01.png"
              alt="images"
              className="one"
              width={100}
              height={100}
            />
            <Image
              src="/assets/images-dashboard/vendor/02.png"
              alt="images"
              className="two"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Product Filter Area */}
      <div className="row mt--50">
        <div className="col-lg-12">
          <div className="product-filter-area-vendors-details">
            <div className="search-area">
              <form onSubmit={handleSearchSubmit} className="search-header">
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  required
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="rts-btn btn-primary radious-sm with-icon">
                  <div className="btn-text">Search</div>
                  <div className="arrow-icon">
                    <i className="fa-light fa-magnifying-glass" />
                  </div>
                  <div className="arrow-icon">
                    <i className="fa-light fa-magnifying-glass" />
                  </div>
                </button>
              </form>
            </div>
            <div className="single-select">
              <select className="nice-select">
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
                <option>6 Month</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4  mt--40">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-4 col-md-6">
            <div className="single-shopping-card-one tranding-product">
              <a href="#" className="thumbnail-preview">
                <Image
                  src={product.image}
                  alt="grocery"
                  width={300}
                  height={300}
                />
              </a>
              <div className="body-content">
                <div className="time-tag">
                  <i className="fa-light fa-clock" />{product.time}
                </div>
                <a href="#">
                  <h4 className="title">{product.name}</h4>
                </a>
                <span className="availability">{product.packSize}</span>
                <div className="price-area">
                  <span className="current">{product.currentPrice}</span>
                  <div className="previous">{product.previousPrice}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer-copyright">
        <div className="left">
          <p>Copyright © 2024 All Right Reserved.</p>
        </div>
        <ul>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  );
};

export default VendorDetailsPage;