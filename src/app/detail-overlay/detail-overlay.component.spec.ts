import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOverlayComponent } from './detail-overlay.component';

describe('DetailOverlayComponent', () => {
  let component: DetailOverlayComponent;
  let fixture: ComponentFixture<DetailOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
