import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpotacion } from './interpotacion';

describe('Interpotacion', () => {
  let component: Interpotacion;
  let fixture: ComponentFixture<Interpotacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpotacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interpotacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
