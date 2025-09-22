import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;// se crea una variable de tipo Product

  constructor() {

    this.product = {// se inicializa la variable product con un objeto que cumple con la interfaz Product
      id: 1,
      name: 'Laptop',
      price: 1500,
      isForSale: true
    }
  }

  setProdcuctName(name: string) {// se crea un metodo para cambiar el nombre del producto
    this.product.name = name;
  }
}