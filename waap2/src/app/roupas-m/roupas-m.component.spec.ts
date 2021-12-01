import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasMComponent } from './roupas-m.component';

describe('RoupasMComponent', () => {
  let component: RoupasMComponent;
  let fixture: ComponentFixture<RoupasMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
