import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { product } from '../../interfaces/data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  papularProducts: product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPapularProduct();
  }

  getPapularProduct(){
    this.productService.getPapularProducts().subscribe((data)=> {
      this.papularProducts = data;
    })
  }

}
