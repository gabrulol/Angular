import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapatosAdultosComponent } from './sapatos-adultos.component';

describe('SapatosAdultosComponent', () => {
  let component: SapatosAdultosComponent;
  let fixture: ComponentFixture<SapatosAdultosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapatosAdultosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapatosAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
