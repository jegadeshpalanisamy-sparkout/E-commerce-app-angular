import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  signUpForm : FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private userService: UserService) {
    // Initialize form with validations
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.signUpForm.controls;
  }

  onSubmit(){
   if(this.signUpForm.valid) {
    console.log('signup data:',this.signUpForm.value);
    this.userService.singUp(this.signUpForm.value);
   }
  }
}
