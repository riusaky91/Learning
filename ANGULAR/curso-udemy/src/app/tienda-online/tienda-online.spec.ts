import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnline } from './tienda-online';

describe('TiendaOnline', () => {
  let component: TiendaOnline;
  let fixture: ComponentFixture<TiendaOnline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaOnline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
