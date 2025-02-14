import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MeanService } from '../../../service/mean.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listOfUser = signal<any>([])
  private service = inject(MeanService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {

    this.getData();
    this.service.getAllUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res: any) => {
      this.listOfUser.set(res);

    })
  }
  getData() {
    this.service.getAllUser()
  }

}
