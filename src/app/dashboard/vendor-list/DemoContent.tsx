import React, { useState } from 'react';
import Image from 'next/image';

interface Vendor {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
  status: 'Open' | 'Close';
}

const VendorTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Vendor data array
  const vendors: Vendor[] = [
    {
      id: 1,
      name: 'Food Forulard',
      image: '/assets/images-dashboard/vendor/01.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Juice Forulard',
      image: '/assets/images-dashboard/vendor/02.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Food Recipy',
      image: '/assets/images-dashboard/vendor/03.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Close'
    },
    {
      id: 4,
      name: 'Banana Forulard',
      image: '/assets/images-dashboard/vendor/04.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Open'
    },
    {
      id: 5,
      name: 'CoConut Shop',
      image: '/assets/images-dashboard/vendor/05.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Open'
    },
    {
      id: 6,
      name: 'jackFruits',
      image: '/assets/images-dashboard/vendor/06.svg',
      rating: 4.5,
      address: '530 Post Ct El Dorado Hills California, United States',
      status: 'Open'
    }
  ];

  // Filter vendors based on search term (name or ID)
  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.id.toString().includes(searchTerm)
  );

  // Render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa-solid fa-star ${i < Math.floor(rating) ? 'filled' : ''}`}
          />
        ))}
        <span>{rating.toFixed(2)} out of 5</span>
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

  return (
    <div className="body-root-inner">
      {/* Search area */}
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

      {/* Vendor table */}
      <div className="vendor-list-main-wrapper">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-responsive">
              <thead>
                <tr>
                  <th>Vendors</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map(vendor => (
                  <tr key={vendor.id}>
                    <td width="40%">
                      <a href="#" className="itemside">
                        <div className="left">
                          <Image
                            src={vendor.image}
                            className="img-sm img-avatar"
                            alt="Vendor"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="info pl-3">
                          <h6 className="title">{vendor.name}</h6>
                          <div className="stars-wrapper">
                            {renderStars(vendor.rating)}
                          </div>
                        </div>
                      </a>
                    </td>
                    <td>
                      <p>{vendor.address}</p>
                    </td>
                    <td>
                      <span className={vendor.status.toLowerCase()}>{vendor.status}</span>
                    </td>
                    <td className="text-end">
                      <a href="#" className="rts-btn btn-primary">
                        View details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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

export default VendorTable;