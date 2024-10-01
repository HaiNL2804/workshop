import React, { useState } from "react";

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <div className="w-[1280px] mx-auto flex mt-8 mb-10">
      <div className="w-[60%] mr-8">
        <div className="font-semibold text-[40px] mb-8">Billing details </div>
        <div className="flex flex-wrap">
          <div className="w-[50%] p-2">
            <label className="block mb-2 font-medium font-[16px]">
              First Name
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-[50%] p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Last Name
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Company Name (Optional){" "}
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>

          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Country / Region
            </label>
            <select className="w-full p-2 border border-gray-300 text-[#A3A3A3]">
              <option>Sri Lanka</option>
            </select>
          </div>

          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Street address
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>

          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Town / City
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Province
            </label>
            <select className="w-full p-2 border border-gray-300 text-[#A3A3A3]">
              <option>Western Province</option>
            </select>
          </div>

          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              ZIP code
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">Phone</label>
            <input
              className="w-full p-2 border border-gray-300"
              type="text"
              placeholder=""
            />
          </div>

          <div className="w-full p-2">
            <label className="block mb-2 font-medium font-[16px]">
              Email address
            </label>
            <input
              className="w-full p-2 border border-gray-300"
              type="email"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="w-[40%] mt-20">
        <div className="flex justify-between">
          <div className="font-semibold text-[24px]">Product</div>
          <div className="font-semibold text-[24px] mr-4">Subtotal</div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between mt-2 ">
            <div className="text-[#A3A3A3]">
              Asgaard sofa <span>X1</span>
            </div>
            <div className="font-medium">25.000.000đ</div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="font-regular">Subtotal</div>
            <div className="font-medium">25.000.000đ</div>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <div className="font-regular">Total</div>
            <div className="text-[#B88E2F] font-bold">25.000.000đ</div>
          </div>
        </div>
        <hr className="my-6" />

        <div className="mt-4">
          <div className="flex flex-col">
            <label
              className={`mb-2 ${
                selectedPayment === "bank" ? "font-bold" : "font-regular"
              }`}
            >
              <input
                type="radio"
                name="payment"
                className="mr-2"
                onChange={() => setSelectedPayment("bank")}
              />
              Direct Bank Transfer
              {selectedPayment === "bank" && (
                <p className="text-[#A3A3A3] font-regular">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              )}
            </label>

            <label
              className={`mb-2 ${
                selectedPayment === "atm" ? "font-bold" : "font-regular"
              }`}
            >
              <input
                type="radio"
                name="payment"
                className="mr-2"
                onChange={() => setSelectedPayment("atm")}
              />
              ATM Bank Transfer
              {selectedPayment === "atm" && (
                <p className="text-[#A3A3A3] font-regular">Pay using ATM.</p>
              )}
            </label>

            <label
              className={`mb-2 ${
                selectedPayment === "cod" ? "font-bold" : "font-regular"
              }`}
            >
              <input
                type="radio"
                name="payment"
                className="mr-2"
                onChange={() => setSelectedPayment("cod")}
              />
              Cash On Delivery
              {selectedPayment === "cod" && (
                <p className="text-[#A3A3A3] font-regular">
                  Pay when you receive your order.
                </p>
              )}
            </label>
          </div>
          <p className="mt-6 font-regular ">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <strong>privacy policy</strong>.
          </p>
        </div>

        <div className="mt-6">
          <button className="w-full border border-[#CA8A04] bg-[#fff] py-2 text-[#CA8A04] font-semibold">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
