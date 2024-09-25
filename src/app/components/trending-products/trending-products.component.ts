import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../interfaces/data-type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.css'
})
export class TrendingProductsComponent implements OnInit{

  trendingProducts: product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getTrendingProducts();
  }

  getTrendingProducts() {
    this.productService.getTrendingProducts().subscribe((data) =>{
      this.trendingProducts = data;
    })
  }


}
