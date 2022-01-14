import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl='http://localhost:8080/api/products';
  constructor(private httpClient:HttpClient) { }
  public ProductList()
  {
    return this.httpClient.get(`${this.baseurl}`);
  }
  getProductList( catId:any): Observable<Product[]>
  {
    const searchUrl=`${this.baseurl}/search/findByCategoryId?id=${catId}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}
  interface GetResponse
  {

    _embedded:{
      products: Product[];
    }
  }

