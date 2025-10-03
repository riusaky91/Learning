import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('App', () => { // se crea la suite de pruebas para el componente App
  beforeEach(async () => {// se ejecuta antes de cada prueba
    await TestBed.configureTestingModule({
  imports: [App, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {}, params: {}, queryParams: {}, data: {} } }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {// individual tests para verificar que el componente se crea correctamente
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {// individual tests para verificar que el titulo se renderiza correctamente
    const fixture = TestBed.createComponent(App); // se crea el componente
    fixture.detectChanges(); // se detectan los cambios
    const compiled = fixture.nativeElement as HTMLElement;// se obtiene el elemento nativo del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, curso-2');// se verifica que el titulo contenga el texto esperado
  });
});
