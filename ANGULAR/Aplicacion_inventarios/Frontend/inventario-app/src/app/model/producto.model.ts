export class Producto {

    idProducto?: number; // El signo de interrogación indica que este campo es opcional
    descripcion: string; // El valor por defecto es una cadena vacía
    precio: number; // El valor por defecto es 0
    existencia: number; // El valor por defecto es 0

    constructor(idProducto?: number, descripcion: string = '', precio: number = 0, existencia: number = 0) { // El signo de interrogación indica que este parámetro es opcional
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
    }


}
