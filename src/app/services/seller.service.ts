import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../../app/interfaces/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  singUp(data: signUp) {
    console.log('signup data:',data);
    return this.http.post('http://localhost:3000/seller',data);
  }
}
