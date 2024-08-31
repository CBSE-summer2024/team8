  import { HttpClient } from '@angular/common/http';
  import { Component, inject, OnInit,QueryList } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ActivatedRoute } from '@angular/router';

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
    styleUrl: './product.component.css'
  })

  export class ProductComponent implements OnInit{
    http=inject(HttpClient)
    posts: Product[] = []
    selectedCategory: string | null = '';


    userList:any;

     constructor(private httpClient: HttpClient, private route: ActivatedRoute) {

     }

     ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.selectedCategory = params['category'];
        this.fetchposts();
      });

    }

  fetchposts() {
    this.httpClient.get<{ products: Product[] }>(`https://dummyjson.com/products`)
      .subscribe(response => {
        console.log(response); // طباعة البيانات للتحقق
        if (this.selectedCategory) {
          this.posts = response.products.filter(product => product.category === this.selectedCategory);
        } else {
          this.posts = response.products; // عرض جميع المنتجات إذا لم يكن هناك تصنيف محدد
        }
      });
    }}
