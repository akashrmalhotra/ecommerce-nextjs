import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Vendor {
  id: number;
  name: string;
  status: 'Open' | 'Closed';
  rating: number;
  location: string;
  phone: string;
  image: string;
}

const VendorGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Vendor data array
  const vendors: Vendor[] = [
    {
      id: 1,
      name: 'Fresh Juice Bar',
      status: 'Closed',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/01.svg'
    },
    {
      id: 2,
      name: 'Brazilian Food',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/02.svg'
    },
    {
      id: 3,
      name: 'Fresh Juice Bar',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/03.svg'
    },
    {
      id: 4,
      name: 'Food Character',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/04.svg'
    },
    {
      id: 5,
      name: 'Authentic Grocery',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/05.svg'
    },
    {
      id: 6,
      name: 'Food Character',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/06.svg'
    },
    {
      id: 7,
      name: 'Fresh Food',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/07.svg'
    },
    {
      id: 8,
      name: 'Botanic Natural',
      status: 'Open',
      rating: 4.5,
      location: '530 Post Ct El Dorado Hills California, United States',
      phone: '+1 (511) 934-8170',
      image: '/assets/images-dashboard/vendor/08.svg'
    }
  ];

  // Filter vendors based on search term
  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    vendor.id.toString().includes(searchTerm)
  );

  // Render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fa-solid fa-star ${i < Math.floor(rating) ? 'filled' : ''}`} />
      );
    }
    return stars;
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

  return (
    <div className="body-root-inner">
      {/* Vendor search area */}
      <div className="vendor-grid-top-search-area">
        <h5 className="title">Vendors Card</h5>
        <form onSubmit={handleSearchSubmit} className="input-area-search-head-vendor">
          <input 
            type="text" 
            placeholder="Search vendors (by name or ID)..." 
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

      {/* Vendor grid */}
      <div className="row mt--10 g-xl-5 g-lg-4 g-4">
        {filteredVendors.map(vendor => (
          <div key={vendor.id} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="single-vendor-area">
              <div className="logo-vendor">
                <Image 
                  src={vendor.image} 
                  alt="vendor" 
                  width={80} 
                  height={80}
                />
              </div>
              <h3 className="title animated fadeIn">
                {vendor.name} <span className={vendor.status.toLowerCase()}>{vendor.status}</span>
              </h3>
              <div className="stars-area">
                {renderStars(vendor.rating)}
                <span>{vendor.rating.toFixed(2)} out of 5</span>
              </div>
              <div className="location">
                <i className="fa-regular fa-location-dot" />
                <p>{vendor.location}</p>
              </div>
              <div className="location">
                <i className="fa-solid fa-phone-volume" />
                <p>{vendor.phone}</p>
              </div>
              <Link
                href="/vendor-details"
                className="rts-btn btn-primary radious-sm with-icon"
              >
                <div className="btn-text">Visit Store</div>
                <div className="arrow-icon">
                  <i className="fa-light fa-arrow-right" />
                </div>
                <div className="arrow-icon">
                  <i className="fa-light fa-arrow-right" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer-copyright">
        <div className="left">
          <p>Copyright © 2025 All Right Reserved.</p>
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

export default VendorGrid;