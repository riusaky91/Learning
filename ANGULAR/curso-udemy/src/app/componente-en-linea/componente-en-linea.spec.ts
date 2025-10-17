import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEnLinea } from './componente-en-linea';

describe('ComponenteEnLinea', () => {
  let component: ComponenteEnLinea;
  let fixture: ComponentFixture<ComponenteEnLinea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEnLinea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteEnLinea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
