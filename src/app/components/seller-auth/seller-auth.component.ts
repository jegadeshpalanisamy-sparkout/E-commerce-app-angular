import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { SellerService } from '../../services/seller.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  signUpForm : FormGroup;

  constructor(private fb: FormBuilder,private sellerService: SellerService,private router: Router) {
    // Initialize form with validations
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(){
    return this.signUpForm.controls;
  }

  onSubmit(){
    if(this.signUpForm.valid) {
      this.sellerService.singUp(this.signUpForm.value).subscribe((data)=>{
        if(data) {  
          this.router.navigate(['/seller-home']);
        }
      });

    } else {
      console.log('Invalid form');
      
    }
  }

}
