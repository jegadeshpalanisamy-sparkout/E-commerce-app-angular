import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { Guard, sellerGuardGuard } from '../app/seller-guard.guard';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'seller', component: SellerAuthComponent},
    { path: 'seller-home', component:SellerHomeComponent ,canActivate:[sellerGuardGuard] },
    { path: 'seller/seller-login', component: SellerLoginComponent}
];
