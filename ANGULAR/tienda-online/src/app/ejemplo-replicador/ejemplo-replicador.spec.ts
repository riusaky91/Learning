import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploReplicador } from './ejemplo-replicador';

describe('EjemploReplicador', () => {
  let component: EjemploReplicador;
  let fixture: ComponentFixture<EjemploReplicador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploReplicador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploReplicador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
