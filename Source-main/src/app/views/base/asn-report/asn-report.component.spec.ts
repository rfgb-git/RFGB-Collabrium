import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnReportComponent } from './asn-report.component';

describe('AsnReportComponent', () => {
  let component: AsnReportComponent;
  let fixture: ComponentFixture<AsnReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsnReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
