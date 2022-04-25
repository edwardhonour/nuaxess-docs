import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCategoryHomeComponent } from './guide-category-home.component';

describe('GuideCategoryHomeComponent', () => {
  let component: GuideCategoryHomeComponent;
  let fixture: ComponentFixture<GuideCategoryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideCategoryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideCategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
