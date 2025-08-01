import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnRequestComponent } from './asn-request.component';

describe('AsnRequestComponent', () => {
  let component: AsnRequestComponent;
  let fixture: ComponentFixture<AsnRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsnRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
