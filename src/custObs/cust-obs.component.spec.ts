import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustObsComponent } from './cust-obs.component';

describe('CustObsComponent', () => {
  let component: CustObsComponent;
  let fixture: ComponentFixture<CustObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
