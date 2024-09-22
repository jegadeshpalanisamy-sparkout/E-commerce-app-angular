import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SellerService } from '../../services/seller.service';
import { isError } from 'util';

@Component({
  selector: 'app-seller-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent {
  loginForm:FormGroup;
  loginErrorMessage:string = '';

  constructor(private fb: FormBuilder,private router: Router,private sellerService: SellerService) {
    // Initialize form with validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  goToSignup(){
    this.router.navigate(['seller']);
  }

  onSubmit(){
    if(this.loginForm.valid) {
      console.log('login data:',this.loginForm.value);
      this.sellerService.login(this.loginForm.value);
      this.sellerService.isLoggingError.subscribe((isError)=>{
        if(isError) {
          this.loginErrorMessage= 'Invalid email or password';
        }
      })
    }
  }
} 