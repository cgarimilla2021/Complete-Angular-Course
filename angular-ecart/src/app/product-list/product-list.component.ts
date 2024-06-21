import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product ={
    name: "IPhone",
    price: 999,
    color: "Black",
    discountPrice: 8.5,
    inStock: 0,
    pImage: "/assets/images/iphone.png"
  }
  name: string = "John Doe";

  getDiscountedPrice() {
    return this.product.price - (this.product.price* this.product.discountPrice/100);
  }

  getStockStatus() {
    return !(this.product.inStock > 0);
  }
}
