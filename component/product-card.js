// // product-card.js
// import { LitElement, html, css } from 'lit';

// export class ProductCard extends LitElement {
//   static styles = css`
//     .card {
//       padding: 1rem;
//       border: 1px solid #ccc;
//       border-radius: 8px;
//     }
//   `;

//   static properties = {
//     title: { type: String },
//     category: { type: String },
//   };

//   constructor() {
//     super();
//     this.title = '';
//     this.category = '';
//   }

//   render() {
//     return html`
//       <div class="card">
//         <div class="header">${this.title}</div>
//         <div class="body">${this.category}</div>
//       </div>
//     `;
//   }
// }

// customElements.define('product-card', ProductCard);
// product-card.js

// مع صورة وديسكريبشن 
import { LitElement, html, css } from 'lit';

export class ProductCard extends LitElement {
  static styles = css`
    .card {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 30%;
      border-radius: 8px;
    }

    .header, .brand, .category, .description {
      margin: 0.5rem 0;
    }
      

  `;

  static properties = {
    title: { type: String },
    category: { type: String },
    brand: { type: String },
    description: { type: String },
    imageUrl: { type: String },
  };

  constructor() {
    super();
    this.title = '';
    this.category = '';
    this.brand = '';
    this.description = '';
    this.imageUrl = '';
  }

  render() {
    return html`
      <div class="card ">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="header">${this.title}</div>
        <div class="brand"><strong>Brand:</strong> ${this.brand}</div>
        <div class="category"><strong>Category:</strong> ${this.category}</div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
