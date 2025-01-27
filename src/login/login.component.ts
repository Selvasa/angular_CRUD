declare var google: any;
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogOut } from '../common-service/logout.service';
import { Observable, Subscription } from 'rxjs';

@Component({
   selector: 'app-login',
   standalone: true,
   imports: [],
   templateUrl: './login.component.html',
   styleUrl: './login.component.css'
})
export class LoginComponent {
   private logOutService = inject(LogOut)
   private router = inject(Router);
   a: Subscription = new Subscription;
   b: any;
   private obs$ = new Observable(res => {
      console.log('object 1');
      res.next(300);
      res.error('erros from res');
      res.complete();
   })
   ngOnInit() {
      // if (google) {
      //   google.accounts.id.initialize({
      //     client_id: '981381023123-ts2rl2ejksonqkepnr5u6fea0jcflslc.apps.googleusercontent.com',
      //     callback: (res: any) => {
      //       return this.handleLogin(res);

      //     }
      //   })
      //   google.accounts.id.renderButton(document.getElementById('button'), {
      //     theme: 'filled_blue',
      //     size: 'large',
      //     shape: 'rectangle',
      //     width: 350,
      //   })
      // }
      // this.a = 
      // this.a.unsubscribe()
      // this.obs$.subscribe(e=>{
      //    console.log({});

      // })
      this.a = this.fronmEvent(document.body, 'click').subscribe((e: any) => {
         console.log(e);

      })
   }
   fronmEvent(target: any, event: any) {
      return new Observable((a) => {
         const handler = (z?: any) => {
            a.next('body clicked start')
         }
         target.addEventListener(event, handler)
         return () => {
            console.log('body clicked end');
            target.removeEventListener(event, handler)
         }
      })
   }
   remove() {
      if (this.a)
         this.a.unsubscribe()
   }

   decode(resp: any) {
      return JSON.parse(atob(resp.split('.')[1]))
   }
   handleLogin(res: any) {
      const respValue = this.decode(res.credential);
      sessionStorage.setItem('loginDetails', JSON.stringify(respValue))
      this.router.navigate(['home']);
      this.logOutService.login.next(true)
      // console.log(respValue);

   }

}
