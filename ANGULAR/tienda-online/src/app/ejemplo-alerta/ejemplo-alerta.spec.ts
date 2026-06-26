import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAlerta } from './ejemplo-alerta';

describe('EjemploAlerta', () => {
  let component: EjemploAlerta;
  let fixture: ComponentFixture<EjemploAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
