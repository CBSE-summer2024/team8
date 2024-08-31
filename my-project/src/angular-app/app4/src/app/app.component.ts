import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoryComponent} from './component/category/category.component';
import {CategComponent} from './categ/categ.component';
import {ProductComponent}from './product/product.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoryComponent,CategComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'firstapp';
}
