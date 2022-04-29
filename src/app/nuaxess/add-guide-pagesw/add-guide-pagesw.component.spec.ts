import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuidePageswComponent } from './add-guide-pagesw.component';

describe('AddGuidePageswComponent', () => {
  let component: AddGuidePageswComponent;
  let fixture: ComponentFixture<AddGuidePageswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuidePageswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuidePageswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
