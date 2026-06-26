import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCalculadora } from './ejemplo-calculadora';

describe('EjemploCalculadora', () => {
  let component: EjemploCalculadora;
  let fixture: ComponentFixture<EjemploCalculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploCalculadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploCalculadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
