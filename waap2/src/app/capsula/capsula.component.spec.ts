import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulaComponent } from './capsula.component';

describe('CapsulaComponent', () => {
  let component: CapsulaComponent;
  let fixture: ComponentFixture<CapsulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
