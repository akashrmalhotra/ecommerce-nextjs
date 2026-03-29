import Link from 'next/link';
import React from 'react';

function ComponentName() {
  return (
    <div>
<>
  {/* rts banner area about */}
  <div className="about-banner-area-bg rts-section-gap bg_iamge">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner-content-about-area">
            <h1 className="title">Do You Want To Know Us?</h1>
            <p className="disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pretium mollis ex, vel interdum augue faucibus sit amet. Proin
              tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
              finibus nunc ullamcorper et.
            </p>
            <Link href="/contact" className="rts-btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts banner area about end */}
</>

    </div>
  );
}

export default ComponentName;
