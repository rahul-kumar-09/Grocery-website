import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import CartCountBadge from "./CartCountBadge";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>

        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <IoIosSearch
            className="absolute right-0 top-0 mr-5 mt-4 text-gray-500"
            size={25}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon_wrapper">
            <CiUser />
          </div>

          <div className="icon_wrapper">
            <CiShoppingCart />
            <CartCountBadge size={"w-[25px] h-[25px]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
