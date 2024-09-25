import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../interfaces/data-type';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap'; // Import Bootstrap Modal
import { isPlatformBrowser } from '@angular/common';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SellerUpdateComponent } from '../seller-update/seller-update.component';


@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,SuccessAlertComponent,RouterModule,SellerUpdateComponent],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css',

})
export class SellerHomeComponent implements OnInit {
  
  productList : product[] = [];
  productIdToDelete: any; // Variable to hold the product to delete
  successMsg: string = '';
  successStatus: boolean = false;

  constructor(private productService: ProductService,  @Inject(PLATFORM_ID) private platformId: Object,private activeRoute: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.listProduct();
    
    this.activeRoute.queryParams.subscribe((params) => {
      this.successMsg = params['message'] || '';
      this.successStatus = params['status'] || false;
      setTimeout(() => {
        this.successStatus = false;
        this.successMsg = '';      
      },2000)
    })

  }

  listProduct(){
    this.productService.listProduct().subscribe((data)=>{
      if(data) {
        this.productList = data;
        console.log(this.productList)
      }
    })
  }

  async openDeleteModal(productId: any) {
    this.productIdToDelete = productId;
    // Check if in a browser context
    if (isPlatformBrowser(this.platformId)) {
      const { Modal } = await import('bootstrap'); // Dynamic import
      const modalElement = document.getElementById('deleteModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
    }
  }

  confirmDelete() {

    if (this.productIdToDelete) {
      this.productService.deleteProduct(this.productIdToDelete).subscribe((data)=>{
        if(data) {
          this.productList = this.productList.filter((item) => item.id !== this.productIdToDelete);
          this.successMsg = 'Product deleted successfully';
          this.successStatus = true;

          setTimeout(() => {
            this.successStatus = false;
            this.successMsg = '';
          },2000)
        }
      });
    }
  

    // Optionally, close the modal if needed
    const modalElement = document.getElementById('deleteModal');
    if (isPlatformBrowser(this.platformId) && modalElement) {
      import('bootstrap').then(({ Modal }) => {
        const modalInstance = Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide(); // Hide the modal programmatically
        }
      });
    }
  }
}
