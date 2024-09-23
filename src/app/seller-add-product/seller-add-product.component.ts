import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {

  productForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
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

  onSubmit(){
    console.log(this.productForm.value)
  }

}
