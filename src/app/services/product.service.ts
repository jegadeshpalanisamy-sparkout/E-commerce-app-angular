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

  listProduct(){
    return this.http.get<product[]>('http://localhost:3000/add-products');
  }
  
  deleteProduct(id:string) {
    return this.http.delete(`http://localhost:3000/add-products/${id}`);
  }

  getProduct(id:string) {
    return this.http.get<product>(`http://localhost:3000/add-products/${id}`);
  }

  updateProduct(id:any,data:product) {
    return this.http.put(`http://localhost:3000/add-products/${id}`,data);
  }
}
