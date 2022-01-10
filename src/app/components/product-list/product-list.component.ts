import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { }

products!:Product[];
  ngOnInit(): void {
    this.productservice.getProductList().subscribe(
      data=>
      {
       // console.log(data)
          this.products=data;
      },
      (error)=>{

      }

    );
    console.log("hi")
    console.log(this.products);
  }

}
