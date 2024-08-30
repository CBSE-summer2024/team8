
import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductList from './ProductList';
import './styles.css'; 

// Ensure the DOM is fully loaded before trying to mount React
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <div>
      <search-product></search-product>
        {/* <ProductList /> */}
      </div>
    );
  } else {
    console.error("Root element not found");
  }
});
