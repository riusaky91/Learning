# DOCUMENTACIÓN COMPLETA - TIENDA ONLINE

**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Proyecto:** Tienda Online - Aplicación Web Angular  
**Autor:** Equipo de Desarrollo  

---

## TABLA DE CONTENIDOS

1. [SECCIÓN I: DOCUMENTACIÓN PARA USUARIO FINAL](#sección-i-documentación-para-usuario-final)
2. [SECCIÓN II: DOCUMENTACIÓN TÉCNICA](#sección-ii-documentación-técnica)
3. [SECCIÓN III: DOCUMENTACIÓN DE DESARROLLO](#sección-iii-documentación-de-desarrollo)

---

# SECCIÓN I: DOCUMENTACIÓN PARA USUARIO FINAL

## 1. INTRODUCCIÓN A LA APLICACIÓN

### 1.1 ¿Qué es Tienda Online?

Tienda Online es una aplicación web moderna y segura que permite a los usuarios:
- Explorar y consultar un catálogo de productos
- Crear una cuenta de usuario personalizada
- Gestionar productos (agregar, editar, eliminar)
- Acceder a información sobre la tienda
- Visualizar ejemplos interactivos de funcionalidades

### 1.2 Ventajas Principales

✓ **Interfaz intuitiva:** Diseño limpio y fácil de usar  
✓ **Seguridad:** Sistema de autenticación con credenciales personales  
✓ **Acceso rápido:** Carga rápida de contenidos  
✓ **Responsivo:** Compatible con dispositivos móviles y escritorio  
✓ **Confiable:** Respaldado por tecnología Firebase  

---

## 2. GUÍA DE INICIO RÁPIDO

### 2.1 Acceso a la Aplicación

1. Abre tu navegador web preferido (Chrome, Firefox, Edge, Safari)
2. Navega a la URL: `http://localhost:4200/`
3. Serás redirigido automáticamente al formulario de **Login**

### 2.2 Proceso de Autenticación

#### Primer Acceso (Registro)

> ⚠️ **Nota:** Solicita al administrador de la tienda un email y contraseña para crear tu cuenta en Firebase.

1. Ingresa tu **correo electrónico** en el campo "Email"
2. Ingresa tu **contraseña** en el campo "Contraseña"
3. Haz clic en el botón **"Iniciar Sesión"**
4. Si las credenciales son correctas, accederás automáticamente al panel principal

#### Acceso Consecutivos

- Repite el mismo proceso con tus credenciales

### 2.3 Cerrar Sesión

1. Localiza el **botón "Logout"** en la navegación superior
2. Haz clic para cerrar tu sesión
3. Serás redirigido automáticamente a la página de Login

---

## 3. FUNCIONALIDADES PRINCIPALES

### 3.1 Panel de Inicio (Inicio)

**Ubicación:** Primera página después de autenticarse  
**Descripción:** Bienvenida a la tienda online con información general y accesos rápidos.

**Características:**
- Mensaje de bienvenida personalizado
- Enlaces directos a secciones principales
- Información sobre las últimas actualizaciones

### 3.2 Listado de Productos

**Ubicación:** Menú principal → "Listado de Productos"  
**Descripción:** Visualiza todos los productos disponibles en la tienda.

**Características:**
- **Ver productos:** Lista completa de artículos con descripción y precio
- **Buscar/Filtrar:** Localiza productos específicos
- **Editar producto:** Modifica información de un artículo existente
- **Eliminar producto:** Remueve un producto del catálogo
- **Ver detalles:** Haz clic en cualquier producto para ver más información

### 3.3 Agregar Nuevo Producto

**Ubicación:** Menú principal → "Agregar Producto"  
**Descripción:** Formulario para añadir nuevos artículos al catálogo.

**Pasos:**
1. Completa el campo **"Descripción"** con detalles del producto
2. Ingresa el **"Precio"** del artículo
3. Revisa los datos ingresados
4. Haz clic en **"Guardar"** para confirmar
5. El producto se añadirá automáticamente al listado

**Validaciones:**
- La descripción no puede estar vacía
- El precio debe ser un número válido (mayor a 0)

### 3.4 Editar Producto

**Ubicación:** Desde el listado de productos → Botón "Editar"  
**Descripción:** Modifica la información de un producto existente.

**Pasos:**
1. Accede al listado de productos
2. Localiza el producto a modificar
3. Haz clic en el botón **"Editar"**
4. El formulario se cargará con los datos actuales
5. Realiza los cambios necesarios
6. Haz clic en **"Actualizar"** para guardar los cambios

### 3.5 Acerca De (Información)

**Ubicación:** Menú principal → "Acerca De"  
**Descripción:** Información sobre la tienda, su historia, misión y contacto.

**Contenido:**
- Historia de la empresa
- Misión y valores
- Información de contacto
- Enlaces útiles

### 3.6 Componentes de Ejemplo

Estos son componentes educativos para demostrar funcionalidades:

#### 3.6.1 Calculadora
**Ubicación:** Menú → "Calculadora"  
**Función:** Realiza operaciones matemáticas básicas (suma, resta, multiplicación, división)

#### 3.6.2 Ejemplo de Alerta
**Ubicación:** Menú → "Alerta"  
**Función:** Demuestra el uso de mensajes de alerta en la aplicación

#### 3.6.3 Replicador
**Ubicación:** Menú → "Replicador"  
**Función:** Muestra ejemplos de duplicación de datos en la interfaz

---

## 4. NAVEGACIÓN DE LA APLICACIÓN

### 4.1 Estructura del Menú

```
┌─ INICIO (Protegido)
├─ ACERCA (Protegido)
├─ LISTADO DE PRODUCTOS
├─ AGREGAR PRODUCTO
├─ CALCULADORA
├─ ALERTA
├─ REPLICADOR
└─ LOGOUT
```

### 4.2 Elementos de la Interfaz

**Barra de Navegación Superior:**
- Logo y nombre de la tienda
- Enlaces a secciones principales
- Botón de perfil/usuario
- Botón de cierre de sesión (Logout)

**Pie de Página:**
- Información de contacto
- Enlaces sociales
- Derechos de autor

---

## 5. GESTIÓN DE ERRORES Y SOLUCIÓN DE PROBLEMAS

### 5.1 Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| "Email o contraseña incorrectos" | Credenciales inválidas | Verifica tu email y contraseña |
| "Error al conectar con la base de datos" | Problema de conexión | Revisa tu conexión a internet |
| "El producto no se guardó" | Datos incompletos | Completa todos los campos requeridos |
| "Error: Ruta no encontrada" | Acceso a URL inexistente | Usa el menú de navegación |

### 5.2 Preguntas Frecuentes (FAQ)

**P: ¿Olvidé mi contraseña?**  
R: Contacta al administrador de la tienda para resetear tu contraseña.

**P: ¿Puedo cambiar mi perfil?**  
R: Las opciones de perfil se encuentran en el menú de usuario (esquina superior derecha).

**P: ¿Cuántos productos puedo agregar?**  
R: No hay límite de productos que puedas agregar al catálogo.

**P: ¿Se guardan mis productos si cierto sesión?**  
R: Sí, todos los productos se guardan en la base de datos y permanecerán cuando vuelvas a iniciar sesión.

---

## 6. CONSEJOS Y MEJORES PRÁCTICAS

### 6.1 Para Usuarios Nuevos
1. Familiarízate primero con el menú de navegación
2. Explora los componentes de ejemplo para entender las funcionalidades
3. Comienza agregando algunos productos de prueba
4. Lee la sección "Acerca De" para conocer más sobre la tienda

### 6.2 Para Usuarios Avanzados
1. Mantén tus credenciales de acceso seguras
2. Actualiza regularmente la información de productos
3. Revisa los reportes periódicamente
4. Utiliza funciones de búsqueda para gestionar grandes catálogos

---

## 7. SOPORTE Y CONTACTO

**Para reportar problemas o sugerencias:**
- Email: soporte@tiendaonline.com
- Teléfono: +34 912 345 678
- Chat: Disponible en horario laboral (9:00 - 18:00)
- Formulario de contacto: Disponible en la sección "Acerca De"

---

---

# SECCIÓN II: DOCUMENTACIÓN TÉCNICA

## 1. DESCRIPCIÓN GENERAL DE LA ARQUITECTURA

### 1.1 Stack Tecnológico

| Componente | Versión | Descripción |
|-----------|---------|-------------|
| **Angular** | 20.2.0 | Framework principal para la aplicación SPA |
| **TypeScript** | 5.9.2 | Lenguaje de programación tipado |
| **Bootstrap** | 5.3.8 | Framework CSS para diseño responsivo |
| **Firebase** | 12.13.0 | Backend-as-a-Service (Autenticación y Base de Datos) |
| **RxJS** | 7.8.0 | Programación reactiva con Observables |

### 1.2 Arquitectura General

```
┌─────────────────────────────────────────────────────────┐
│                  Cliente Angular (SPA)                   │
│  ┌─────────────────────────────────────────────────────┐│
│  │              Componentes Angular                    ││
│  │  ├─ App Component (Root)                            ││
│  │  ├─ Navigation Component                            ││
│  │  ├─ Login Component                                 ││
│  │  ├─ Listado Productos Component                     ││
│  │  ├─ Formulario Producto Component                   ││
│  │  └─ Otros Componentes...                            ││
│  └─────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────┐│
│  │              Servicios Angular                      ││
│  │  ├─ Firebase Service                                ││
│  │  ├─ Login Service                                   ││
│  │  ├─ Datos Service                                   ││
│  │  ├─ Guardian Service (Route Guard)                  ││
│  │  └─ Producto Service                                ││
│  └─────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────┐│
│  │              Modelos de Datos                        ││
│  │  └─ Product Model                                    ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
                        │
                        │ HTTP/REST API
                        ▼
┌─────────────────────────────────────────────────────────┐
│              Firebase Backend                            │
│  ├─ Authentication Service                              │
│  ├─ Firestore Database                                  │
│  ├─ Real-time Database                                  │
│  └─ Storage Service                                     │
└─────────────────────────────────────────────────────────┘
```

---

## 2. ESTRUCTURA DE PROYECTO

### 2.1 Organización de Carpetas

```
tienda-online/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── acerca-component/          # Info sobre la tienda
│   │   │   ├── ejemplo-alerta/            # Demo de alertas
│   │   │   ├── ejemplo-calculadora/       # Demo de calculadora
│   │   │   ├── ejemplo-replicador/        # Demo de replicación
│   │   │   ├── error-component/           # Página de error 404
│   │   │   ├── inicio-component/          # Panel principal
│   │   │   ├── listado-productos/         # Listado y gestión
│   │   │   │   ├── formulario-producto/   # CRUD de productos
│   │   │   │   └── producto/              # Card de producto
│   │   │   ├── login/                     # Autenticación
│   │   │   └── navegacion/                # Menú principal
│   │   │
│   │   ├── servicios/                     # Capa de servicios
│   │   │   ├── firebase-service.ts        # Inicialización Firebase
│   │   │   ├── login-service.ts           # Gestión de autenticación
│   │   │   ├── guardian-service.ts        # Route Guard
│   │   │   ├── datos-service.ts           # Operaciones de datos
│   │   │   └── productoService.ts         # Lógica de productos
│   │   │
│   │   ├── models/
│   │   │   └── product.model.ts           # Interfaz de Producto
│   │   │
│   │   ├── app.ts                         # Componente raíz
│   │   ├── app.routes.ts                  # Definición de rutas
│   │   ├── app.config.ts                  # Configuración principal
│   │   ├── app.css                        # Estilos globales
│   │   └── app.html                       # Template raíz
│   │
│   ├── index.html                         # HTML principal
│   ├── styles.css                         # Estilos globales
│   └── main.ts                            # Punto de entrada
│
├── public/                                # Archivos estáticos
│   └── index.html
│
├── firebase.json                          # Config Firebase
├── package.json                           # Dependencias
├── angular.json                           # Config Angular CLI
├── tsconfig.json                          # Config TypeScript
└── README.md                              # Documentación básica
```

---

## 3. CONFIGURACIÓN DE FIREBASE

### 3.1 Credenciales y Configuración

**Archivo:** [src/app/servicios/firebase-service.ts](src/app/servicios/firebase-service.ts)

```typescript
firebaseConfig = {
  apiKey: "AIzaSyAEhuK4WuQHj5sscRNrbKtyn8B_ii6bDV0",
  authDomain: "tienda-online-baeb5.firebaseapp.com",
  databaseURL: "https://tienda-online-baeb5-default-rtdb.firebaseio.com",
  projectId: "tienda-online-baeb5",
  storageBucket: "tienda-online-baeb5.firebasestorage.app",
  messagingSenderId: "881922121462",
  appId: "1:881922121462:web:83664e17d06890d3eb96d7"
};
```

### 3.2 Servicios Utilizados

- **Authentication:** Autenticación por email/contraseña
- **Firestore:** Base de datos NoSQL para productos
- **Realtime Database:** BD en tiempo real complementaria
- **Storage:** Almacenamiento de archivos

---

## 4. SISTEMA DE RUTAS

### 4.1 Rutas Disponibles

| Ruta | Componente | Protegida | Descripción |
|------|-----------|----------|-------------|
| `/` | InicioComponent | ✓ | Panel principal |
| `/acerca` | AcercaComponent | ✓ | Información de la tienda |
| `/login` | Login | ✗ | Formulario de autenticación |
| `/listado-productos` | ListadoProductos | ✗ | Listado de productos |
| `/agregar` | FormularioProducto | ✗ | Crear nuevo producto |
| `/editar/:llave` | FormularioProducto | ✗ | Editar producto existente |
| `/alerta` | EjemploAlerta | ✗ | Demo de alertas |
| `/replicador` | EjemploReplicador | ✗ | Demo de replicación |
| `/calculadora` | EjemploCalculadora | ✗ | Calculadora interactiva |
| `/**` | ErrorComponent | ✗ | Página 404 |

### 4.2 Route Guards

**GuardianService** protege las rutas que requieren autenticación:
- Verifica si el usuario tiene un token válido
- Redirige a login si no está autenticado
- Permite acceso si la autenticación es válida

---

## 5. MODELOS DE DATOS

### 5.1 Product Model

```typescript
export interface ProductModel {
  descripcion: string;  // Descripción del producto
  precio: number;       // Precio del producto
}
```

**Uso:** Interfaz principal para tipado de productos en toda la aplicación.

---

## 6. SERVICIOS CLAVE

### 6.1 Firebase Service

**Responsabilidades:**
- Inicialización de Firebase
- Proporciona instancias de Auth y Firestore
- Centraliza la configuración de conexión

### 6.2 Login Service

**Responsabilidades:**
- Manejo de autenticación (login/logout)
- Gestión de tokens
- Verificación de estado de sesión
- Navegación post-autenticación

**Métodos Principales:**
```typescript
login(email: string, password: string): void
getIdToken(): string | null
isAuthenticated(): boolean
logout(): void
```

### 6.3 Datos Service

**Responsabilidades:**
- Operaciones CRUD con la base de datos
- Gestión de listados de productos
- Sincronización de datos en tiempo real

### 6.4 Producto Service

**Responsabilidades:**
- Lógica específica de productos
- Validaciones de datos
- Transformación de productos

### 6.5 Guardian Service (Route Guard)

**Responsabilidades:**
- Protección de rutas
- Verificación de autenticación
- Redirección condicional

---

## 7. FLUJOS PRINCIPALES

### 7.1 Flujo de Autenticación

```
1. Usuario accede a la aplicación
        ↓
2. GuardianService verifica token
        ↓
3A. Si no hay token → Redirige a /login
        ↓
4A. Usuario ingresa credenciales
        ↓
5A. LoginService valida en Firebase
        ↓
6A. Si es válido → Obtiene token y redirige a /listado-productos
        ↓
7A. Si es inválido → Muestra error

3B. Si hay token → Permite acceso a ruta protegida
```

### 7.2 Flujo de Gestión de Productos

```
1. Usuario accede a /listado-productos
        ↓
2. Component carga listado desde DatosService
        ↓
3. Se muestran los productos en la interfaz
        ↓
4. Usuario elige acción:
   ├─ Ver detalles
   ├─ Editar (/editar/:llave)
   └─ Eliminar
        ↓
5. Para Editar: Se carga el formulario con datos
        ↓
6. Usuario modifica y envía cambios
        ↓
7. DatosService actualiza en Firebase
        ↓
8. Se actualiza la vista automáticamente
```

---

## 8. VARIABLES DE ENTORNO Y CONFIGURACIÓN

### 8.1 Desarrollo

**Comando:** `npm start`  
**Puerto:** http://localhost:4200  
**Configuración:** angular.json → projects → tienda-online → architect → serve

### 8.2 Producción

**Comando:** `npm run build`  
**Output:** `/dist` directory  
**Optimizaciones:** Minificación, tree-shaking, lazy loading

---

## 9. COMPONENTES PRINCIPALES

### 9.1 App Component (Root)

**Archivo:** [src/app/app.ts](src/app/app.ts)  
**Descripción:** Componente raíz que contiene la estructura principal

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navegacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-online');
}
```

### 9.2 Navigation Component

**Descripción:** Barra de navegación principal con menú y opciones de usuario

### 9.3 Login Component

**Descripción:** Formulario de autenticación con validaciones

### 9.4 Listado Productos Component

**Descripción:** Panel de visualización y gestión de productos

---

## 10. ESTADO Y REACTIVIDAD

### 10.1 Angular Signals

La aplicación utiliza Angular Signals para reactividad:
```typescript
protected readonly title = signal('tienda-online');
```

### 10.2 RxJS Observables

Para operaciones asíncronas y manejo de streams de datos en los servicios.

---

---

# SECCIÓN III: DOCUMENTACIÓN DE DESARROLLO

## 1. GUÍA DE CONFIGURACIÓN DEL ENTORNO

### 1.1 Requisitos Previos

- **Node.js:** v18.19.0 o superior
- **npm:** v9.0.0 o superior  
- **Git:** v2.0.0 o superior
- **Editor:** Visual Studio Code (recomendado)

### 1.2 Instalación Inicial

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar a la carpeta del proyecto
cd tienda-online

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Acceder a http://localhost:4200
```

### 1.3 Instalación de Dependencias

```bash
# Instalar dependencias principales
npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/platform-browser @angular/router bootstrap firebase rxjs

# Instalar dependencias de desarrollo
npm install --save-dev @angular/build @angular/cli @angular/compiler-cli typescript @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

---

## 2. ESTRUCTURA DE ARCHIVOS Y CONVENCIONES

### 2.1 Nomenclatura de Componentes

**Convención Angular:**
```
nombre-del-componente/
├── nombre-del-componente.ts        # Clase del componente
├── nombre-del-componente.html      # Template
├── nombre-del-componente.css       # Estilos
└── nombre-del-componente.spec.ts   # Tests unitarios
```

**Ejemplos en el proyecto:**
- `login/login.ts` → Componente Login
- `listado-productos/listado-productos.ts` → Componente Listado
- `formulario-producto/formulario-producto.ts` → Componente Formulario

### 2.2 Nomenclatura de Servicios

```
[nombre]-service.ts
```

**Ejemplos:**
- `firebase-service.ts`
- `login-service.ts`
- `datos-service.ts`
- `productoService.ts`

### 2.3 Nomenclatura de Modelos

```
[nombre].model.ts
```

**Ejemplo:**
- `product.model.ts`

---

## 3. GUÍA DE DESARROLLO

### 3.1 Crear un Nuevo Componente

```bash
# Usar Angular CLI para generar componente
ng generate component nombre-componente

# Esto crea:
# - nombre-componente/nombre-componente.ts
# - nombre-componente/nombre-componente.html
# - nombre-componente/nombre-componente.css
# - nombre-componente/nombre-componente.spec.ts
```

### 3.2 Crear un Nuevo Servicio

```bash
# Generar servicio
ng generate service servicios/nombre-service

# Esto crea:
# - servicios/nombre-service.ts
# - servicios/nombre-service.spec.ts
```

### 3.3 Importar Componente en Rutas

**Archivo:** [src/app/app.routes.ts](src/app/app.routes.ts)

```typescript
import { NuevoComponent } from './nuevo-componente/nuevo-componente';

export const routes: Routes = [
  { path: 'nueva-ruta', component: NuevoComponent },
  // ... otras rutas
];
```

### 3.4 Inyectar Servicio en Componente

```typescript
import { LoginService } from '../../servicios/login-service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css'
})
export class MiComponente {
  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login('email@example.com', 'password');
  }
}
```

---

## 4. MANEJO DE AUTENTICACIÓN

### 4.1 Implementar Login en Componente

```typescript
import { Component } from '@angular/core';
import { LoginService } from '../../servicios/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onLogin() {
    this.loginService.login(this.email, this.password);
  }

  onLogout() {
    this.loginService.logout();
  }
}
```

### 4.2 Verificar Autenticación

```typescript
// En un componente o servicio
if (this.loginService.isAuthenticated()) {
  // Usuario autenticado
} else {
  // Usuario no autenticado
}

// Obtener token
const token = this.loginService.getIdToken();
```

### 4.3 Proteger Rutas

**Ya implementado en [src/app/app.routes.ts](src/app/app.routes.ts):**

```typescript
{ 
  path: 'inicio', 
  component: InicioComponent, 
  canActivate: [GuardianService] 
}
```

El `GuardianService` verifica automáticamente la autenticación antes de permitir acceso.

---

## 5. OPERACIONES CON BASE DE DATOS (CRUD)

### 5.1 Crear Producto

```typescript
// En un servicio o componente
import { DatosService } from '../servicios/datos-service';

export class FormularioProducto {
  constructor(private datosService: DatosService) {}

  agregarProducto(descripcion: string, precio: number) {
    const producto = { descripcion, precio };
    this.datosService.crear(producto);
  }
}
```

### 5.2 Leer Productos

```typescript
leerProductos() {
  this.datosService.obtenerProductos().subscribe(productos => {
    console.log(productos);
    // Procesar productos
  });
}
```

### 5.3 Actualizar Producto

```typescript
actualizarProducto(llave: string, datos: ProductModel) {
  this.datosService.actualizar(llave, datos);
}
```

### 5.4 Eliminar Producto

```typescript
eliminarProducto(llave: string) {
  this.datosService.eliminar(llave);
}
```

---

## 6. VALIDACIONES Y MANEJO DE ERRORES

### 6.1 Validación de Formularios

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MiComponente {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      descripcion: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  enviar() {
    if (this.formulario.valid) {
      // Procesar formulario
    }
  }
}
```

### 6.2 Manejo de Errores en Servicios

```typescript
login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Éxito
      console.log('Usuario autenticado:', userCredential.user);
    })
    .catch((error) => {
      // Error
      console.error('Error de autenticación:', error.message);
      alert(`Error: ${error.message}`);
    });
}
```

### 6.3 Validaciones Personalizadas

```typescript
// Crear un validador personalizado
function precioValidator(control: AbstractControl): ValidationErrors | null {
  const precio = control.value;
  
  if (!precio) return null;
  
  if (isNaN(precio) || precio <= 0) {
    return { 'precioInvalido': true };
  }
  
  return null;
}

// Usar en formulario
this.formulario = this.fb.group({
  precio: ['', [Validators.required, precioValidator]]
});
```

---

## 7. TESTING

### 7.1 Ejecutar Tests Unitarios

```bash
npm test
```

Abre Karma (http://localhost:9876) en el navegador y ejecuta los tests.

### 7.2 Escribir Test Unitario

**Archivo:** [src/app/ejemplo-componente/ejemplo-componente.spec.ts](src/app/ejemplo-componente/ejemplo-componente.spec.ts)

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiComponente } from './mi-componente';

describe('MiComponente', () => {
  let component: MiComponente;
  let fixture: ComponentFixture<MiComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente]
    }).compileComponents();

    fixture = TestBed.createComponent(MiComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar título', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hola');
  });
});
```

### 7.3 Testing de Servicios

```typescript
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login-service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('debe crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debe verificar si está autenticado', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
```

---

## 8. BUILD Y DEPLOYMENT

### 8.1 Build para Desarrollo

```bash
npm start
# o
ng serve
```

Inicia servidor de desarrollo con hot reload en `http://localhost:4200`

### 8.2 Build para Producción

```bash
npm run build
# o
ng build --configuration production
```

Genera archivos optimizados en `/dist/tienda-online/`

### 8.3 Deploy a Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar Firebase
firebase init hosting

# Deploy
npm run build && firebase deploy
```

---

## 9. VARIABLES DE ENTORNO

### 9.1 Configuración para Desarrollo vs Producción

**Archivo:** `src/environments/`

```typescript
// environment.ts (Desarrollo)
export const environment = {
  production: false,
  firebaseConfig: { /* ... */ }
};

// environment.prod.ts (Producción)
export const environment = {
  production: true,
  firebaseConfig: { /* ... */ }
};
```

### 9.2 Usar en Componentes

```typescript
import { environment } from '../../../environments/environment';

export class AppComponent {
  isProduction = environment.production;
}
```

---

## 10. MEJORES PRÁCTICAS

### 10.1 Estructura de Código

✓ **Separación de responsabilidades:** Lógica en servicios, presentación en componentes  
✓ **DRY (Don't Repeat Yourself):** Reutilizar componentes y servicios  
✓ **SOLID:** Principios de diseño en la arquitectura  
✓ **Tipado:** Usar TypeScript estrictamente  

### 10.2 Naming Conventions

```typescript
// ✓ Correcto
export class ProductService { }
export interface ProductModel { }
export const PRODUCT_LIST_SIZE = 10;
private _selectedProduct: ProductModel;

// ✗ Incorrecto
export class productService { }
export interface product { }
export const product_list_size = 10;
export private selectedProduct: ProductModel;
```

### 10.3 Funciones Reusables

```typescript
// ✓ Crear utilidades compartidas
export class ValidationUtil {
  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static isValidPrice(price: number): boolean {
    return price > 0 && !isNaN(price);
  }
}

// Usar en varios componentes
if (ValidationUtil.isValidEmail(email)) { }
if (ValidationUtil.isValidPrice(price)) { }
```

### 10.4 Comentarios y Documentación

```typescript
// ✓ Buenos comentarios
/**
 * Autentica un usuario con email y contraseña
 * @param email - Email del usuario
 * @param password - Contraseña del usuario
 * @returns Observable<void>
 */
login(email: string, password: string): void { }

// ✗ Comentarios obvios
// Obtener el email
const email = this.email; // variable email

// Crear un usuario
const usuario = new User();
```

### 10.5 Manejo de Memoria y Performance

```typescript
// ✓ Desuscribirse correctamente
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.data = data;
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

// ✗ Memory leak
ngOnInit() {
  this.service.getData().subscribe(data => {
    this.data = data;
    // Sin desuscripción
  });
}
```

### 10.6 Logging y Debugging

```typescript
// ✓ Logging estructurado
export class LoggerService {
  debug(message: string, data?: any) {
    console.debug(`[DEBUG] ${message}`, data);
  }

  error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error);
  }
}

// Usar
this.logger.debug('Producto cargado', producto);
this.logger.error('Error al cargar producto', error);
```

---

## 11. DEBUGGING Y TROUBLESHOOTING

### 11.1 Herramientas de Debugging

**Chrome DevTools:**
```
F12 → Sources → ng:// → Ver código TypeScript
F12 → Console → Logs y errores
```

**Angular DevTools:**
- Extensión de Chrome para Angular
- Permite inspeccionar componentes y servicios

### 11.2 Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| "Can't resolve module" | Importación incorrecta | Verificar ruta del módulo |
| "NullPointerException" | Acceso a propiedad undefined | Usar optional chaining `?.` |
| "Change detection failed" | Cambios fuera de Angular zone | Usar `NgZone.run()` |
| "Route not found" | Ruta no configurada | Añadir a `app.routes.ts` |

### 11.3 Modo Strict

**Habilitar TypeScript Strict Mode en `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

---

## 12. PERFORMANCE Y OPTIMIZACIÓN

### 12.1 Lazy Loading de Módulos

```typescript
// En app.routes.ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
}
```

### 12.2 Change Detection Strategy

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.html',
  styleUrl: './producto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent {
  // Optimiza detección de cambios
}
```

### 12.3 TrackBy en *ngFor

```html
<!-- ✓ Mejor rendimiento -->
<div *ngFor="let producto of productos; trackBy: trackByProductoId">
  {{ producto.descripcion }}
</div>
```

```typescript
trackByProductoId(index: number, producto: ProductModel): string {
  return producto.id; // Identificador único
}
```

---

## 13. CONTROL DE VERSIONES (GIT)

### 13.1 Workflow Git

```bash
# Crear rama para nueva funcionalidad
git checkout -b feature/nueva-funcionalidad

# Realizar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: agregar nueva funcionalidad"

# Push a repositorio remoto
git push origin feature/nueva-funcionalidad

# Crear Pull Request
# (En GitHub/GitLab)

# Merge a main después de review
git checkout main
git merge feature/nueva-funcionalidad
```

### 13.2 Convención de Commits

```
feat: Agregar nueva característica
fix: Corregir bug
docs: Cambios en documentación
style: Cambios en formato de código
refactor: Refactorización sin cambios de funcionalidad
test: Agregar o actualizar tests
chore: Tareas de mantenimiento
```

---

## 14. RECURSOS ADICIONALES

### 14.1 Documentación Oficial

- [Angular Documentation](https://angular.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

### 14.2 Herramientas Recomendadas

- **IDE:** Visual Studio Code
- **Extensiones VS Code:**
  - Angular Language Service
  - Prettier - Code formatter
  - ESLint
  - Thunder Client (API testing)
- **Testing:** Jasmine, Karma
- **Version Control:** Git

### 14.3 Cursos y Tutoriales

- Angular Official Tutorial
- Firebase by Google
- TypeScript for JavaScript Programmers

---

## 15. CHECKLIST PARA NUEVOS DESARROLLADORES

- [ ] Clonar repositorio
- [ ] Instalar Node.js y npm
- [ ] Ejecutar `npm install`
- [ ] Leer esta documentación
- [ ] Revisar estructura de carpetas
- [ ] Ejecutar `npm start`
- [ ] Explorar componentes existentes
- [ ] Entender flujos de autenticación
- [ ] Crear primer componente de prueba
- [ ] Ejecutar tests con `npm test`
- [ ] Revisar convenciones de código
- [ ] Contactar con el equipo para preguntas

---

## 16. CONTACTO Y SOPORTE DEL EQUIPO

**Team Lead:** [Nombre del Lead]  
**Email Técnico:** tech-support@tiendaonline.com  
**Canal Slack:** #development  
**Horario de Soporte:** Lunes a Viernes, 9:00 - 18:00  

---

# APÉNDICE: REFERENCIAS RÁPIDAS

## A. Comandos Útiles

```bash
# Instalación y Setup
npm install                           # Instalar dependencias
npm start                             # Iniciar desarrollo
npm run build                         # Build producción

# Desarrollo
ng generate component nombre          # Crear componente
ng generate service nombre            # Crear servicio
ng lint                               # Linting de código

# Testing
npm test                              # Ejecutar tests
npm test -- --code-coverage          # Tests con cobertura

# Deploy
firebase init                         # Inicializar Firebase
firebase deploy                       # Deploy a Firebase Hosting

# Git
git clone <url>                       # Clonar repositorio
git checkout -b feature/nombre        # Crear rama
git commit -m "mensaje"               # Commit
git push origin nombre-rama           # Push
```

## B. Atajos en Terminal

```bash
# Combinaciones útiles
npm start                             # Development server en puerto 4200
npm test -- --watch                   # Tests en modo watch
npm run build -- --prod               # Build optimizado
```

## C. Estructura Rápida de Archivos

```
tienda-online/
├── src/app/
│   ├── [nombre-componente]/
│   │   ├── [nombre].ts
│   │   ├── [nombre].html
│   │   ├── [nombre].css
│   │   └── [nombre].spec.ts
│   ├── servicios/
│   │   └── [nombre]-service.ts
│   ├── models/
│   │   └── [nombre].model.ts
│   ├── app.routes.ts
│   └── app.ts
└── package.json
```

---

**Fin de la Documentación**

---

**Documento preparado por:** Equipo de Desarrollo  
**Última actualización:** Mayo 2026  
**Versión:** 1.0  
**Estado:** Completo ✓

*Esta documentación debe ser actualizada cuando se agreguen nuevas funcionalidades o cambios significativos al proyecto.*
