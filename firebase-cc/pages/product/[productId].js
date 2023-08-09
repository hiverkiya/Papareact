import { useRouter } from "next/router";
import React from "react";

function ProductPage() {
  const router = useRouter();
  return (
    <div>
      <h1> The Product ID is {router.query.productId}</h1>
    </div>
  );
}

export default ProductPage;
