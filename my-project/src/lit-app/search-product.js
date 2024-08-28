import { LitElement, css, html } from 'lit';
import './product-card.js';

export class SearchProduct extends LitElement {
  static styles = css`
    .search-wrapper-container {
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .search-wrapper {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      border-radius: 28px;
      background: #f6f6f6;
    }

    .search-wrapper:focus-within {
      background: #f1f1f1;
    }

    .input {
      font-family: 'Lexend', sans-serif;
      font-size: 16px;
      color: #333333;
      outline: none;
      border: none;
      background: transparent;
      width: 600px;
    }

    .icon {
      color: dimgray;
    }

    .product-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 20px;
    }
  `;

  static properties = {
    products: { type: Array },
    searchTerm: { type: String },
  };

  constructor() {
    super();
    this.products = [];
    this.searchTerm = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        this.products = data.products.map(product => ({
          title: product.title,
          id: product.id,
          category: product.category,
          brand: product.brand,
          description: product.description,
          imageUrl: product.thumbnail,
        }));
      });
  }

  handleSearch(event) {
    this.searchTerm = event.target.value.toLowerCase();
  }

  render() {
    return html`
      <div>
        <div class="search-wrapper-container">
          <div class="search-wrapper">
            <ion-icon name="search" class="icon"></ion-icon>
            <input
              class="input"
              type="search"
              id="search"
              @input="${this.handleSearch}"
              placeholder="Search for products name, category"
            />
          </div>
        </div>
        <div class="product-cards">
          ${this.products
            .filter(product =>
              product.title.toLowerCase().includes(this.searchTerm) ||
              product.description.toLowerCase().includes(this.searchTerm) ||
              product.category.toLowerCase().includes(this.searchTerm)
            )
            .map(product => html`
              <product-card
                .title="${product.title}"
                .id="${product.id}"
                .category="${product.category}"
                .brand="${product.brand}"
                .description="${product.description}"
                .imageUrl="${product.imageUrl}"
              ></product-card>
            `)}
        </div>
      </div>
    `;
  }
}

customElements.define('search-product', SearchProduct);
