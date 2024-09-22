import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; // Used to inject the service
import { SellerService } from './services/seller.service';


export const sellerGuardGuard: CanActivateFn = (route, state) => {

  const sellerService = inject(SellerService);
  if(localStorage.getItem('seller')) {
   return true;
  } 
  return sellerService.isSellerLoggedIn;
};

export const Guard: CanActivateFn = (route, state) => {

  const sellerService = inject(SellerService);
  if(!localStorage.getItem('seller')) {
   return true;
  } 
  return sellerService.isSellerLoggedIn;
};
