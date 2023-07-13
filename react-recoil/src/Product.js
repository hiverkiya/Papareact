import React from "react";
import { useRecoilState } from "recoil";
import { basketState } from "./Atoms/basketState";

function Product({ id, title, price }) {
  const [basket, setBasket] = useRecoilState(basketState);
  const addProductToBasket = () => {
    setBasket({
      ...basket,
      items: [...basket.items, { id, title, price }],
    });
  };
  return (
    <div onClick={addProductToBasket}>
      <button>
        {title}-${price}
      </button>
    </div>
  );
}

export default Product;
