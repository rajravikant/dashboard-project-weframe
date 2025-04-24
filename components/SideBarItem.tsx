import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SideBarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
        active ? "bg-[#1c1442] text-white" : "text-[#53545c] hover:bg-[#f4f4f4]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default SideBarItem;
