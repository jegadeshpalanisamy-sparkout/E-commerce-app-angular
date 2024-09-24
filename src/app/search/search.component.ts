import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../interfaces/data-type';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  searchProduct:product[] =[];
  constructor(private productService:ProductService,private activeRoute: ActivatedRoute) {}


  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query')?.toLowerCase();
    this.productService.searchProducts(query).subscribe((data) => {
      if(data) {
        this.searchProduct = data;
      }
    })
    
  }
}
