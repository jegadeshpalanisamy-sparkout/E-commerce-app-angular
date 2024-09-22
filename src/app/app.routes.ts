import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { sellerGuardGuard } from '../app/seller-guard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'seller', component: SellerAuthComponent ,canActivate:[sellerGuardGuard]},
    { path: 'seller-home', component:SellerHomeComponent ,canActivate:[sellerGuardGuard] },
];
