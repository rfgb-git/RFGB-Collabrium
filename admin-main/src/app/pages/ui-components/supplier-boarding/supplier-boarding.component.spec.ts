import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBoardingComponent } from './supplier-boarding.component';

describe('SupplierBoardingComponent', () => {
  let component: SupplierBoardingComponent;
  let fixture: ComponentFixture<SupplierBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierBoardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
