import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTrolleymateComponent } from './why-trolleymate.component';

describe('WhyTrolleymateComponent', () => {
  let component: WhyTrolleymateComponent;
  let fixture: ComponentFixture<WhyTrolleymateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyTrolleymateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTrolleymateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
