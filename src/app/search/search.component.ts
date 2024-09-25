import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { product } from '../interfaces/data-type';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  searchProduct:product[] =[];
  constructor(private productService:ProductService,private activeRoute: ActivatedRoute) {}


  ngOnInit(): void {
    // let query = this.activeRoute.snapshot.paramMap.get('query')?.toLowerCase();
    // this.productService.searchProducts(query).subscribe((data) => {
    //   if(data) {
    //     this.searchProduct = data;
    //   }
    // })
    this.activeRoute.paramMap.subscribe((param)=>{
      let query = param.get('query')?.toLowerCase();
      if(query) {
        this.productService.searchProducts(query).subscribe((data)=> {
          this.searchProduct = data
        })
      }
    })
    
  }
}
