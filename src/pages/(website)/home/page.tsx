import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <div>
        <img src="/home.svg" alt="" className="w-full" />
      </div>
      {/* New Products */}
      <section>
        {/* Top */}
        <div className="w-[1280px] flex justify-between items-center px-1 mb-4 mx-auto mt-16 mb-8">
          <h2 className="text-40px text-[#262626] font-semibold">
            New Products
          </h2>
          <a>
            <Link
              to="/product_detail"
              className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04]  hover:text-white"
            >
              View all products
            </Link>
          </a>
        </div>
        {/* Products */}
        <div className="w-[1280px] flex justify-between mx-auto mb-16">
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img className="h-full w-full" src="/products.svg" alt="" />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">
                <Link to="/product_detail">Syltherine</Link>
              </h3>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src="/products.svg"
                  alt=""
                />
              </div>
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">
                <Link to="/product_detail">Syltherine</Link>
              </h3>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img className="h-full w-full" src="/products.svg" alt="" />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">
                <Link to="/product_detail">Syltherine</Link>
              </h3>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img className="h-full w-full" src="/products.svg" alt="" />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">
                <Link to="/product_detail">Syltherine</Link>
              </h3>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section>
        {/* Top */}
        <div className="max-w-[1280px] flex justify-between items-center px-1 mb-8 mx-auto">
          <h2 className="text-40px text-[#262626] font-semibold">Gallery</h2>
          <a>
            <Link
              to="/product_detail"
              className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
            >
              View all gallery
            </Link>
          </a>
        </div>
        {/* Gallery product */}
        <div className="max-w-[1280px] grid grid-cols-3 gap-4 mx-auto mb-16">
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
          <div>
            <img src="./gallery.svg" alt="" />
          </div>
        </div>
      </section>
      {/* News */}
      <section>
        {/* Top */}
        <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
          <h2 className="text-40px text-[#262626] font-semibold">News</h2>
          <a>
            <Link
              to="/product_detail"
              className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
            >
              View all news
            </Link>
          </a>
        </div>
        {/* News product */}
        <div className="w-[1280px] flex justify-between mx-auto mb-16">
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/products.svg"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  A bedroom must have something like this
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/products.svg"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  A bedroom must have something like this
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/products.svg"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  A bedroom must have something like this
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/products.svg"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  A bedroom must have something like this
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* phần cuối */}
      <section className="bg-[#FFF7ED] mt-16">
        <div className="max-w-[1280px] h-auto flex justify-between items-center mx-auto pt-16 pb-60px">
          <div className="flex items-center">
            <div>
              <img src="/cup.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                High Quality
              </h3>
              <p className="text-base text-[#898989]">
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/vector.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                24 / 7 Support
              </h3>
              <p className="text-base text-[#898989]">Dedicated support</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="tich.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                Warranty Protection
              </h3>
              <p className="text-base text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/free.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                Free Shipping
              </h3>
              <p className="text-base text-[#898989]">Order over 150 $</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
