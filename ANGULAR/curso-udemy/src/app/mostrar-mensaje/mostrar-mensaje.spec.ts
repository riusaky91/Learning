import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMensaje } from './mostrar-mensaje';

describe('MostrarMensaje', () => {
  let component: MostrarMensaje;
  let fixture: ComponentFixture<MostrarMensaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarMensaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMensaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
