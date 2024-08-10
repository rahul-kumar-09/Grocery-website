import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />

      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 gap-[2px] text-[20px]">
          <CiShoppingCart />
          <CiShoppingCart />
          <CiShoppingCart />
          <CiShoppingCart />
          <HiOutlineShoppingBag />
        </div>
        <h3 className="font-medium ">{name}</h3>
        <div className="text-2xl font-medium text-red-600">{price}</div>
        <div className="absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <HiOutlineShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
