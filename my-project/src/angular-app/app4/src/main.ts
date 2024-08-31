import { bootstrapApplication } from '@angular/platform-browser';
import { ProductComponent } from './app/product/product.component'; // تأكد من الإستيراد الصحيح

bootstrapApplication(ProductComponent) // تمهيد مكون المنتج كنقطة انطلاق
  .catch((err) => console.error(err));