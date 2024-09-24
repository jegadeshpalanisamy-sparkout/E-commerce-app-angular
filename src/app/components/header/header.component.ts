import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuType:string = 'default';
  sellerName:string = '';
  
  constructor(private router:Router,private productService: ProductService){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url) {
        const sellerStore = localStorage.getItem('seller');
        if(sellerStore && val.url.includes('seller')) {
          // console.log('seller-store',sellerStore);
          this.menuType = 'seller';        
          const sellerData = JSON.parse(sellerStore)[0];
          console.log('seller-data',sellerData);
          this.sellerName = sellerData.name;
          console.log(this.sellerName)
        } else {
          this.menuType = 'default';
         }
      }
    })

  }

  logout(){
    localStorage.removeItem('seller')
    this.router.navigate(['']);
  }

  searchProducts(query: KeyboardEvent) {
    if(query) {
      const value = (query.target as HTMLInputElement).value;
      this.productService.searchProducts(value).subscribe((data)=>{
        
        })
    

  }

 } 

 submitSearch(search: any) {   
   if(search) {
     this.router.navigate(['/search',search])
   }
 }
}
