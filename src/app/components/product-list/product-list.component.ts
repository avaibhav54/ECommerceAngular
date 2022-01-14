import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService, private route:ActivatedRoute) { }

products!:Product[];
currentCategoryId:any;
ngOnInit() {
  this.route.paramMap.subscribe(() => {
    this.listProducts();
  });
}

listProducts() {

  // check if "id" parameter is available
  const hasCategoryId: boolean = this.route.snapshot.paramMap.has('cid');

  if (hasCategoryId) {
    // get the "id" param string. convert string to a number using the "+" symbol
    this.currentCategoryId = this.route.snapshot.paramMap.get('cid');
  }
  else {
    // not category id available ... default to category id 1
    this.currentCategoryId = 1;
  }

  // now get the products for the given category id
  this.productservice.getProductList(this.currentCategoryId).subscribe(
    data => {
      this.products = data;
    }
  )
}

}
