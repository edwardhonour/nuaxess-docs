import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCategoryDashboardComponent } from './guide-category-dashboard.component';

describe('GuideCategoryDashboardComponent', () => {
  let component: GuideCategoryDashboardComponent;
  let fixture: ComponentFixture<GuideCategoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideCategoryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideCategoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
