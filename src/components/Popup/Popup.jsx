import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Form Section */}
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  className="w-full border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="w-full border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  autoComplete="off"
                  className="w-full border rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                />

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
