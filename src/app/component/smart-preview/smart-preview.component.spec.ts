import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPreviewComponent } from './smart-preview.component';

describe('SmartPreviewComponent', () => {
  let component: SmartPreviewComponent;
  let fixture: ComponentFixture<SmartPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
