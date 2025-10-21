import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replicador } from './replicador';

describe('Replicador', () => {
  let component: Replicador;
  let fixture: ComponentFixture<Replicador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Replicador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Replicador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
