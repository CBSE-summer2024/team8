import React from "react";
import { products } from "./mockData";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
