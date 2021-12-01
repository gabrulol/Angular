import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosParaCasaComponent } from './acessorios-para-casa.component';

describe('AcessoriosParaCasaComponent', () => {
  let component: AcessoriosParaCasaComponent;
  let fixture: ComponentFixture<AcessoriosParaCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoriosParaCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosParaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
