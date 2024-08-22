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

   

    .header, .brand, .category, .description, .id {
      margin: 0.5rem 0;
    }
    img {
       max-width: 30%;
      border-radius: 8px;
      height: 150px;/* ارتفاع ثابت للصورة */
      object-fit: cover; /* لضمان أن الصورة تتناسب مع الإطار */
      margin-bottom: 8px;
    }

    .title {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis; /* لإضافة ... إذا كان النص طويلًا جدًا */
      white-space: nowrap; /* لإجبار النص على أن يكون في سطر واحد */
    }

    .description {
      font-size: 14px;
      color: #555;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* لتحديد عدد الأسطر المعروضة */
      -webkit-box-orient: vertical;
    }
      

  `;

  static properties = {
    title: { type: String },
    id: { type: String },

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
    this.id = '';

  }

  render() {
    return html`
      <div class="card ">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="id">${this.id}</div>

        <div class="header">${this.title}</div>
        <div class="brand"><strong>Brand:</strong> ${this.brand}</div>
        <div class="category"><strong>Category:</strong> ${this.category}</div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
