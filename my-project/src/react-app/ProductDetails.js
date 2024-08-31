// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-details">
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: {product.price} </p>
//       <p>Discount: {product.discountPercentage ? `${product.discountPercentage}%` : 'None'}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default ProductDetails;
