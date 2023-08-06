"use client";
import React from "react";
type Props = {
  product: Product;
};
function Product({ product }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.alert("Button Clicked");
  };

  return (
    <div>
      <div> Product is {product.title}</div>
      <div>Product price is ${product.price}</div>
      <button
        onClick={(e) => handleClick(e)}
        className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700"
      >
        {" "}
        Buy Now
      </button>
    </div>
  );
}

export default Product;
