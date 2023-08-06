import React from "react";

async function Products() {
  await new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  return <div>Products</div>;
}

export default Products;
