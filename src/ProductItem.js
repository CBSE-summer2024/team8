import React from "react";

const ProductItem = ({ product }) => {
  return (
<li className="product-item">
<div className="custom-product-container">
        <div className="product-container" itemScope itemType="http://schema.org/Product">
          <div className="left-block">
            <div className="product-image-container">
              <div className="product_ref_small">{product.productRef}</div>
              <a className="product_img_link" href={product.url} title={product.title} itemProp="url">
                <img
                  className="replace-2x img-responsive"
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                  itemProp="image"
                />
              </a>
            </div>
          </div>
          <div className="right-block">
              
               <span className="price product-price">{product.price}</span>
              <meta itemProp="price" content={product.price} />
              <meta itemProp="priceCurrency" content="ILS" />
            </div>
            <h5 className="name_header" itemProp="name">
              <a className="product-name" href={product.url} title={product.title} itemProp="url">
                {product.title}
              </a>
            </h5>
            <div className="product-flags">
              <span className="discount">{product.discount}</span>
            </div>
          </div>
        </div>
    </li>
  );
};

export default ProductItem;
