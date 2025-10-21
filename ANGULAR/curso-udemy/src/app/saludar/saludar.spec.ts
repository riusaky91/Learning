import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saludar } from './saludar';

describe('Saludar', () => {
  let component: Saludar;
  let fixture: ComponentFixture<Saludar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saludar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saludar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
