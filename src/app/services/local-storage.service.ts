import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  signUp(data: any) {
    localStorage.setItem('seller',JSON.stringify(data));
  }

  userSignUp(data: any) {
    localStorage.setItem('user',JSON.stringify(data));
  }
}
