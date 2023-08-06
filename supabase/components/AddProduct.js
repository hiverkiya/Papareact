import React, { useRef } from "react";

import supabase from "../supabase";

function AddProduct() {
  const titleRef = useRef();
  const priceRef = useRef();
  const addProduct = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Product")
      .insert([
        { title: titleRef.current.value, price: priceRef.current.value },
      ]);
    console.log("Added product");
  };
  return (
    <div>
      <form className="flex flex-col justify-center">
        <input
          className="p-2 border-black border"
          ref={titleRef}
          type="text"
          placeholder="Title"
        />

        <input
          className="p-2 border-black border"
          ref={priceRef}
          type="number"
          placeholder="Price"
        />
      </form>
      <button
        className=" p-1 border-black border"
        type="submit"
        onClick={addProduct}
      >
        Add a Product
      </button>
    </div>
  );
}

export default AddProduct;
