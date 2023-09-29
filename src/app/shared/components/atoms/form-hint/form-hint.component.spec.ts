import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHintComponent } from './form-hint.component';

describe('FormHintComponent', () => {
  let component: FormHintComponent;
  let fixture: ComponentFixture<FormHintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormHintComponent],
    });
    fixture = TestBed.createComponent(FormHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
