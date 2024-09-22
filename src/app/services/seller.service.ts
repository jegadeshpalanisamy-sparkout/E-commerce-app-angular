import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../../app/interfaces/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router,private localStorageService: LocalStorageService) { }

  singUp(data: signUp) {
    console.log('signup data:',data);
    return this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      if(result){
        console.log("body",result.body);
        this.localStorageService.signUp(result.body);
        this.router.navigate(['seller-home']); 
      }
    });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']); 
    } 
  }
}
