// // src/react-app/react-wrapper.js
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { createComponent } from '@lit/react';
// import ProductList from './ProductList';

// // الدالة التي تقوم بتضمين مكون React داخل Lit
// export const ReactProductList = createComponent(React, 'react-product-list', ProductList, {
//   products: []
// });


// import React from 'react';
// import { createComponent } from '@lit/react';
// import ProductItem from './ProductItem';

// // التحقق من صحة المكون
// console.log(ProductItem);

// export const ReactProductItem = createComponent(React, 'react-product-item', ProductItem, {
//   product: { type: Object }, // تعريف النوع بشكل واضح
// });

import React from 'react';
import { createComponent } from '@lit/react';
import ProductItem from './ProductItem';

// التحقق من أن ProductItem تم تعريفه بشكل صحيح
if (!ProductItem) {
  console.error('ProductItem is not defined correctly');
}

export const ReactProductItem = createComponent(React, 'react-product-item', ProductItem, {
  product: 'product',
});
