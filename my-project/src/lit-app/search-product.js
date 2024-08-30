// src/lit-app/search-product.js
import { LitElement, css, html } from 'lit';

export class SearchProduct extends LitElement {
  static styles = css`
    .search-wrapper-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      margin-bottom:100px;
    }

    .search-wrapper {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      border-radius: 28px;
      background: #f6f6f6;
      margin-bottom: 100px;
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
  `;

  static properties = {
    products: { type: Array },
    searchTerm: { type: String },
    filteredProducts: { type: Array },
  };

  constructor() {
    super();
    this.products = [];
    this.filteredProducts = [];
    this.searchTerm = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchProducts();
  }

  fetchProducts() {
    // جلب المنتجات من API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        this.products = data.products.map(product => ({
          id: product.id,
          title: product.title,
          price: `${product.price} ₪`,
          image: product.thumbnail,
          url: product.id,
          productRef: product.id.toString(),
          discount: product.discountPercentage ? `Discount: ${product.discountPercentage}%` : '',
          description: product.description,
          category: product.category,
        }));
        this.filteredProducts = this.products; // عرض كل المنتجات في البداية
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  handleSearch(event) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm) ||
      product.description.toLowerCase().includes(this.searchTerm) ||
      product.category.toLowerCase().includes(this.searchTerm)
    );
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

        <!-- تضمين مكون React وتمرير المنتجات المفلترة -->
        <react-product-list .products="${this.filteredProducts}"></react-product-list>
      </div>
    `;
  }
}

customElements.define('search-product', SearchProduct);
