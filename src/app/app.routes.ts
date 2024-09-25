import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { sellerGuardGuard } from '../app/seller-guard.guard';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerUpdateComponent } from './components/seller-update/seller-update.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'seller', component: SellerAuthComponent},
    { path: 'seller-home', component:SellerHomeComponent ,canActivate:[sellerGuardGuard]},
    { path: 'seller/seller-login', component: SellerLoginComponent},
    { path: 'seller-add-product', component: SellerAddProductComponent,canActivate:[sellerGuardGuard]},
    { path: 'seller-home/seller-update-product/:id', component: SellerUpdateComponent,canActivate:[sellerGuardGuard]},
    { path: 'search/:query', component: SearchComponent},
    { path: 'product-detail/:productId', component: ProductDetailComponent},
    { path: 'user-register', component: UserRegisterComponent},

];
