"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  icon: string;
  children?: { title: string; href: string }[];
  href?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: "/assets/images-dashboard/icons/01.svg",
    children: [
      { title: "Main Demo", href: "/dashboard" },
      { title: "Coming Soon", href: "#" },
    ],
  },
  {
    title: "Order",
    icon: "/assets/images-dashboard/icons/09.svg",
    children: [
      { title: "Order", href: "/dashboard/order" },
      { title: "Order Details", href: "/dashboard/order-details" },
    ],
  },
  {
    title: "Product",
    icon: "/assets/images-dashboard/icons/02.svg",
    children: [
      { title: "Product List", href: "/dashboard/product-list" },
      { title: "Add Product", href: "/dashboard/add-product" },
    ],
    // children: [{ title: "Add Product", href: "/dashboard/add-product" }],
  },
  // {
  //   title: "Add Product",
  //   icon: "/assets/images-dashboard/icons/03.svg",
  // },
  {
    title: "Vendor",
    icon: "/assets/images-dashboard/icons/04.svg",
    children: [
      { title: "Vendor Grid", href: "/dashboard/vendor-grid" },
      { title: "Vendor List", href: "/dashboard/vendor-list" },
      { title: "Vendor Details", href: "/dashboard/vendor-details" },
      { title: "Create Vendors", href: "/dashboard/create-vendors" },
    ],
  },
  {
    title: "Transactions",
    icon: "/assets/images-dashboard/icons/06.svg",
    href: "/dashboard/transaction",
  },
  {
    title: "Reviews",
    icon: "/assets/images-dashboard/icons/07.svg",
    href: "/dashboard/review",
  },
  {
    title: "Brand",
    icon: "/assets/images-dashboard/icons/16.svg",
    href: "/dashboard/brand",
  },
  {
    title: "Payment",
    icon: "/assets/images-dashboard/icons/17.svg",
    href: "/dashboard/payment",
  },
  {
    title: "User Profile",
    icon: "/assets/images-dashboard/icons/05.svg",
    children: [
      { title: "Profile Setting", href: "/dashboard/profile-setting" },
      { title: "Log In", href: "/dashboard/log-in" },
      { title: "Registration", href: "/dashboard/registration" },
    ],
  },
];

const SidebarMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 means Dashboard open by default
  const pathname = usePathname();

  useEffect(() => {
    // Find the index of the menu item that has a child matching the current path
    const activeIndex = menuItems.findIndex((item) => {
      return item.children?.some((child) => {
        return pathname === child.href || (child.title === "Main Demo" && pathname === "/index");
      });
    });

    if (activeIndex !== -1) {
      setOpenIndex(activeIndex);
    }
  }, [pathname]);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <ul className="rts-side-nav-area-left menu-active-parent">
      {menuItems.map((item, index) => {
        const hasSubmenu = !!item.children?.length;
        const isOpen = openIndex === index;

        return (
          <li className="single-menu-item" key={index}>
            {hasSubmenu ? (
              <Link
                href="#"
                className={`with-plus ${isOpen ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(index);
                }}
              >
                <img src={item.icon} alt="icon" className="icon" />
                <p>{item.title}</p>
              </Link>
            ) : (
              <Link href={item.href || "#"}>
                <img src={item.icon} alt="icon" className="icon" />
                <p>{item.title}</p>
              </Link>
            )}

            {hasSubmenu && (
              <ul className={`submenu mm-collapse parent-nav ${isOpen ? "mm-show" : ""}`}>
                {item.children!.map((sub, subIndex) => {
                  const isActive = pathname === sub.href || (sub.title === "Main Demo" && pathname === "/index");
                  return (
                    <li key={subIndex}>
                      <Link
                        href={sub.href}
                        className={`mobile-menu-link ${isActive ? "active" : ""}`}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenu;