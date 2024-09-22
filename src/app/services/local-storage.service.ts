import { Injectable } from '@angular/core';
import { signUp } from '../interfaces/data-type';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  signUp(data: any) {
    localStorage.setItem('seller',JSON.stringify(data));
  }
}
