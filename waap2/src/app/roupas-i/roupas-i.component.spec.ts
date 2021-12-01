import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasIComponent } from './roupas-i.component';

describe('RoupasIComponent', () => {
  let component: RoupasIComponent;
  let fixture: ComponentFixture<RoupasIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
