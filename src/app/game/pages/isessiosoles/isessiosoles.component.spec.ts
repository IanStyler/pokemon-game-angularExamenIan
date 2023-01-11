import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsessiosolesComponent } from './isessiosoles.component';

describe('IsessiosolesComponent', () => {
  let component: IsessiosolesComponent;
  let fixture: ComponentFixture<IsessiosolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsessiosolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsessiosolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
