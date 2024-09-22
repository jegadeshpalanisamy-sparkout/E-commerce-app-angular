import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuType:string = 'default';
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url) {
        console.warn("route change",val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
         }
      }
    })
  }

}
