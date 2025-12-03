import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersiceComponent } from './excersice.component';

describe('ExcersiceComponent', () => {
  let component: ExcersiceComponent;
  let fixture: ComponentFixture<ExcersiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcersiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcersiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
