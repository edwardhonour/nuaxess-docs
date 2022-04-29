import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuidePageComponent } from './edit-guide-page.component';

describe('EditGuidePageComponent', () => {
  let component: EditGuidePageComponent;
  let fixture: ComponentFixture<EditGuidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGuidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
