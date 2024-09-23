import { Injectable } from '@angular/core';
import { product } from '../interfaces/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data: product) {
    console.log('product',data)
    return this.http.post('http://localhost:3000/add-products',data);
  }
  
}
