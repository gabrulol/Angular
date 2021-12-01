import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapatosInfantisComponent } from './sapatos-infantis.component';

describe('SapatosInfantisComponent', () => {
  let component: SapatosInfantisComponent;
  let fixture: ComponentFixture<SapatosInfantisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapatosInfantisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapatosInfantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
