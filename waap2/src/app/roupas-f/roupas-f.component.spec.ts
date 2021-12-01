import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasFComponent } from './roupas-f.component';

describe('RoupasFComponent', () => {
  let component: RoupasFComponent;
  let fixture: ComponentFixture<RoupasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
