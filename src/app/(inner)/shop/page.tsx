"use client";
import HeaderOne from "@/components/header/HeaderOne";
import { useState, Suspense } from 'react';
import ShopMain from "./ShopMain";
import ShopMainList from "./ShopMainList";
import Product from '@/data/Product.json';
import FooterOne from "@/components/footer/FooterOne";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

interface PostType {
  category?: string;
  slug: string;
  image: string;
  title?: string;
  author?: string;
  publishedDate?: string;
  price?: string;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(150);

  const allCategories = ["Beverages", "Biscuits & Snacks", "Breads & Bakery"];
  const allBrands = ["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"];

  const categoryProductIndices: { [key: string]: number[] } = {
    "Beverages": [1, 3, 4, 5, 6, 7],
    "Biscuits & Snacks": [8, 9, 10, 12, 16],
    "Breads & Bakery": [15, 1, 2, 3],
  };

  const brandProductIndices: { [key: string]: number[] } = {
    "Frito Lay": [1, 3, 4],
    "Nespresso": [3, 1, 4],
    "Oreo": [8, 9, 10],
    "Quaker": [3, 4, 10],
    "Welch's": [8, 9, 1],
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) setMinPrice(val);
  };
  
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) setMaxPrice(val);
  };

  const getFilteredByCategoryProducts = (): PostType[] => {
    if (selectedCategories.length === 0) {
      const allIndices = Object.values(categoryProductIndices).flat();
      const uniqueIndices = Array.from(new Set(allIndices));
      return uniqueIndices.map(i => Product[i]).filter(Boolean);
    }

    const selectedIndices = selectedCategories
      .map(cat => categoryProductIndices[cat] || [])
      .flat();
    const uniqueSelectedIndices = Array.from(new Set(selectedIndices));
    return uniqueSelectedIndices.map(i => Product[i]).filter(Boolean);
  };

  const getFilteredByBrandProducts = (): PostType[] => {
    if (selectedBrands.length === 0) {
      return Product;
    }

    const selectedIndices = selectedBrands
      .map(brand => brandProductIndices[brand] || [])
      .flat();
    const uniqueSelectedIndices = Array.from(new Set(selectedIndices));
    return uniqueSelectedIndices.map(i => Product[i]).filter(Boolean);
  };

  const productsByCategory = getFilteredByCategoryProducts();
  const productsByBrand = getFilteredByBrandProducts();

  const categorySlugs = new Set(productsByCategory.map(p => p.slug));
  const brandSlugs = new Set(productsByBrand.map(p => p.slug));

  let combinedFilteredProducts = [];

  if (selectedCategories.length > 0 && selectedBrands.length > 0) {
    combinedFilteredProducts = productsByCategory.filter(p => brandSlugs.has(p.slug));
  } else if (selectedCategories.length > 0) {
    combinedFilteredProducts = productsByCategory;
  } else if (selectedBrands.length > 0) {
    combinedFilteredProducts = productsByBrand;
  } else {
    const allIndices = Object.values(categoryProductIndices).flat();
    const uniqueIndices = Array.from(new Set(allIndices));
    combinedFilteredProducts = uniqueIndices.map(i => Product[i]).filter(Boolean);
  }

  const filteredProducts: PostType[] = combinedFilteredProducts
    .filter(product => {
      const productPrice = product.price ? parseFloat(product.price) : 0;
      if (productPrice < minPrice || productPrice > maxPrice) {
        return false;
      }

      if (!searchQuery) return true;
      const title = product.title?.toLowerCase() || '';
      const category = product.category?.toLowerCase() || '';
      return title.includes(searchQuery) || category.includes(searchQuery);
    });

  const handlePriceFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="shop-page">
      {/* Breadcrumb */}
      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <Link href="/">Home</Link>
                <i className="fa-regular fa-chevron-right" />
                <a className="current" href="#">Shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-seperator bg_light-1">
        <div className="container">
          <hr className="section-seperator" />
        </div>
      </div>

      <div className="shop-grid-sidebar-area rts-section-gap">
        <div className="container">
          <div className="row g-0">
            {/* Sidebar */}
            <div className="col-xl-3 col-lg-12 pr--70 pr_lg--10 pr_sm--10 pr_md--5 rts-sticky-column-item">
              <div className="sidebar-filter-main theiaStickySidebar">
                {/* Price Filter */}
                <div className="single-filter-box">
                  <h5 className="title">Widget Price Filter</h5>
                  <div className="filterbox-body">
                    <form
                      action="#"
                      className="price-input-area"
                      onSubmit={handlePriceFilterSubmit}
                    >
                      <div className="half-input-wrapper">
                        <div className="single">
                          <label htmlFor="min">Min price</label>
                          <input
                            id="min"
                            type="number"
                            value={minPrice}
                            min={0}
                            onChange={handleMinPriceChange}
                          />
                        </div>
                        <div className="single">
                          <label htmlFor="max">Max price</label>
                          <input
                            id="max"
                            type="number"
                            value={maxPrice}
                            min={0}
                            onChange={handleMaxPriceChange}
                          />
                        </div>
                      </div>
                      <input
                        type="range"
                        className="range"
                        min={0}
                        max={150}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
                      />
                      <div className="filter-value-min-max">
                        <span>
                          Price: ${minPrice} — ${maxPrice}
                        </span>
                        <button type="submit" className="rts-btn btn-primary">
                          Filter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Categories */}
                <div className="single-filter-box">
                  <h5 className="title">Product Categories</h5>
                  <div className="filterbox-body">
                    <div className="category-wrapper ">
                      {allCategories.map((cat, i) => (
                        <div className="single-category" key={i}>
                          <input
                            id={`cat${i + 1}`}
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                          />
                          <label htmlFor={`cat${i + 1}`}>{cat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="single-filter-box">
                  <h5 className="title">Select Brands</h5>
                  <div className="filterbox-body">
                    <div className="category-wrapper">
                      {allBrands.map((brand, i) => (
                        <div className="single-category" key={i}>
                          <input
                            id={`brand${i + 1}`}
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                          />
                          <label htmlFor={`brand${i + 1}`}>{brand}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-9 col-lg-12">
              <div className="filter-select-area">
                <div className="top-filter">
                  <span>Showing {filteredProducts.length} results</span>
                  <div className="right-end">
                    <span>Sort: Short By Latest</span>
                    <div className="button-tab-area">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            onClick={() => setActiveTab('tab1')}
                            className={`nav-link single-button ${activeTab === 'tab1' ? 'active' : ''}`}
                          >
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                              <rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                              <rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                              <rect x="9.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                              <rect x="9.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            onClick={() => setActiveTab('tab2')}
                            className={`nav-link single-button ${activeTab === 'tab2' ? 'active' : ''}`}
                          >
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                              <rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3C28" />
                              <rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3C28" />
                              <rect x={9} y={3} width={7} height={1} fill="#2C3C28" />
                              <rect x={9} y={12} width={7} height={1} fill="#2C3C28" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid or List view */}
              <div className="tab-content" id="myTabContent">
                <div className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active">
                  {activeTab === 'tab1' && (
                    <div className="row g-4">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((post: PostType, index: number) => (
                          <div key={index} className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-shopping-card-one">
                              <ShopMain
                                Slug={post.slug}
                                ProductImage={post.image}
                                ProductTitle={post.title}
                                Price={post.price}
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-12 text-center py-5">
                          <h2>No Product Found</h2>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="product-area-wrapper-shopgrid-list with-list mt--20">
                  {activeTab === 'tab2' && (
                    <div className="row">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((post: PostType, index: number) => (
                          <div key={index} className="col-lg-6">
                            <div className="single-shopping-card-one discount-offer">
                              <ShopMainList
                                Slug={post.slug}
                                ProductImage={post.image}
                                ProductTitle={post.title}
                                Price={post.price}
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-12 text-center py-5">
                          <h2>No Product Found</h2>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeaderOne />
      <Suspense fallback={
        <div className="text-center py-20">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      }>
        <ShopContent />
      </Suspense>
      <FooterOne />
    </>
  );
}