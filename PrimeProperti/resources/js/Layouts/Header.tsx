// resources/js/Components/Header.tsx
import React from 'react';
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import {FaSignOutAlt } from "react-icons/fa";

interface Props {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: Props) {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <button
        className="lg:hidden text-gray-600"
        onClick={onToggleSidebar}
      >
        {/* Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="text-gray-600"> <Link href={route("logout")} method="post" as="button">
 <FaSignOutAlt />
</Link>
</div>
       
    </header>
  );
}
