import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxListComponent } from './ngrx-list.component';

describe('NgrxListComponent', () => {
  let component: NgrxListComponent;
  let fixture: ComponentFixture<NgrxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
