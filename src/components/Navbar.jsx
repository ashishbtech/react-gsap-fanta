import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-[10vh] px-[10vw]">
      <a href="#" className="text-[1vw] text-white no-underline">Logo</a>
      <div className="flex gap-[3vw]">
        <a href="#" className="text-[1vw] text-white no-underline">Home</a>
        <a href="#" className="text-[1vw] text-white no-underline">Products</a>
        <a href="#" className="text-[1vw] text-white no-underline">Shop</a>
        <a href="#" className="text-[1vw] text-white no-underline">Contact</a>
      </div>
      <i className="ri-menu-fill text-[1.5vw] text-white"></i>
    </nav>
  );
}