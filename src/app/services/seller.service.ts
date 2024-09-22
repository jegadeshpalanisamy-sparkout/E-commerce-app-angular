import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../../app/interfaces/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggingError = new EventEmitter<boolean>(false);
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

  login(data: login ){
    console.log('login data:',data);
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result.body && result.body.length == 1){
        this.localStorageService.signUp(result.body);
        this.router.navigate(['seller-home']);        
      } else {
        console.log('login failed');
        this.isLoggingError.emit(true);
      }
    });
  }
}
