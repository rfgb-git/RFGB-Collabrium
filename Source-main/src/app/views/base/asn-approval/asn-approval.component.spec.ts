import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnApprovalComponent } from './asn-approval.component';

describe('AsnApprovalComponent', () => {
  let component: AsnApprovalComponent;
  let fixture: ComponentFixture<AsnApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsnApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsnApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
