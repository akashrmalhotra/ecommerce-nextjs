'use client';
import Image from 'next/image';
import { useState } from 'react';

const ProductTable = () => {
  // State to track which payment methods are enabled
  const [enabledMethods, setEnabledMethods] = useState<Record<string, boolean>>({
    woo: false,
    paypal: false,
    transfer: false,
    check: false,
    cash: false,
  });

  // Toggle function for enabling/disabling payment methods
  const togglePaymentMethod = (method: string) => {
    setEnabledMethods(prev => ({
      ...prev,
      [method]: !prev[method]
    }));
  };

  return (
    <div className="body-root-inner">
      <h3 className="title">Payment Method</h3>

      {/* Woo Payment */}
      <div className="single-payment">
        <div className='brand-logo'>
          <Image
            src="/assets/images-dashboard/payment/woo.png"
            alt="Woo payment logo"
            className="one"
            width={100}
            height={100}
          />
        </div>
        <div className="inner-content">
          <h5>Accept Payment With Woo</h5>
          <p>Credit/Debit cards, Apple Pay, Google Pay, and more.</p>
          <Image
            src="/assets/images/payment/01.png"
            alt="Payment options"
            className="one"
            width={500}
            height={100}
          />
        </div>
        <button
          onClick={() => togglePaymentMethod('woo')}
          className={`rts-btn ${enabledMethods.woo ? 'btn-success' : 'btn-primary'}`}
        >
          {enabledMethods.woo ? 'Disable' : 'Enable'}
        </button>
      </div>

      {/* PayPal Payment */}
      <div className="single-payment">
        <div className='brand-logo'>
          <Image
            src="/assets/images-dashboard/payment/paypal.webp"
            alt="PayPal logo"
            className="one"
            width={100}
            height={100}
          />
        </div>
        <div className="inner-content">
          <h5>Accept Payment With Paypal</h5>
          <p>Credit/Debit cards, Apple Pay, Google Pay, and more.</p>
          <Image
            src="/assets/images/payment/01.png"
            alt="Payment options"
            className="one"
            width={400}
            height={100}
          />
        </div>
        <button
          onClick={() => togglePaymentMethod('paypal')}
          className={`rts-btn ${enabledMethods.paypal ? 'btn-success' : 'btn-primary'}`}
        >
          {enabledMethods.paypal ? 'Disable' : 'Enable'}
        </button>
      </div>

      {/* Bank Transfer */}
      <div className="single-payment">
        <div className='brand-logo'>
          <Image
            src="/assets/images-dashboard/payment/transfer.png"
            alt="Bank transfer logo"
            className="one"
            width={100}
            height={100}
          />
        </div>
        <div className="inner-content">
          <h5>Direct Bank Transfer</h5>
          <p>Take payment in person via BASC. More commonly known as direct bank/wire transfer</p>
        </div>
        <button
          onClick={() => togglePaymentMethod('transfer')}
          className={`rts-btn ${enabledMethods.transfer ? 'btn-success' : 'btn-primary'}`}
        >
          {enabledMethods.transfer ? 'Disable' : 'Enable'}
        </button>
      </div>

      {/* Check Payment */}
      <div className="single-payment">
        <div className='brand-logo'>
          <Image
            src="/assets/images-dashboard/payment/check.png"
            alt="Check payment logo"
            className="one"
            width={100}
            height={100}
          />
        </div>
        <div className="inner-content">
          <h5>Check Payment</h5>
          <p>Take payment in person via Checks. This offline gateway can also be useful to test purchases.</p>
        </div>
        <button
          onClick={() => togglePaymentMethod('check')}
          className={`rts-btn ${enabledMethods.check ? 'btn-success' : 'btn-primary'}`}
        >
          {enabledMethods.check ? 'Disable' : 'Enable'}
        </button>
      </div>

      {/* Cash on Delivery */}
      <div className="single-payment">
        <div className='brand-logo'>
          <Image
            src="/assets/images-dashboard/payment/cash.png"
            alt="Cash on delivery logo"
            className="one"
            width={100}
            height={100}
          />
        </div>
        <div className="inner-content">
          <h5>Cash On Delivery</h5>
          <p>Let your shoppers pay upon delivery - by cash or other methods of payment.</p>
        </div>
        <button
          onClick={() => togglePaymentMethod('cash')}
          className={`rts-btn ${enabledMethods.cash ? 'btn-success' : 'btn-primary'}`}
        >
          {enabledMethods.cash ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
};

export default ProductTable;