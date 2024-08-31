import { LitElement, html, css } from 'lit';

export class ProductCard extends LitElement {
  static styles = css`
    .card {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 8px;
    }

    .title {
      font-size: 18px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 8px;
    }

    .description {
      font-size: 14px;
      color: #555;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-bottom: 8px;
    }

    .price {
      font-size: 16px;
      color: #e60023;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .rating {
      font-size: 14px;
      color: #ff9900;
      margin-bottom: 8px;
    }

    .section {
      width: 100%;
      margin-bottom: 8px;
    }

    .brand, .category {
      font-size: 14px;
      color: #777;
      margin-bottom: 4px;
    }
  `;

  static properties = {
    title: { type: String },
    id: { type: String },
    category: { type: String },
    brand: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: String },
    rating: { type: Number },
  };

  constructor() {
    super();
    this.title = '';
    this.category = '';
    this.brand = '';
    this.description = '';
    this.imageUrl = '';
    this.id = '';
    this.price = '';
    this.rating = 0;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="title">${this.title}</div>
        <div class="section">
          <div class="price">${this.price}</div>
          <div class="rating">Rating: ${this.rating}★</div>
        </div>
        <div class="section">
          <div class="brand"><strong>Brand:</strong> ${this.brand}</div>
          <div class="category"><strong>Category:</strong> ${this.category}</div>
        </div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
