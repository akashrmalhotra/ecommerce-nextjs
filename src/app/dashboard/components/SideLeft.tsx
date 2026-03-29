// components/SideLeft.tsx
"use client";
import Image from 'next/image';
import SideMenu from "./SideMenu";
import Link from 'next/link';

interface SideLeftProps {
  collapsed: boolean;
}

function SideLeft({ collapsed }: SideLeftProps) {
  return (
    <div className={`sidebar_left ${collapsed ? 'collapsed' : ''}`}>
      <Link href="/dashboard" className="logo">
        <Image
          src="/assets/images-dashboard/logo/orrdr.svg"
          alt="logo"
          width={375}
          height={118}
          sizes="220px"
          priority
        />
      </Link>
      <SideMenu />
    </div>
  );
}

export default SideLeft;