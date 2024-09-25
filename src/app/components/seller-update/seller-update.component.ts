import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../../interfaces/data-type';

@Component({
  selector: 'app-seller-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,SuccessAlertComponent],
  templateUrl: './seller-update.component.html',
  styleUrl: './seller-update.component.css'
})
export class SellerUpdateComponent implements OnInit{
  productForm : FormGroup;
  updateProductSuccessMsg :string ='';
  productUpdated : boolean = false;
  productId :string | null = '';
  productData! :product;
  constructor(private formBuilder: FormBuilder,private productService: ProductService,private activeRoute: ActivatedRoute,private router:Router) {
    this.productForm =this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      category: ['', Validators.required],
      productColor: ['', Validators.required],
      productDescription: ['', [Validators.required, Validators.minLength(10)]],
      productImageUrl: ['', [Validators.required ]],
    })
  }

  get f(){
    return this.productForm.controls;
  }
  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.paramMap.get('id');

    if(this.productId){ 
      this.productService.getProduct(this.productId).subscribe((data) => {
        this.productData = data;
      })
    }


  }
  onSubmit() {

    if(this.productForm.valid) {
      this.productService.updateProduct(this.productId,this.productForm.value).subscribe((data) => {
        if(data) {
          this.updateProductSuccessMsg = 'Product updated successfully';
          this.productUpdated = true;
          // setTimeout(() => {
          //   this.productUpdated = false;
          //   this.updateProductSuccessMsg = '';            
          // },2000)
          this.router.navigate(['seller-home'],{
            queryParams : {
              message : this.updateProductSuccessMsg,
              status : this.productUpdated
            }
          });

        }
      })
    }
    
  }

}
