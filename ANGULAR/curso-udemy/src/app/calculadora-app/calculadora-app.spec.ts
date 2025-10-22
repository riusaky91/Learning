import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraApp } from './calculadora-app';

describe('CalculadoraApp', () => {
  let component: CalculadoraApp;
  let fixture: ComponentFixture<CalculadoraApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
