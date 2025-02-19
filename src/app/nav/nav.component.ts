import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  is_Dark = signal<boolean>(false);

  toggleTheme() {
    this.is_Dark.set(!this.is_Dark());
    if (this.is_Dark()) {
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')

    }
  }
}
