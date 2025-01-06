import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { update_Action_Data } from '../crud-action';
import { feature, selector, singleSelect } from '../ngrx.selector';
import { CustColor } from '../../directive/color-dir';
import { BGDir } from '../../directive/bg-dir';

@Component({
  selector: 'app-ngrx-list',
  standalone: true,
  imports: [CommonModule,CustColor,BGDir],
  templateUrl: './ngrx-list.component.html',
  styleUrl: './ngrx-list.component.css'
})
export class NgrxListComponent {

  private store = inject(Store);
  ngrx: any = [];
  @Output() getOne = new EventEmitter()

  constructor() {
    this.store.select(selector).subscribe((res) => {
      console.log(res);
      this.ngrx = res;
    })
  }

  editNgrx(id: any) {
    this.store.select(singleSelect(id)).subscribe(res => this.getOne.emit(res))
    // this.store.dispatch(update_Action_Data({ id }))
  }

  deleteNgrx(id: any) {

  }
}
