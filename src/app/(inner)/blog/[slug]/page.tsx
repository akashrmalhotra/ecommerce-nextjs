"use client"
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import FooterOne from "@/components/footer/FooterOne";
import Posts from "@/data/Posts.json";
import { useParams } from 'next/navigation';

export default function Home() {


  const { slug } = useParams(); // Get the slug from URL parameters
  const blogPost = Posts.find(post => post.slug === slug);

  if (!blogPost) {
    return <div>Post not found Man!</div>;
  }



  return (
    <div className="demo-one">
      <HeaderOne />

      <div className="blog-sidebar-area rts-section-gap">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-lg-8 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="blog-details-area-1">
                <div className="thumbnail">
                  <img
                    src={`/assets/images/blog/${blogPost.bannerImg}`}
                    alt={blogPost.title}
                  />
                </div>
                <div className="body-content-blog-details">
                  <div className="top-tag-time">
                    <div className="single">
                      <i className="fa-solid fa-clock" />
                      <span>15 Sep, 2023</span>
                    </div>
                    <div className="single">
                      <i className="fa-solid fa-folder" />
                      <span>Organic Store</span>
                    </div>
                  </div>
                  <h1 className="title">{blogPost.title}</h1>
                  <p className="disc">Lorem ipsum dolor sit amet consectetur adipiscing elit donec nascetur, ultrices pellentesque magna venenatis diam ac malesuada velit, vitae interdum est condimentum auctor eget mattis egestas. Quisque tortor justo condimentum ultrices lobortis quis, placerat senectus enim tempor in malesuada sodales, aptent suscipit ante maecenas volutpat empus class quis nisi leo aliquet morbi aenean cubilia rutrum aptent ridiculus bibendum.</p>

                  <p className="disc">Et pellentesque venenatis aliquet morbi praesent penatibus justo sem velit blandit, sapien pretium duis suspendisse aliquam accumsan suscipit mauris lacinia, aenean orci magnis consequat montes vivamus habitant torquent nec.</p>
                  <p className="quote">“Integer posuere odio ullamcorper semper eu bibendum, sodales pharetra ac ornare proin auctor, quis phasellus curae fusce magnis. Molestie tempus fusce nullam feugiat nibh praesent porttitor, hac per natoque risus vivamus penatibus mi posuere, parturient congue non tempor gravida aliquet”</p>
                  <p className="disc">Molestie vestibulum sagittis torquent eget potenti diam vehicula, habitant a eros fusce urna penatibus tempus ultrices, mollis euismod montes porttitor curabitur senectus. Sagittis dis libero felis montes scelerisque quis dapibus tempus massa est elementum, ad congue tortor facilisi phasellus mus dictum purus per pretium. Tincidunt conubia mus in natoque quam proin faucibus congue, mattis purus placerat porta arcu nam platea class.</p>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="thumbnail-row-iamge">
                        <img src="/assets/images/blog/22.jpg" alt="" />
                        <img src="/assets/images/blog/23.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <p className="disc">Quisque curabitur vestibulum feugiat class natoque interdum lacus, himenaeos tellus diam vulputate cursus ultricies magna, cum tortor ullamcorper aliquet libero hendrerit. Montes tortor primis fringilla torquent iaculis dictumst vestibulum leo accumsan lacus himenaeos imperdiet, erat risus nullam nulla libero in magna curabitur nisi scelerisque vivamus tempor condimentum, ad eleifend magnis justo sed sociis ornare ante phasellus ac euismod.</p>

                  <div className="tag-social-share-wrapper-area-wrapper">
                    <div className="tags-area">
                      <span>Tags</span>
                      <button>Organic</button>
                      <button>Rings</button>
                      <button>Birthday</button>
                    </div>
                    <div className="social-icons">
                      <span>Social Icon</span>
                      <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="blog-details-author">
                    <div className="thumbnail">
                      <img src="/assets/images/blog/01.png" alt="" />
                    </div>
                    <div className="author-information">
                      <span>Author</span>
                      <h5 className="title">Venilla Walton</h5>
                      <p>Donec sollicitudin molestie malesuada…</p>
                      <div className="social">
                        <ul>
                          <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
                          <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                          <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="comment-replay-area-start">
                    <h3 className="title">03 Comments</h3>
                    <div className="single-comment-area">
                      <div className="thumbanil">
                        <img src="/assets/images/blog/02.png" alt="comment" />
                      </div>
                      <div className="comment-information">
                        <div className="top-area">
                          <div className="left">
                            <span>Sep 25, 2024</span>
                            <h5 className="title">Amalia Genner</h5>
                          </div>
                          <div className="replay">
                            <span>Replay</span>
                          </div>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna
                          justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit
                          tortor eget felis porttitor volutpat.
                        </p>
                      </div>
                    </div>
                    <div className="single-comment-area bottom pl--100 pl_sm--0 mt--50 pt--50">
                      <div className="thumbanil">
                        <img src="/assets/images/blog/03.png" alt="comment" />
                      </div>
                      <div className="comment-information">
                        <div className="top-area">
                          <div className="left">
                            <span>Sep 25, 2024</span>
                            <h5 className="title">Amalia Genner</h5>
                          </div>
                          <div className="replay">
                            <span>Replay</span>
                          </div>
                        </div>
                        <p className="disc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna
                          justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit
                          tortor eget felis porttitor volutpat.
                        </p>
                      </div>
                    </div>
                    <div className="contact-form-wrapper-1 mt--50">
                      <h3 className="title mb--20">Add a Review</h3>
                      <p>Your email address will not be published. Required fields are marked*</p>
                      <form action="#" className="contact-form-1">
                        <div className="contact-form-wrapper--half-area">
                          <div className="single">
                            <input type="text" placeholder="name*" />
                          </div>
                          <div className="single">
                            <input type="text" placeholder="Email*" />
                          </div>
                        </div>
                        <textarea
                          name="message"
                          placeholder="Write Message Here"
                          defaultValue={""}
                        />
                        <button className="rts-btn btn-primary mt--20">Submit Now</button>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 pl--60 order-lg-2 order-md-1 order-sm-1 order-1 pl_md--10 pl_sm--10 rts-sticky-column-item">
              <div className="blog-sidebar-single-wized">
                <form action="#">
                  <input type="text" placeholder="Search Here" required />
                  <button><i className="fa-regular fa-magnifying-glass" /></button>
                </form>
              </div>

              <div className="blog-sidebar-single-wized with-title">
                <h4 className="title">Categories</h4>
                <div className="category-main-wrapper">
                  <div className="single-category-area"><p>Baking Material</p></div>
                  <div className="single-category-area"><p>Bread and Juice</p></div>
                  <div className="single-category-area"><p>Clothing & Beauty</p></div>
                  <div className="single-category-area"><p>Fresh Vegetable</p></div>
                  <div className="single-category-area"><p>Fresh Seafood</p></div>
                  <div className="single-category-area"><p>Milks and Daires</p></div>
                  <div className="single-category-area"><p>Wine & Drinks</p></div>
                </div>
              </div>

              <div className="blog-sidebar-single-wized with-title">
                <h4 className="title">Latest Post</h4>
                <div className="latest-post-small-area-wrapper">
                  {[1, 2, 3].map((_, idx) => (
                    <div className="single-latest-post-area" key={idx}>
                      <a href="#" className="thumbnail">
                        <img src={`/assets/images/blog/thumb/0${idx + 1}.jpg`} alt="thumbnail" />
                      </a>
                      <div className="inner-content-area">
                        <div className="icon-top-area">
                          <i className="fa-light fa-clock" /><span>Sep 25, 2024</span>
                        </div>
                        <a href="#"><h5 className="title-sm-blog">Sample blog title {idx + 1}</h5></a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blog-sidebar-single-wized with-title">
                <h4 className="title">Tags</h4>
                <div className="tags-area-blog-short-main">
                  {["Shampoo", "Butter", "Birthday", "Gifts", "Facial", "Green", "Lotion", "Scrub"].map((tag, idx) => (
                    <button key={idx} className="single-category">{tag}</button>
                  ))}
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
