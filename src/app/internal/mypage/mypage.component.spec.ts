import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageComponent } from './mypage.component';

describe('MypageComponent', () => {
  let component: MypageComponent;
  let fixture: ComponentFixture<MypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MypageComponent],
    });
    fixture = TestBed.createComponent(MypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
