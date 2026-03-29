"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close popups when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target instanceof HTMLInputElement)
      ) {
        setActivePopup(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = (popupName: string) => {
    setActivePopup(activePopup === popupName ? null : popupName);
  };

  const notifications = [
    {
      id: 1,
      avatar: "/assets/images/avatar/user.svg",
      name: "MR.Crow Kader",
      time: "1.3 hrs ago",
      message: "Lorem ipsum dolor amet cosec..."
    },
  ];

  const languages = ["English", "Bangla", "Hindi", "Latin"];
  const profileMenu = [
    { icon: "fa-light fa-user", text: "Profile Setting", href: "profile-setting.html" },
    { icon: "fa-regular fa-gear", text: "Settings", href: "#" },
  ];

  return (
    <header className="dashboard-top-header">
      <div className="headerleft">
        <div className="collups-show-icon" onClick={onToggleSidebar}>
          <Image
            src="/assets/images-dashboard/icons/10.svg"
            alt="toggle sidebar"
            width={20}
            height={20}
          />
          <i className="fa-light fa-arrow-right" />
        </div>
      </div>
      <div className="header-right">
        <div className="action-interactive-area__header" ref={popupRef}>
          {/* Search */}
          <div
            className={`single_action__haeader search-action ${activePopup === 'search' ? 'active' : ''}`}
            onClick={() => togglePopup('search')}
          >
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path
                d="M18.1247 17.2413L13.4046 12.5213C14.5388 11.1596 15.1044 9.41313 14.9837 7.6451C14.863 5.87707 14.0653 4.22363 12.7566 3.02875C11.4479 1.83388 9.72885 1.18955 7.95716 1.22981C6.18548 1.27007 4.49752 1.99182 3.24442 3.24491C1.99133 4.498 1.26958 6.18597 1.22932 7.95765C1.18906 9.72934 1.83339 11.4483 3.02827 12.7571C4.22315 14.0658 5.87658 14.8635 7.64461 14.9842C9.41264 15.1049 11.1591 14.5393 12.5208 13.4051L17.2408 18.1251L18.1247 17.2413ZM2.49966 8.12515C2.49966 7.01263 2.82956 5.92509 3.44764 5.00006C4.06573 4.07504 4.94423 3.35407 5.97206 2.92833C6.9999 2.50258 8.1309 2.39119 9.22204 2.60823C10.3132 2.82527 11.3155 3.361 12.1021 4.14767C12.8888 4.93434 13.4245 5.93662 13.6416 7.02776C13.8586 8.11891 13.7472 9.24991 13.3215 10.2777C12.8957 11.3056 12.1748 12.1841 11.2497 12.8022C10.3247 13.4202 9.23718 13.7501 8.12466 13.7501C6.63332 13.7485 5.20354 13.1553 4.14901 12.1008C3.09448 11.0463 2.50131 9.61648 2.49966 8.12515Z"
                fill="#525252"
              />
            </svg>
            <div
              className="search-opoup slide-down__click"
              style={{ display: activePopup === 'search' ? 'block' : 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                placeholder="Search"
                ref={searchInputRef}
                onClick={(e) => e.stopPropagation()}
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>

          {/* Notification */}
          <div
            className={`single_action__haeader notification ${activePopup === 'notification' ? 'active' : ''}`}
            onClick={() => togglePopup('notification')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.25 8.75V10.3662L17.9419 12.0581C18.0591 12.1753 18.125 12.3343 18.125 12.5V14.375C18.125 14.5408 18.0592 14.6997 17.9419 14.8169C17.8247 14.9342 17.6658 15 17.5 15H13.125V15.625C13.125 16.4538 12.7958 17.2487 12.2097 17.8347C11.6237 18.4208 10.8288 18.75 10 18.75C9.1712 18.75 8.37634 18.4208 7.79029 17.8347C7.20424 17.2487 6.875 16.4538 6.875 15.625V15H2.5C2.33424 15 2.17527 14.9342 2.05806 14.8169C1.94085 14.6997 1.875 14.5408 1.875 14.375V12.5C1.87504 12.3343 1.94091 12.1753 2.05812 12.0581L3.75 10.3662V8.125C3.75201 6.57622 4.32822 5.08319 5.36721 3.93462C6.4062 2.78605 7.83417 2.06352 9.375 1.90675V0.625H10.625V1.90675C11.2723 1.97291 11.9051 2.14078 12.5 2.40419V3.80156C11.7409 3.36005 10.8786 3.12667 10.0005 3.12498C9.12225 3.1233 8.25916 3.35337 7.49832 3.79196C6.73749 4.23055 6.10585 4.86213 5.66719 5.62293C5.22853 6.38373 4.99839 7.2468 5 8.125V10.625C4.99996 10.7907 4.93409 10.9497 4.81687 11.0669L3.125 12.7588V13.75H16.875V12.7588L15.1831 11.0669C15.0659 10.9497 15 10.7907 15 10.625V8.75H16.25ZM11.3258 16.9508C11.6775 16.5992 11.875 16.1223 11.875 15.625V15H8.125V15.625C8.125 16.1223 8.32254 16.5992 8.67417 16.9508C9.02581 17.3025 9.50272 17.5 10 17.5C10.4973 17.5 10.9742 17.3025 11.3258 16.9508ZM18.75 5C18.75 6.38071 17.6307 7.5 16.25 7.5C14.8693 7.5 13.75 6.38071 13.75 5C13.75 3.61929 14.8693 2.5 16.25 2.5C17.6307 2.5 18.75 3.61929 18.75 5Z"
                fill="#083A5E"
              />
            </svg>
            <div
              className="notification_main_wrapper slide-down__click"
              style={{ display: activePopup === 'notification' ? 'block' : 'none' }}
            >
              <h3 className="title">Notification<span className="count">5</span></h3>
              <div className="notification__content">
                <ul className="notification__items">
                  {notifications.map((item) => (
                    <li className="single__items" key={item.id}>
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={item.avatar}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            {item.name}
                            <span className="time-ago">{item.time}</span>
                          </h5>
                          <div className="disc">
                            {item.message}
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}{notifications.map((item) => (
                    <li className="single__items" key={item.id}>
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={item.avatar}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            {item.name}
                            <span className="time-ago">{item.time}</span>
                          </h5>
                          <div className="disc">
                            {item.message}
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}{notifications.map((item) => (
                    <li className="single__items" key={item.id}>
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={item.avatar}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            {item.name}
                            <span className="time-ago">{item.time}</span>
                          </h5>
                          <div className="disc">
                            {item.message}
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}{notifications.map((item) => (
                    <li className="single__items" key={item.id}>
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={item.avatar}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            {item.name}
                            <span className="time-ago">{item.time}</span>
                          </h5>
                          <div className="disc">
                            {item.message}
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}{notifications.map((item) => (
                    <li className="single__items" key={item.id}>
                      <a className="single-link" href="#">
                        <div className="avatar">
                          <Image
                            src={item.avatar}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="main-content">
                          <h5 className="name-user">
                            {item.name}
                            <span className="time-ago">{item.time}</span>
                          </h5>
                          <div className="disc">
                            {item.message}
                            <span className="count" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div
            className={`single_action__haeader language user_avatar__information ${activePopup === 'language' ? 'active' : ''}`}
            onClick={() => togglePopup('language')}
          >
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.25 3.125V4.375H9.25C8.83816 6.14196 7.99661 7.77997 6.8 9.14375C7.70414 10.0661 8.79525 10.7843 10 11.25L9.55625 12.4C8.20367 11.8567 6.97802 11.0396 5.95625 10C4.9156 11.0255 3.68974 11.8442 2.34375 12.4125L1.875 11.25C3.07285 10.7429 4.16632 10.0182 5.1 9.1125C4.2552 8.08229 3.61842 6.89788 3.225 5.625H4.5375C4.85587 6.57383 5.3405 7.45844 5.96875 8.2375C6.93251 7.12787 7.6162 5.80335 7.9625 4.375H1.25V3.125H5.625V1.25H6.875V3.125H11.25ZM18.75 18.125H17.4062L16.4062 15.625H12.125L11.125 18.125H9.78125L13.5312 8.75H15L18.75 18.125ZM14.2625 10.275L12.625 14.375H15.9062L14.2625 10.275Z"
                fill="#083A5E"
              />
            </svg>
            <div
              className="user_information_main_wrapper slide-down__click language-area"
              style={{ display: activePopup === 'language' ? 'block' : 'none' }}
            >
              <ul className="select-language-area">
                {languages.map((lang) => (
                  <li key={lang}>
                    <a href="#">{lang}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Profile */}
          <div
            className={`single_action__haeader user_avatar__information ${activePopup === 'profile' ? 'active' : ''}`}
            onClick={() => togglePopup('profile')}
          >
            <div className="avatar">
              <Image
                src="/assets/images/avatar/01.png"
                alt="User Avatar"
                width={40}
                height={40}
              />
            </div>
            <div
              className="user_information_main_wrapper slide-down__click"
              style={{ display: activePopup === 'profile' ? 'block' : 'none' }}
            >
              <div className="user_header">
                <div className="main-avatar">
                  <Image
                    src="/assets/images/avatar/user-2.svg"
                    alt="User"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="user_naim-information">
                  <h3 className="title">MR.Crow Kader</h3>
                  <span className="desig">CEO, Valo How Masud</span>
                </div>
              </div>
              <div className="user_body_content">
                <ul className="items">
                  {profileMenu.map((item, index) => (
                    <li className="single_items" key={index}>
                      <a className="hader_popup_link" href={item.href}>
                        <i className={item.icon} />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="popup-footer-btn">
                <a href="#" className="geex-content__header__popup__footer__link">
                  Logout
                  <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}