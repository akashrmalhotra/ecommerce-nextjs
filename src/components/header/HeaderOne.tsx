
"use client";
import React, { useState, useEffect, useRef } from "react";
import HeaderNav from "./HeaderNav";
import CategoryMenu from "./CategoryMenu";
import Cart from "./Cart";
import WishList from "./WishList";
import Sidebar from "./Sidebar";
import BackToTop from "@/components/common/BackToTop";
import { useCompare } from "@/components/header/CompareContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

function HeaderOne() {
  const { compareItems } = useCompare();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<
    { id: number; title: string; slug: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  

  // 🔥 Auto Slug Function
  const makeSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // Example data (id + title + slug)
  const allSuggestions = [
    { id: 1, title: "Profitable business makes your profit Best Solution" },
    { id: 2, title: "Details Profitable business makes your profit" },
    { id: 3, title: "One Profitable business makes your profit" },
    { id: 4, title: "Me Profitable business makes your profit" },
    { id: 5, title: "Details business makes your profit" },
    { id: 6, title: "Firebase business makes your profit" },
    { id: 7, title: "Netlyfy business makes your profit" },
    { id: 8, title: "Profitable business makes your profit" },
    { id: 9, title: "Valuable business makes your profit" },
    { id: 10, title: "System business makes your profit" },
    { id: 11, title: "Profitables business makes your profit" },
    { id: 12, title: "Content business makes your profit" }
  ].map((item) => ({
    ...item,
    slug: makeSlug(item.title) // auto generate 🔥
  }));

  const suggestionRef = useRef<HTMLUListElement>(null);
  // Suggestion filter
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = allSuggestions.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Suggestion click open item page
  const handleSuggestionClick = (slug: string) => {
    setTimeout(() => setShowSuggestions(false), 120);
    router.push(`/shop/${slug}`);
    };

  // Submit search form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    } else {
      router.push("/shop");
    }
  };

  // Hide suggestion when clicked outside
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      suggestionRef.current &&
      !suggestionRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);

  // Countdown UI
  useEffect(() => {
    const countDownElements =
      document.querySelectorAll<HTMLElement>(".countDown");
    const endDates: Date[] = [];

    const calcTime = (ms: number) => {
      const seconds = Math.floor(ms / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return [days, hours, minutes, secs].map((v) =>
        v.toString().padStart(2, "0")
      );
    };

    const renderDisplay = (arr: string[]) =>
      arr
        .map(
          (item) =>
            `<div class='container'><div class='a'><div>${item}</div></div></div>`
        )
        .join("");

    countDownElements.forEach((el) => {
      const match = el.innerText.match(
        /([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/
      );
      if (!match) return;

      const end = new Date(
        +match[3],
        +match[1] - 1,
        +match[2],
        +match[4],
        +match[5],
        +match[6]
      );

      endDates.push(end);

      if (end > new Date()) {
        const next = calcTime(end.getTime() - Date.now());
        el.innerHTML = renderDisplay(next);
      } else {
        el.innerHTML = `<p class="end">Sorry, expired!</p>`;
      }
    });

    const interval = setInterval(() => {
      countDownElements.forEach((el, i) => {
        const end = endDates[i];
        if (!end) return;
        const diff = end.getTime() - Date.now();
        if (diff <= 0) {
          el.innerHTML = `<p class="end">Sorry, expired!</p>`;
        } else {
          el.innerHTML = calcTime(diff)
            .map(
              (item) =>
                `<div class='container'><div class='a'><div>${item}</div></div></div>`
            )
            .join("");
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="rts-header-one-area-one">
        {/* top bar */}
                <div className="header-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bwtween-area-header-top">
                                    <div className="discount-area">
                                        <p className="disc">
                                            FREE delivery &amp; 40% Discount for next 3 orders! Place your 1st order in.
                                        </p>
                                        <div className="countdown">
                                            <div className="countDown">02/02/2026 10:20:00</div>
                                        </div>
                                    </div>
                                    <div className="contact-number-area">
                                        <p>Need help? Call Us: <a href="tel:+4733378901">+912 4546 5645</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mid bar */}
                <div className="header-mid-one-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-mid-wrapper-between">
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/account">My Account</Link></li>
                                            <li><Link href="/wishlist">Wishlist</Link></li>
                                        </ul>
                                        <p className="para">We deliver to your everyday from 7:00 to 22:00</p>
                                    </div>
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top language">
                                            <li className="category-hover-header language-hover">
                                                <a href="#">English</a>
                                                <ul className="category-sub-menu">
                                                    <li><a href="#"><span>Italian</span></a></li>
                                                    <li><a href="#"><span>Russian</span></a></li>
                                                    <li><a href="#"><span>Chinian</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="category-hover-header language-hover">
                                                <a href="#">INR</a>
                                                <ul className="category-sub-menu">
                                                    <li><a href="#"><span>INR (₹)</span></a></li>
                                                    <li><a href="#"><span>USD ($)</span></a></li>
                                                    <li><a href="#"><span>EUR (€)</span></a></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/trackorder">Track Order</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* logo + search */}
                <div className="search-header-area-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper">
                                    <Link href="/" className="logo-area">
                                        <img src="/assets/images/logo/orrdr.svg" alt="logo-main" className="logo" />
                                    </Link>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header">
                                            <img className="parent" src="/assets/images/icons/bar-1.svg" alt="icons" />
                                            <span>Categories</span>
                                            <CategoryMenu />
                                        </div>
                                        {/* Search Input Autocomplete */}
                                        <form onSubmit={handleSubmit} className="search-header" autoComplete="off">
                                        <input
                                            ref={inputRef}
                                        type="text"
                                        placeholder="Search for products..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
                                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                        />

                                        {showSuggestions && suggestions.length > 0 && (
                                            <ul id="suggestion-box"
                                               ref={suggestionRef}
                                                style={{
                                                position: "absolute",
                                                top: "48px",
                                                width: "100%",
                                                background: "#fff",
                                                border: "1px solid #ccc",
                                                borderRadius: "6px",
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0,
                                                zIndex: 100,
                                                maxHeight: "220px",
                                                overflowY: "auto",
                                                }}
                                            >
                                                {suggestions.map((item) => (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                    padding: 0,
                                                    cursor: "pointer",
                                                    borderBottom: "1px solid #eee",
                                                    }}
                                                >
                                                    <Link
                                                    href={`/shop/${item.slug}`}
                                                    style={{
                                                        display: "block",
                                                        width: "100%",
                                                        height: "100%",
                                                        padding: "10px",
                                                    }}
                                                    onClick={() => handleSuggestionClick(item.slug)}
                                                    >
                                                    {item.title}
                                                    </Link>
                                                </li>
                                                ))}
                                            </ul>
                                            )}
                                        </form>
                                    </div>
                                    <div className="actions-area">
                                        <div className="search-btn" id="searchs">
                                            <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25" />
                                            </svg>
                                        </div>
                                        <div className="menu-btn" id="menu-btn">
                                            <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y={14} width={20} height={2} fill="#1F1F25" />
                                                <rect y={7} width={20} height={2} fill="#1F1F25" />
                                                <rect width={20} height={2} fill="#1F1F25" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="accont-wishlist-cart-area-header">
                                        <Link href="/account" className="btn-border-only account">
                                            <i className="fa-light fa-user" />
                                            <span>Account</span>
                                        </Link>
                                        <Link href="/shop-compare" className="btn-border-only account compare-number">
                                            <i className="fa-regular fa-code-compare" />
                                            <span className="number">{compareItems.length}</span>
                                        </Link>
                                        <WishList />
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <HeaderNav />
      </div>

      <Sidebar />
      <BackToTop />
    </>
  );
}

export default HeaderOne;

