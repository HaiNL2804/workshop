import React from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto flex mt-10">
        <div className="w-[80%]">
          <table className="w-full">
            <thead className="bg-[#F5F5F5] w-[843px] h-[56px]">
              <tr>
                <th className="text-left font-medium text-[16px]">Product</th>
                <th className="text-left font-medium text-[16px]">price</th>
                <th className="text-left font-medium text-[16px]">Quantity</th>
                <th className="text-left font-medium text-[16px]">Subtotal</th>
                <th className="text-left font-medium text-[16px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center">
                  {/* img , name sp */}
                  <img
                    src="/image 40.svg"
                    alt="Asgaard sofa"
                    className="w-[77px] h-[77px] mr-2"
                  />
                  <span className="font-medium text-[16px] text-[#A3A3A3]">
                    Asgaard sofa
                  </span>
                </td>
                <td className="text-left font-medium text-[16px] text-[#A3A3A3]">
                  25.000.000đ
                </td>
                <td className="text-left">1</td>
                <td className="text-left font-medium text-[16px] text-[#262626]">
                  25.000.000đ
                </td>
                <td className="">
                  <button className="text-red-500">
                    <FaTrashCanArrowUp />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* tổng giá trị giỏ hàng */}
        <div className="w-[20%] p-4 w-[406px] h-[279px] bg-[#F5F5F5] ml-8 font-medium">
          <h3 className="font-semibold text-[24px] text-[#262626]">
            Cart Total
          </h3>
          <hr className="my-4" />
          <div className="flex justify-between text-[#A3A3A3]">
            <span>Subtotal</span>
            <span>25.000.000đ</span>
          </div>
          <div className="flex justify-between text-[#EF4444] my-4">
            <span>Total</span>
            <span className="text-red-500 font-bold">25.000.000đ</span>
          </div>
          <button className="w-full border border-[#CA8A04] text-[#CA8A04] font-semibold text-[16px] py-2 mt-4 ">
            <Link to="/payment">Checkout</Link>
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
