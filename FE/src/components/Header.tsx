import React from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
// import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center py-5">
          <div>
            <Link to="/">
              <img src="/logo.svg" alt="Hai Long" />
            </Link>
          </div>
          <nav>
            <ul className="flex justify-center space-x-12 text-[20px] font-medium">
              <li>
                <Link to="/" className="hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-red-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end space-x-4">
            <Link to="/auth/login">
              <AiOutlineUser className="text-[22px] hover:text-red-500" />
            </Link>
            <Link to="/search">
              <AiOutlineSearch className="text-[22px] hover:text-red-500" />
            </Link>
            <Link to="/wishlist">
              <AiOutlineHeart className="text-[22px] hover:text-red-500" />
            </Link>
            <Link to="/cart">
              <IoCartOutline className="text-[22px] hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
