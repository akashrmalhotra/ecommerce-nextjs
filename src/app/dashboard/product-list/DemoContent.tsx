'use client';

import React, { useState, useRef, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface Product {
  id: number;
  name: string;
  productNo: string;
  category: string;
  price: string;
  date: string;
  stock: number;
  image: string;
}

const LOCAL_STORAGE_KEY = 'productTableData';

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<Product>>({});
  const [filterText, setFilterText] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Initialize products from localStorage or default data
  useEffect(() => {
    const savedProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const defaultProducts = [
        { id: 1, name: 'Rede Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/15.png' },
        { id: 2, name: 'Green Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$120', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/15.png' },
        { id: 3, name: 'Hree Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$125', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/17.png' },
        { id: 4, name: 'Kabir Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$133', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/18.png' },
        { id: 5, name: 'leer Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$132', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/19.png' },
        { id: 6, name: 'Purple Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/14.png' },
        { id: 7, name: 'Purple Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/17.png' },
        { id: 8, name: 'Purple Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/18.png' },
        { id: 9, name: 'Purple Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/17.png' },
        { id: 10, name: 'Purple Blue Gradient iPhone Case', productNo: '#87845', category: 'Electronics', price: '$200', date: '03/02/2022', stock: 250, image: '/assets/images-dashboard/grocery/19.png' },
      ];
      setProducts(defaultProducts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultProducts));
    }
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isInside = Array.from(dropdownRefs.current.values()).some(ref => ref && ref.contains(event.target as Node));
      if (!isInside) setActiveDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEdit = (id: number) => {
    const productToEdit = products.find(p => p.id === id);
    if (productToEdit) {
      setEditFormData(productToEdit);
      setEditProductId(id);
      setActiveDropdown(null);
    }
  };

  const handleSave = () => {
    if (!editProductId) return;
    const updatedProducts = products.map(product =>
      product.id === editProductId ? { ...product, ...editFormData } as Product : product
    );
    setProducts(updatedProducts);
    setEditProductId(null);
    setEditFormData({});
  };

  const handleCancel = () => {
    setEditProductId(null);
    setEditFormData({});
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setActiveDropdown(null);
  };

  const handleAddProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = {
      id: newId,
      name: 'New Product',
      productNo: `#${Math.floor(100000 + Math.random() * 900000)}`,
      category: 'Electronics',
      price: '$100',
      date: new Date().toLocaleDateString(),
      stock: 100,
      image: '/assets/images-dashboard/grocery/19.png'
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const columns: TableColumn<Product>[] = [
    {
      name: 'Product Name',
      selector: row => row.name,
      cell: row => (
        <div className="item-image-and-name editable">
          <a href="#" className="thumbnail">
            <img src={row.image} alt="grocery" />
          </a>
          {editProductId === row.id ? (
            <input
              type="text"
              value={editFormData.name || ''}
              onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
            />
          ) : (
            <p>{row.name}</p>
          )}
        </div>
      ),
    },
    {
      name: 'Product No',
      selector: row => row.productNo,
      cell: row => editProductId === row.id ? (
        <input
          type="text"
          value={editFormData.productNo || ''}
          onChange={(e) => setEditFormData({ ...editFormData, productNo: e.target.value })}
        />
      ) : (
        <p>{row.productNo}</p>
      ),
    },
    {
      name: 'Category',
      selector: row => row.category,
      cell: row => editProductId === row.id ? (
        <input
          type="text"
          value={editFormData.category || ''}
          onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
        />
      ) : (
        <p>{row.category}</p>
      ),
    },
    {
      name: 'Price',
      selector: row => row.price,
      cell: row => editProductId === row.id ? (
        <input
          type="text"
          value={editFormData.price || ''}
          onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
        />
      ) : (
        <p>{row.price}</p>
      ),
    },
    {
      name: 'Stock',
      selector: row => row.stock,
      cell: row => editProductId === row.id ? (
        <input
          type="number"
          value={editFormData.stock || 0}
          onChange={(e) => setEditFormData({ ...editFormData, stock: parseInt(e.target.value) || 0 })}
        />
      ) : (
        <p>{row.stock}</p>
      ),
    },
    {
      name: 'Action',
      cell: row => (
        <div style={{ position: 'relative' }}>
          <img
            src="/assets/images-dashboard/grocery/20.png"
            alt="menu"
            width={20}
            height={20}
            onClick={() => setActiveDropdown(prev => prev === row.id ? null : row.id)}
            style={{ cursor: 'pointer' }}
          />
          {activeDropdown === row.id && (
            <div
              className="action-edit-deleate"
              ref={(el) => {
                if (el) dropdownRefs.current.set(row.id, el);
                else dropdownRefs.current.delete(row.id);
              }}
              style={{ position: 'absolute', right: 0, background: '#fff', border: '1px solid #ddd', zIndex: 10 }}
            >
              {editProductId === row.id ? (
                <>
                  <span onClick={handleSave} style={{ display: 'block', padding: '5px 10px', cursor: 'pointer' }}>Save</span>
                  <span onClick={handleCancel} style={{ display: 'block', padding: '5px 10px', cursor: 'pointer' }}>Cancel</span>
                </>
              ) : (
                <>
                  <span onClick={() => handleEdit(row.id)} style={{ display: 'block', padding: '5px 10px', cursor: 'pointer' }}>Edit</span>
                  <span onClick={() => handleDelete(row.id)} style={{ display: 'block', padding: '5px 10px', cursor: 'pointer' }}>Delete</span>
                </>
              )}
            </div>
          )}
        </div>
      ),
    },
  ];

  const filteredItems = products.filter(
    item =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.productNo.toLowerCase().includes(filterText.toLowerCase()) ||
      item.category.toLowerCase().includes(filterText.toLowerCase()) ||
      item.price.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="body-root-inner">
      <div className="transection">
        <div className="title-right-actioin-btn-wrapper-product-list">
          <h3 className="title">Product</h3>
          <div className="button-wrapper">
            <button className="rts-btn btn-primary" onClick={handleAddProduct}>+ Add Product</button>
          </div>
        </div>
        <div className="product-top-filter-area-l">
          <div className="left-area-button-fiulter">
            <div className="signle-product-single-button"><span>All {products.length}</span></div>
            <div className="signle-product-single-button"><span>New Item {products.filter(p => p.name.includes('New')).length}</span></div>
          </div>
          <div className="right-area-search">
            <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        </div>
        <div className="vendor-list-main-wrapper product-wrapper">
          <div className="table-responsive">
            <DataTable
              columns={columns}
              data={filteredItems}
              selectableRows
              onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)}
              pagination
              paginationPerPage={rowsPerPage}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              noDataComponent="No products found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;