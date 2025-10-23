import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFor } from './componente-for';

describe('ComponenteFor', () => {
  let component: ComponenteFor;
  let fixture: ComponentFixture<ComponenteFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
