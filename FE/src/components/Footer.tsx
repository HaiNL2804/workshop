import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <footer className="mx-auto py-10">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="w-1/4">
            <img src="/logof.svg" alt="LongHai" className="mb-4" />
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>

          <div className="w-1/4">
            <h3 className="mb-4 font-bold">Sitemap</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/4">
            <h3 className="mb-4 font-bold">Help</h3>
            <p className="mb-2">Payment Options</p>
            <p className="mb-2">Returns</p>
            <p>Privacy Policies</p>
          </div>

          <div className="w-1/4">
            <h3 className="mb-4 font-bold">Location</h3>
            <p className="mb-2">support@euphoria.in</p>
            <p className="mb-2">Ahmedabad Main Road</p>
            <p>Udaipur, India - 313002</p>
          </div>
        </div>

        <hr className="my-6 border-gray-600 max-w-6xl mx-auto" />
        <p className="text-center">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
