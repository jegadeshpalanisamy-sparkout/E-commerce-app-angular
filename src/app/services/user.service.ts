import { Injectable } from '@angular/core';
import { signUp } from '../interfaces/data-type';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private localStorageService: LocalStorageService,private router:Router) { }

  singUp(data: signUp) {
    alert(1);
    return this.http.post('http://localhost:3000/users',data,{observe:'response'}).subscribe((result)=>{
      if(result){
        this.localStorageService.userSignUp(result.body);
        this.router.navigate(['/']);
      }
    });
  }
}
