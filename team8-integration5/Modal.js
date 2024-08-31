
import React from 'react';
import './styles.css'; // Ensure this path is correct for global styles

const Modal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> {product.price} </p>
        <p><strong>Discount:</strong> {product.discount || 'None'}</p>
        <p><strong>Rating:</strong> {product.rating} / 5</p>
        <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button> {/* Styled Add to Cart button */}
      </div>
    </div>
  );
};

export default Modal;


 
