declare var google: any;
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit() {
    if (google) {
      google.accounts.id.initialize({
        client_id: '981381023123-ts2rl2ejksonqkepnr5u6fea0jcflslc.apps.googleusercontent.com',
        callback: (res: any) => {
          return this.handleLogin(res);

        }
      })
      google.accounts.id.renderButton(document.getElementById('button'), {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 350,
      })
    }
  }
  decode(resp: any) {
    return JSON.parse(atob(resp.split('.')[1]))
  }
  handleLogin(res: any) {
    const respValue = this.decode(res.credential);
    console.log(respValue);

  }
}
