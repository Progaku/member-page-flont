import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabelComponent } from './form-label.component';

describe('FormLabelComponent', () => {
  let component: FormLabelComponent;
  let fixture: ComponentFixture<FormLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormLabelComponent]
    });
    fixture = TestBed.createComponent(FormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
