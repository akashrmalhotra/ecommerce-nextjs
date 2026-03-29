"use client"
import React, { useState } from 'react';

type Permission = {
  name: string;
  allowed: boolean;
};

type Tab = 'account' | 'permission';

const VendorTable: React.FC = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState<Tab>('account');

  // Account form state
  const [accountForm, setAccountForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Permissions state
  const [permissions, setPermissions] = useState<Record<string, Permission>>({
    addProduct: { name: 'Add Product', allowed: false },
    updateProduct: { name: 'Update Product', allowed: false },
    deleteProduct: { name: 'Delete Product', allowed: false },
    applyProductDiscount: { name: 'Apply Product Discount', allowed: false },
    addCategory: { name: 'Add Category', allowed: false },
    updateCategory: { name: 'Update Category', allowed: false },
    deleteCategory: { name: 'Delete Category', allowed: false },
    applyCategoryDiscount: { name: 'Apply Category Discount', allowed: false }
  });

  const handleAccountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAccountForm(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePermissionChange = (permissionKey: string, allowed: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [permissionKey]: {
        ...prev[permissionKey],
        allowed
      }
    }));
  };

  return (
    <div className="body-root-inner">
      <h3>Create Vendors</h3>
      <ul
        className="nav nav-tabs best-selling-grocery justify-content-start"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('account')}
            className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeTab === 'account'}
          >
            Account
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('permission')}
            className={`nav-link ${activeTab === 'permission' ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeTab === 'permission'}
          >
            Permission
          </button>
        </li>
      </ul>

      {activeTab === 'account' && (
        <div className="account-area-dashboard">
          <form className="needs-validation user-add" noValidate>
            <h4>Account</h4>
            <div className="form-group row">
              <div className="col-xl-3 col-md-4">
                <label htmlFor="firstName">
                  <span>*</span> First Name
                </label>
              </div>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  id="firstName"
                  type="text"
                  value={accountForm.firstName}
                  onChange={handleAccountInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-3 col-md-4">
                <label htmlFor="lastName">
                  <span>*</span> Last Name
                </label>
              </div>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  id="lastName"
                  type="text"
                  value={accountForm.lastName}
                  onChange={handleAccountInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-3 col-md-4">
                <label htmlFor="email">
                  <span>*</span> Email
                </label>
              </div>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  value={accountForm.email}
                  onChange={handleAccountInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-3 col-md-4">
                <label htmlFor="password">
                  <span>*</span> Password
                </label>
              </div>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  value={accountForm.password}
                  onChange={handleAccountInputChange}
                  required
                  minLength={8}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-3 col-md-4">
                <label htmlFor="confirmPassword">
                  <span>*</span> Confirm Password
                </label>
              </div>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  id="confirmPassword"
                  type="password"
                  value={accountForm.confirmPassword}
                  onChange={handleAccountInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'permission' && (
        <div className="account-area-dashboard">
          <form className="needs-validation user-add">
            <h4>Permission</h4>
            <div className="permission-block">
              <div className="attribute-blocks mb--30">
                <h5 className="f-w-600 mb--30">Product Related Permission</h5>
                {Object.entries(permissions)
                  .filter(([key]) => key.includes('Product'))
                  .map(([key, permission]) => (
                    <div className="row" key={key}>
                      <div className="col-xl-3 col-sm-4">
                        <label>{permission.name}</label>
                      </div>
                      <div className="col-xl-9 col-sm-8">
                        <div className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                          <label className="d-block">
                            <input
                              className="radio_animated"
                              type="radio"
                              name={`permission-${key}`}
                              checked={permission.allowed}
                              onChange={() => handlePermissionChange(key, true)}
                            />
                            Allow
                          </label>
                          <label className="d-block">
                            <input
                              className="radio_animated"
                              type="radio"
                              name={`permission-${key}`}
                              checked={!permission.allowed}
                              onChange={() => handlePermissionChange(key, false)}
                            />
                            Deny
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="attribute-blocks">
                <h5 className="f-w-600 mb--30">Category Related Permission</h5>
                {Object.entries(permissions)
                  .filter(([key]) => key.includes('Category'))
                  .map(([key, permission]) => (
                    <div className="row" key={key}>
                      <div className="col-xl-3 col-sm-4">
                        <label>{permission.name}</label>
                      </div>
                      <div className="col-xl-9 col-sm-8">
                        <div className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                          <label className="d-block">
                            <input
                              className="radio_animated"
                              type="radio"
                              name={`permission-${key}`}
                              checked={permission.allowed}
                              onChange={() => handlePermissionChange(key, true)}
                            />
                            Allow
                          </label>
                          <label className="d-block">
                            <input
                              className="radio_animated"
                              type="radio"
                              name={`permission-${key}`}
                              checked={!permission.allowed}
                              onChange={() => handlePermissionChange(key, false)}
                            />
                            Deny
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </form>
        </div>
      )}
      <button className='rts-btn btn-primary mt--50'>Save Vendor</button>
    </div>
  );
};

export default VendorTable;