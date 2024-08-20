import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: `${product.price} ₪`,
           image: product.thumbnail,
          url: `/product/${product.id}`,   
          productRef: product.id.toString(),
          discount: product.discountPercentage ? `Discount: ${product.discountPercentage}%` : "",
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ul className="product-list row">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
