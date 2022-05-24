import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStyleAnimationComponent } from './button-style-animation.component';

describe('ButtonStyleAnimationComponent', () => {
  let component: ButtonStyleAnimationComponent;
  let fixture: ComponentFixture<ButtonStyleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStyleAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStyleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
