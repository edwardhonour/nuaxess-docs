import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuideCategoryComponent } from './add-guide-category.component';

describe('AddGuideCategoryComponent', () => {
  let component: AddGuideCategoryComponent;
  let fixture: ComponentFixture<AddGuideCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuideCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuideCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
