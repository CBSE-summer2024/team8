import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, Injector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { createCustomElement } from '@angular/elements';

interface Product {
  category: string;
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductComponent implements OnInit {
  private http = inject(HttpClient);
  posts: Product[] = [];
  selectedCategory: string | null = '';

  constructor(private injector: Injector, private route: ActivatedRoute) {
    const el = createCustomElement(ProductComponent, { injector: this.injector });
    customElements.define('app-product', el);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'];
      this.fetchposts();
    });
  }

  fetchposts() {
    this.http.get<{ products: Product[] }>('https://dummyjson.com/products')
      .subscribe(response => {
        if (this.selectedCategory) {
          this.posts = response.products.filter(product => product.category === this.selectedCategory);
        } else {
          this.posts = response.products;
        }
      });
  }
}
