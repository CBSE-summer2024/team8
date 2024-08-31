import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-categ',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './categ.component.html',
  styleUrl: './categ.component.css'
})
export class CategComponent {
  selectedCategory: string = '';

  constructor(private router: Router) {}


  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.navigateToProduct(category); // Pass category to ProductComponent
  }
  navigateToProduct(category: string) {
      this.router.navigate(['/product'], { queryParams: { category } });
    }

}
