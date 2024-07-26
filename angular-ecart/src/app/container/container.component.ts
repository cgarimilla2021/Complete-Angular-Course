import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfStrings: string[] = ['Mark', 'Joe', 'Ram', 'Rahul'];
  
  product ={
    name: "IPhone",
    price: 999,
    color: "Black",
    discountPrice: 8.5,
    inStock: 10,
    pImage: "/assets/images/iphone.png"
  }
  name: string = "John Doe";
  addToCart : number = 0;
  zeroCart: boolean = true;
   getDiscountedPrice() {
    return this.product.price - (this.product.price* this.product.discountPrice/100);
  }
  getStockStatus() {
    return !(this.product.inStock > 0);
  }   
  OnNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
  incrementCartValue(){
    if(this.addToCart < this.product.inStock)
      {
        this.addToCart += 1;
      }
      if(this.addToCart > 0)
      {
          this.zeroCart = false;
      }
  }
  decrementCartValue(){
      if(this.addToCart>0)
      {
        this.addToCart-=1;
        if(this.addToCart == 0)
          {
            this.zeroCart = true;
          }
          else
            this.zeroCart = false;
      }
  }

 searchText: string= '';  

  setSearchText(value: string){
    this.searchText = value;
  }

}
