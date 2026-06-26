import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPipes } from './ejemplo-pipes';

describe('EjemploPipes', () => {
  let component: EjemploPipes;
  let fixture: ComponentFixture<EjemploPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
