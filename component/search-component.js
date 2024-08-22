// import {LitElement, html,css} from 'lit';

// export class searchElement extends LitElement {

   
//     constructor(){
//         super();
//         this.attachShadow({ mode: "open"});

//     }
    
  
//     connectedCallback(){
//         this.shadowRoot.innerHTML=`

//         <link rel="stylesheet" href="/component/search.css"/>

       

//         <ion-icon name="search" class ="icon" ></ion-icon>

//         <input class="input " type ="search " id="search"  placeholder="seach for id , product name"  />



//         `;
//     }
   


// }


// customElements.define('search-component', searchElement);

//مع كارد

// import { LitElement, html, css } from 'lit';

// export class SearchProduct extends LitElement {
//   static styles = css`
//     :host {
//       width: max-content;
//       display: flex;
//       align-items: center;
//       gap: 14px;
//       padding: 14px;
//       border-radius: 28px;
//       background: #f6f6f6;
//       transition: background 0.25s;
//     }

//     :host(:focus-within) {
//       background: #f1f1f1;
//     }

//     .input {
//       font-family: 'Lexend', sans-serif;
//       font-size: 16px;
//       color: #333333;
//       outline: none;
//       border: none;
//       background: transparent;
//       width: 300px;
//     }

//     .icon {
//       color: dimgray;
//     }

//     .product-cards {
//       display: grid;
//       gap: 1rem;
//       margin-top: 20px;
//     }

//     .card {
//       padding: 1rem;
//       border: 1px solid #ccc;
//       border-radius: 8px;
//     }

//     .hide {
//       display: none;
//     }
//   `;

//   static properties = {
//     products: { type: Array },
//     searchTerm: { type: String },
//   };

//   constructor() {
//     super();
//     this.products = [];
//     this.searchTerm = '';
//   }

//   connectedCallback() {
//     super.connectedCallback();
//     this.fetchProducts();
//   }

//   fetchProducts() {
//     fetch(`https://dummyjson.com/products`)
//       .then(res => res.json())
//       .then(data => {
//         this.products = data.products.map(product => ({
//           title: product.title,
//           category: product.category,
//         }));
//       });
//   }

//   handleSearch(event) {
//     this.searchTerm = event.target.value.toLowerCase();
//     //this.fetchProducts(this.searchTerm); // Fetch products based on search term
//   }

//   render() {
//     return html`
//       <div>
//         <div class="search-wrapper">
//           <ion-icon name="search" class="icon"></ion-icon>
//           <input
//             class="input"
//             type="search"
//             id="search"
//             @input="${this.handleSearch}"
//             placeholder="Search for products"
//           />
//         </div>
//         <div class="product-cards">
//           ${this.products
//             .filter(product =>
//               product.title.toLowerCase().includes(this.searchTerm) ||
//               product.category.toLowerCase().includes(this.searchTerm)
//             )
//             .map(
//               product => html`
//                 <div class="card">
//                   <div class="header">${product.title}</div>
//                   <div class="body">${product.category}</div>
//                 </div>
//               `
//             )}
//         </div>
//       </div>
//     `;
//   }
// }

// customElements.define('search-product', SearchProduct);



// كارد مفصولة 

import { LitElement, html, css } from 'lit';
import './product-card.js'; // Import the card component

export class SearchProduct extends LitElement {
  static styles = css`
    /* Styles remain the same */
    .search-wrapper {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      border-radius: 28px;
      background: #f6f6f6;
      transition: background 0.25s;
    }

    .search-wrapper(:focus-within) {
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
      /* product-card.css */
.product-cards {
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
      margin-top: 20px;
  width: 300px; /* عرض ثابت */
  max-width: 100%; /* لضمان عدم تجاوز العرض في الشاشات الصغيرة */
  min-height: 400px; /* ارتفاع ثابت للبطاقة */
  padding: 16px; /* حشو داخل البطاقة */
  border: 1px solid #ddd; /* حد البطاقة */
  border-radius: 8px; /* زوايا دائرية */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* ظل البطاقة */
  flex-direction: column; /* ترتيب المحتوى عمودياً */
  overflow: hidden; /* إخفاء المحتوى الذي يتجاوز الحدود */
}

.product-card img {
  width: 100%; /* عرض الصورة يتناسب مع عرض البطاقة */
  height: auto; /* الحفاظ على نسبة العرض إلى الارتفاع للصورة */
  border-bottom: 1px solid #ddd; /* حد تحت الصورة */
  margin-bottom: 8px; /* مسافة بين الصورة والمحتوى النصي */
}

.product-card .title {
  font-size: 18px; /* حجم خط العنوان */
  font-weight: bold; /* جعل الخط عريض */
  margin-bottom: 8px; /* مسافة بين العنوان وبقية المحتوى */
}

.product-card .description {
  font-size: 14px; /* حجم الخط للوصف */
  color: #555; /* لون الخط */
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
        <div class="product-cards">
          ${this.products
            .filter(product =>
              product.title.toLowerCase().includes(this.searchTerm) ||
              product.category.toLowerCase().includes(this.searchTerm)
            )
            .map(
              product => html`
                <product-card
                  .title="${product.title}"
                  .category="${product.category}"
                  .brand="${product.brand}"
                  .description="${product.description}"

                  .imageUrl="${product.imageUrl}"

                ></product-card>
              `
            )}
        </div>
      </div>
    `;
  }
}

customElements.define('search-product', SearchProduct);




// مع الديسكريبشن والبرادي 
