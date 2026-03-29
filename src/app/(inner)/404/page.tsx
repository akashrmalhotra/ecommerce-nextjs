
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";

import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
  return (
    <div className="demo-one">
      <HeaderOne />

      <div className="error-area-main-wrapper rts-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-main-wrapper">
                <div className="thumbnail">
                  <img src="/assets/images/contact/01.png" alt="error" />
                </div>
                <div className="content-main">
                  <h2 className="title">This Page Can’t Be Found</h2>
                  <p>
                    Sorry, we couldn't find the page you where looking for. We suggest
                    that you return to homepage.
                  </p>
                  <a href="index.html" className="rts-btn btn-primary">
                    Back To Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <ShortService />
      <FooterOne />

    </div>
  );
}
