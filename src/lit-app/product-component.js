import { LitElement, html, css } from 'lit';

class ProductComponent extends LitElement {
  constructor() {
    super();
    this.posts = []; // بديل لـ @property
    this.selectedCategory = ''; // بديل لـ @property
  }

  static styles = css`
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      margin-bottom: 20px;
      border: none;
      border-radius: 8px;
      transition: transform 0.3s ease-in-out;
      margin-top:30px;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 16px rgba(0,0,0,0.2);
    }

    .card-img-top {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .card-body {
      padding: 15px;
    }

    .card-title {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: 10px;
    }

    .card-text {
      color: #666;
      font-size: 0.9rem;
    }

    .card-price {
      font-size: 1.1rem;
      font-weight: bold;
      color: #007BFF;
      margin-bottom: 10px;
    }

    .btn-primary {
      background-color: #007BFF;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      color: white;
      transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
      background-color: darkgoldenrod;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.fetchPosts();
  }

  render() {
    return html`
      <div class="row">
        ${this.posts.map(post => html`
          <div class="col-lg-4 col-md-6">
            <div class="card" style="width: 18rem;">
              <img src="${post.images[0]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.description}</p>
                <p class="card-price">${post.price}</p>
                <p class="card-price">${post.category}</p>
                <a href="#" class="btn btn-primary">Add New</a>
              </div>
            </div>
          </div>
        `)}
      </div>
    `;
  }

  fetchPosts() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (this.selectedCategory) {
          this.posts = data.products.filter(product => product.category === this.selectedCategory);
        } else {
          this.posts = data.products;
        }
        this.requestUpdate(); // لتحديث المكون بعد جلب البيانات
      });
  }
}

customElements.define('app-product', ProductComponent);
