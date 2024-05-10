import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name:string = "John Smith";
  addToCart:number = 0;
product={
  name:'iPhone 10',
  price: 789,
  color: 'Black',
  discount: 8.5,
  instock: 0,
  pImage: 'assets/images/schoolcompass.jpg'
}

@ViewChild(ProductListComponent) prodListcomp: ProductListComponent;

searchText:string='';
getDiscount(){
  return this.product.price - (this.product.price * this.product.discount / 100)
}

onInputChange(event:any){

this.name = event.target.value;
}

DecrementCard(){
  if(this.addToCart > 0){
    this.addToCart--;
  }

}

IncrementCard(){
  if(this.addToCart < 10){
    this.addToCart++;
  }

}

setSearchText(value: string){
this.searchText = value;
}
}
