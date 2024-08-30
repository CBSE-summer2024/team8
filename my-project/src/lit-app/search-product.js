import { LitElement, css, html } from 'lit';
import { ReactProductItem } from '../react-app/react-wrapper'; // استيراد المكون المغلف من React

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

    .hide {
      display: none;
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
    if (!this.products) {
      console.error("Products data not available. Please ensure 'products' is defined before calling fetchProducts().");
      return; // Exit if products are not available
    }
  
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products.map((product) => ({
          title: product.title,
          category: product.category,
          brand: product.brand,
          description: product.description,
          image: product.thumbnail,
          price: product.price,
          discount: product.discountPercentage ? `${product.discountPercentage}% OFF` : '',
          url: product.url || '#',
        }));
        console.log("Fetched products:", this.products); // Add this line to inspect the data
        this.requestUpdate(); // تأكد من تحديث التصيير
      })
      .catch(error => console.error('Error fetching products:', error));
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
            .filter(
              (product) => {
                console.log('Product:', product);
                return (
                  (product.title && product.title.toLowerCase().includes(this.searchTerm)) ||
                  (product.description && product.description.toLowerCase().includes(this.searchTerm)) ||
                  (product.category && product.category.toLowerCase().includes(this.searchTerm))
                );
              } )
            .map(
              (product) => html`
                <react-product-item .product="${product}"></react-product-item>
              `
            )}
        </div>
      </div>
    `;
  }
}

customElements.define('search-product', SearchProduct);
