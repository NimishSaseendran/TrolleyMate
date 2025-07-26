import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCheckoutBannerComponent } from './smart-checkout-banner.component';

describe('SmartCheckoutBannerComponent', () => {
  let component: SmartCheckoutBannerComponent;
  let fixture: ComponentFixture<SmartCheckoutBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartCheckoutBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCheckoutBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
