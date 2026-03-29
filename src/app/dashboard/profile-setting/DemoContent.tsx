"use client"
import { useState } from 'react';
import Image from 'next/image';

function DemoContent() {
  // tab
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <div className="profile-setting-area-main-wrapper">
      <h1 className="title">Profile Setting</h1>
      <div className="inner-profile-setting">
        <div className="left-setting-area">
          <div className="personal-info">
            <div className="thumbnail-img">
              <Image 
                src="/assets/images-dashboard/avatar/02.png" 
                alt="avatar" 
                width={80} 
                height={80}
              />
            </div>
            <div className="infor">
              <h2 className="title">Esther Howard</h2>
              <span className="design">Owner & Founder</span>
            </div>
          </div>
          <div className="tab-button-area-setting">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  onClick={() => setActiveTab('tab1')}
                  className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                >
                  <Image 
                    src="/assets/images-dashboard/icons/11.svg" 
                    alt="Edit Profile" 
                    width={20} 
                    height={20}
                  />
                  Edit Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  onClick={() => setActiveTab('tab2')}
                  className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                >
                  <Image 
                    src="/assets/images-dashboard/icons/12.svg" 
                    alt="Account Settings" 
                    width={20} 
                    height={20}
                  />
                  Account Settings
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  onClick={() => setActiveTab('tab3')}
                  className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                >
                  <Image 
                    src="/assets/images-dashboard/icons/13.svg" 
                    alt="Change Password" 
                    width={20} 
                    height={20}
                  />
                  Change Password
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  onClick={() => setActiveTab('tab4')}
                  className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                >
                  <Image 
                    src="/assets/images-dashboard/icons/14.svg" 
                    alt="Social Profile" 
                    width={20} 
                    height={20}
                  />
                  Social Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  onClick={() => setActiveTab('tab5')}
                  className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`}
                >
                  <Image 
                    src="/assets/images-dashboard/icons/15.svg" 
                    alt="Notification" 
                    width={20} 
                    height={20}
                  />
                  Notification
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content-area-user-setting">
          <div className="tab-content" id="myTabContent">
            {/* profile setting start */}
            {activeTab === 'tab1' && (
              <div>
                <div className="inner-content-setting-form">
                  <h3 className="title">Edit Profile</h3>
                  <p>Set Up Your Personal Information</p>
                  <form action="#">
                    <div className="half-input-wrapper">
                      <div className="single">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Esther Howard"
                        />
                      </div>
                      <div className="single">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="text" placeholder="(589) 8745 8745" />
                      </div>
                    </div>
                    <div className="half-input-wrapper">
                      <div className="single">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="text" placeholder="Email Address" />
                      </div>
                      <div className="single">
                        <label htmlFor="company">Company</label>
                        <input id="company" type="text" placeholder="Esther Howard" />
                      </div>
                    </div>
                    <div className="half-input-wrapper">
                      <div className="single">
                        <label htmlFor="adress">City</label>
                        <input id="adress" type="text" placeholder="Address" />
                      </div>
                      <div className="single">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" placeholder="City" />
                      </div>
                    </div>
                    <div className="half-input-wrapper">
                      <div className="single">
                        <label htmlFor="country">Country</label>
                        <input id="country" type="text" placeholder="USA" />
                      </div>
                      <div className="single">
                        <label htmlFor="code">Postal Code</label>
                        <input id="code" type="text" placeholder="Esther Howard" />
                      </div>
                    </div>
                    <div className="about-me-area-setting-area">
                      <label htmlFor="about">about-me</label>
                      <textarea
                        name="about-me"
                        id="about"
                        defaultValue={
                          'I am a UX/UI Designer offering services related to App, Mobile App, and Web Design. I will bring your concepts to life! I prioritize an "easy to use" experience when designing, and specialize in bringing a brand to life through colors, typography, and imagery.'
                        }
                      />
                      <div className="button-area">
                        <button className="rts-btn btn-primary">
                          Update Profile
                        </button>
                        <a href="#" className="rts-btn btn-primary">
                          Cancel
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {/* account setting start */}
            {activeTab === 'tab2' && (
              <div>
                <div className="account-setting-area-start">
                  <div className="rts--profile-picture-edit">
                    <div className="profile-left col-xl-4">
                      <div className="profile-image mb--30">
                        <h6 className="title">Change Your Profile Picture</h6>
                        <Image
                          id="rts_image"
                          src="/assets/images-dashboard/profile/profile-01.jpg"
                          alt="Profile-NFT"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="button-area">
                        <div className="brows-file-wrapper">
                          <input name="rts_images1" id="rts_images1" type="file" />
                          <label htmlFor="rts_images1" title="No File Choosen">
                            <span className="text-center color-white">
                              Upload Profile
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* change password area start */}
            {activeTab === 'tab3' && (
              <div>
                <div className="rts-change-password-area">
                  <form action="#" className="change-pass-form">
                    <div className="single">
                      <label htmlFor="oldpass">Old Password</label>
                      <input
                        id="oldpass"
                        type="password"
                        placeholder="Old Password"
                        required
                      />
                    </div>
                    <div className="single">
                      <label htmlFor="newpass">Create New Password</label>
                      <input
                        id="newpass"
                        type="password"
                        placeholder="New Password"
                      />
                    </div>
                    <div className="single">
                      <label htmlFor="renew">Re-New Password</label>
                      <input id="renew" type="password" placeholder="Confirm Password" />
                    </div>
                    <button className="rts-btn btn-primary">Save Changes</button>
                  </form>
                </div>
              </div>
            )}
            
            {/* social profile area start */}
            {activeTab === 'tab4' && (
              <div>
                <form action="#" className="social-media-edit-wrapper">
                  <div className="single">
                    <label htmlFor="fb">Facebook URL</label>
                    <input
                      id="fb"
                      type="text"
                      placeholder="Facebook URL"
                    />
                  </div>
                  <div className="single">
                    <label htmlFor="twitter">twitter URL</label>
                    <input id="twitter" type="text" placeholder="twitter URL" />
                  </div>
                  <div className="single">
                    <label htmlFor="linkedin">Linkedin URL</label>
                    <input id="linkedin" type="text" placeholder="Linkedin URL" />
                  </div>
                  <button className="rts-btn btn-primary">Save Changes</button>
                </form>
              </div>
            )}
            
            {/* notification area start */}
            {activeTab === 'tab5' && (
              <div>
                <ul className="notification__items">
                  {[2, 2, 3, 4, 5, 7, 7, 8, 9, 10].map((item) => (
                    <li key={item} className="single__items">
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={`/assets/images-dashboard/avatar/user${item % 5 === 0 ? '' : `-${item % 5}`}.svg`}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            MR.Crow Kader
                            <span className="time-ago">1.3 hrs ago</span>
                          </h5>
                          <div className="disc">
                            Lorem ipsum dolor amet cosec...
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* bottom footer areas start */}
      <div className="footer-copyright">
        <div className="left">
          <p>Copyright © 2025 All Right Reserved.</p>
        </div>
        <ul>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DemoContent;