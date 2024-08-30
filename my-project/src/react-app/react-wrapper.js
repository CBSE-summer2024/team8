
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import ReactToWebComponent from 'react-to-webcomponent';
// import ProductItem from './ProductItem';

// // تحويل المكون إلى Web Component باستخدام createRoot
// const ReactProductItem = ReactToWebComponent(ProductItem, React, createRoot);

// customElements.define('react-product-item', ReactProductItem);
import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductItem from './ProductItem';

class ReactProductItem extends HTMLElement {
  constructor() {
    super();
    this._root = null;
  }
  connectedCallback() {
    if (!this._root) {
      this._root = createRoot(this.attachShadow({ mode: 'open' }));
      this._root.render(<ProductItem />);
    }
  }
}

customElements.define('react-product-item', ReactProductItem);
