import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  ngOnInit() {
    console.log('cookie added successfully');
    document.cookie = "isAdd=true"

  }
}
