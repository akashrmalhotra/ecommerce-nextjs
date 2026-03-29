"use client";

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import DataTable, { TableColumn } from 'react-data-table-component';

interface Review {
  id: number;
  productName: string;
  productNo: string;
  name: string;
  rating: number;
  image: string;
}

const ReviewsTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const reviews: Review[] = [
    {
      id: 1,
      productName: "Purples Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/14.png"
    },
    {
      id: 2,
      productName: "blue Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "mark Lion",
      rating: 4,
      image: "/assets/images-dashboard/grocery/15.png"
    },
    {
      id: 3,
      productName: "red Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Luri Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/17.png"
    },
    {
      id: 4,
      productName: "black Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Pabi Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/18.png"
    },
    {
      id: 5,
      productName: "matab Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Matab Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/14.png"
    },
    {
      id: 6,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Vagit Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/17.png"
    },
    {
      id: 7,
      productName: "marik Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "John Mas",
      rating: 5,
      image: "/assets/images-dashboard/grocery/15.png"
    },
    {
      id: 8,
      productName: "lord Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Tuhin Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },
    {
      id: 9,
      productName: "kuddu Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Moris Less",
      rating: 5,
      image: "/assets/images-dashboard/grocery/01.png"
    },
    {
      id: 10,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Kabira Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },
    {
      id: 11,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Luthina Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },
    {
      id: 12,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Janvi Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },    
    {
      id: 13,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "Luhas Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },   
    {
      id: 14,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },    
    {
      id: 15,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },    
    {
      id: 16,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },   
    {
      id: 17,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },    
    {
      id: 18,
      productName: "Purple Blue Gradient iPhone Case",
      productNo: "#87845",
      name: "David Lion",
      rating: 5,
      image: "/assets/images-dashboard/grocery/19.png"
    },
  ];

  const filteredReviews = reviews.filter((review) =>
    review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.productNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns: TableColumn<Review>[] = [
    {
      name: 'Product Name',
      selector: (row) => row.productName,
      sortable: true,
      cell: (row) => (
        <div className="item-check-area-table-left">
          <div className="item-image-and-name">
            <a href="#" className="thumbnail">
              <Image src={row.image} alt="grocery" width={50} height={50} />
            </a>
            <p>{row.productName}</p>
          </div>
        </div>
      ),
    },
    {
      name: 'Product No',
      selector: (row) => row.productNo,
      sortable: true,
      cell: (row) => <p>{row.productNo}</p>,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <div className="payment d-flex align-items-center">
          <p>{row.name}</p>
        </div>
      ),
    },
    {
      name: 'Rating',
      selector: (row) => row.rating,
      sortable: true,
      cell: (row) => (
        <div className="rating-table">
          <ul className="d-flex">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i className={`fa-solid fa-star ${i < row.rating ? 'text-warning' : ''}`} />
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className="between-stock-table action text-end">
          <a href="#" className="rts-btn btn-primary">Details</a>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="body-root-inner">
      <div className="vendor-grid-top-search-area">
        <h5 className="title">Our reviews</h5>
        <form action="#" className="input-area-search-head-vendor">
          <input
            type="text"
            placeholder="Search vendors (by name or ID)..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <a href="#" className="rts-btn btn-primary radious-sm with-icon">
            <div className="btn-text">Search</div>
            <div className="arrow-icon">
              <i className="fa-light fa-magnifying-glass" />
            </div>
          </a>
        </form>
      </div>

      <div className="vendor-list-main-wrapper">
        <div className="card-body">
          <div className="transection">
            <div className="vendor-list-main-wrapper product-wrapper">
              <div className="card-body table-product-select review-table">
                <div className="table-responsive">
                  <DataTable
                    columns={columns}
                    data={filteredReviews}
                    pagination
                    highlightOnHover
                    responsive
                    striped
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default ReviewsTable;
