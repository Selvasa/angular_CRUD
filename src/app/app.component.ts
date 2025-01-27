import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LogOut } from '../common-service/logout.service';

@Component({
  selector: '[app-root],.app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin: boolean = false;
  private logoutService = inject(LogOut);
  private router = inject(Router);

  constructor() {
    this.logoutService.iSLogin$.subscribe((res: any) => {
      this.isLogin = res;
    })
  }

  logOutUser() {
    this.logoutService.logOut();
    this.router.navigate(['login'])
  }

}
