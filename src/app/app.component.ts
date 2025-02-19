import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: '[app-root],.app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NavComponent, CommonModule, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
spinner1 = 'sp1'
}
