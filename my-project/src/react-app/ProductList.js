// // src/react-app/ProductList.js
// import React, { useEffect, useState } from 'react';
// import Modal from './Modal'; // Import the Modal component

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

//   useEffect(() => {
//     console.log('ProductList mounted');
    
//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => {
//         console.log('Fetched Products:', data); // Log the fetched data
//         const formattedProducts = data.products.map(product => ({
//           id: product.id,
//           title: product.title,
//           price: `${product.price} ₪`,
//           image: product.thumbnail,
//           description: product.description, // Include description for modal
//           productRef: product.id.toString(),
//           discount: product.discountPercentage ? `Discount: ${product.discountPercentage}%` : '',
//         }));
//         setProducts(formattedProducts);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const openModal = (product) => {
//     console.log('Opening modal for product:', product);
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul className="product-list">
//         {products.map(product => (
//           <li
//             key={product.id}
//             className="product-item"
//             onClick={() => openModal(product)} // Add onClick event handler
//           >
//             <div className="custom-product-container">
//               <div className="product-container" itemScope itemType="http://schema.org/Product">
//                 <div className="left-block">
//                   <div className="product-image-container">
//                     <div className="product_ref_small">{product.productRef}</div>
//                     <img
//                       className="replace-2x img-responsive"
//                       src={product.image}
//                       alt={product.title}
//                       title={product.title}
//                       itemProp="image"
//                     />
//                   </div>
//                 </div>
//                 <div className="right-block">
//                   <span className="price product-price">{product.price}</span>
//                   <meta itemProp="price" content={product.price} />
//                   <meta itemProp="priceCurrency" content="ILS" />
//                 </div>
//                 <h5 className="name_header" itemProp="name">
//                   {product.title}
//                 </h5>
//                 <div className="product-flags">
//                   <span className="discount">{product.discount}</span>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Render the Modal component */}
//       {isModalOpen && (
//         <Modal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default ProductList;
// src/react-app/ProductList.js
import React, { useEffect, useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    console.log('ProductList mounted');
    
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Products:', data); // Log the fetched data
        const formattedProducts = data.products.map(product => ({
          id: product.id,
          title: product.title,
          price: `${product.price} ₪`,
          image: product.thumbnail,
          description: product.description,
          category: product.category,
          rating: product.rating,
          tags: product.tags,
          productRef: product.id.toString(),
          discount: product.discountPercentage ? `Discount: ${product.discountPercentage}%` : '',
        }));
        setProducts(formattedProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const openModal = (product) => {
    console.log('Opening modal for product:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Latset Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li
            key={product.id}
            className="product-item"
            onClick={() => openModal(product)} // Add onClick event handler
          >
            <div className="custom-product-container">
              <div className="product-container" itemScope itemType="http://schema.org/Product">
                <div className="left-block">
                  <div className="product-image-container">
                    <div className="product_ref_small">{product.productRef}</div>
                    <img
                      className="replace-2x img-responsive"
                      src={product.image}
                      alt={product.title}
                      title={product.title}
                      itemProp="image"
                    />
                  </div>
                </div>
                <div className="right-block">
                  <span className="price product-price">{product.price}</span>
                  <meta itemProp="price" content={product.price} />
                  <meta itemProp="priceCurrency" content="ILS" />
                </div>
                <h5 className="name_header" itemProp="name">
                  {product.title}
                </h5>
                <div className="product-flags">
                  <span className="discount">{product.discount}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Render the Modal component */}
      {isModalOpen && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductList;
