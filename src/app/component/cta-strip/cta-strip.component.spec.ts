import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaStripComponent } from './cta-strip.component';

describe('CtaStripComponent', () => {
  let component: CtaStripComponent;
  let fixture: ComponentFixture<CtaStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaStripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
