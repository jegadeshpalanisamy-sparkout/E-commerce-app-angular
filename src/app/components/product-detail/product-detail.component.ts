import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../interfaces/data-type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productData :product | undefined;
  reviewerName: string = '';
  reviewText: string = '';
  rating: number | null = null;
  productReviews: any[] = [];
  productQuantity: number = 1;  // Initialize the product quantity to 1


  constructor(private activeRoute: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param)=>{
      let id = param.get('productId');
      if(id) {
        this.productService.getProduct(id).subscribe((data) => {
          this.productData = data
          // console.log('product Data:',this.productData);
          this.loadReviews(id);
        })
      }
    })
  }

   // Load reviews from local storage
   loadReviews(productId: string) {
    const reviews = localStorage.getItem(`reviews_${productId}`);
    this.productReviews = reviews ? JSON.parse(reviews) : [];
  }


  addReview() {
    if (this.reviewerName && this.reviewText && this.rating) {
      const newReview = {
        reviewerName: this.reviewerName,
        reviewText: this.reviewText,
        rating: this.rating,
        date: new Date().toLocaleDateString(),
      };

      // Add new review to the existing reviews
      this.productReviews.push(newReview);

       // Save the updated reviews to local storage
       const productId = this.productData?.id;
       if (productId) {
         localStorage.setItem(`reviews_${productId}`, JSON.stringify(this.productReviews));
       }

      // Clear form inputs
      this.reviewerName = '';
      this.reviewText = '';
      this.rating = null;
  }
}

 // Method to increase the product quantity
increaseQuantity() {
  this.productQuantity++;
}

// Method to decrease the product quantity
decreaseQuantity() {
  if (this.productQuantity > 1) {
    this.productQuantity--;
  }
}
}
