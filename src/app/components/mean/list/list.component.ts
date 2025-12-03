import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MeanService } from '../../../service/mean.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { debounceTime, map, switchMap } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listOfUser = signal<any>([])
  private service = inject(MeanService);
  private readonly destroyRef = inject(DestroyRef);
  myForm = new FormGroup({
    search: new FormControl('')
  })

  ngOnInit() {
    this.getData();
    this.getApiData()
    this.service.getAllUser$.subscribe((res: any) => {
      this.listOfUser.set(res);
    });
    this.myForm.controls['search'].valueChanges.pipe(
      debounceTime(300),
      switchMap((e:any) => this.getApiData(e))

    ).subscribe((res: any) => {
      this.listOfUser.set(res);
    })
  }
  getData() {
    this.service.getAllUser()
  }
  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe(() => {
      this.getData()
    })
  }
  getSingleUser(id: any) {
    this.service.getSingleUser(id);
  }
  getApiData(search?: string) {
    return this.service.getAllUser$.pipe(map((data: any) => {
      console.log(data, search);
      return search ? data?.filter((e: any) => { return e.name.toLowerCase().includes(search?.toLowerCase()) }) : data;
    }))
  }

}
