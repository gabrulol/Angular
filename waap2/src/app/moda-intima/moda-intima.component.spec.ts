import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaIntimaComponent } from './moda-intima.component';

describe('ModaIntimaComponent', () => {
  let component: ModaIntimaComponent;
  let fixture: ComponentFixture<ModaIntimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaIntimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaIntimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
