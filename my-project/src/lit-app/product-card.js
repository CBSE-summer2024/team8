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
      height: 150px;
      object-fit: cover;
      margin-bottom: 8px;
    }

    .title {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      font-size: 14px;
      color: #555;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
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
      <div class="card">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="id">${this.id}</div>
        <div class="header"><strong>${this.title}</strong></div>
        <div class="brand"><strong>Brand:</strong> ${this.brand}</div>
        <div class="category"><strong>Category:</strong> ${this.category}</div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
