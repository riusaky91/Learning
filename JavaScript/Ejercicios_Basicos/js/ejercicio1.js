/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

const obj= {
nombre : "les",
apellido: "li"
}

const cadena = (texto) => console.log(`Total de caracteres: ${texto.length}`);

//cadena(obj.nombre);

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

*/
const recorte = (texto, numero) => console.log(`Texto recortado: ${texto.substring(0,numero)}`);

//recorte("Hola Mundo",4);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/


const separados = (texto, separador) => texto.split(separador);

//console.log(separados('hola que tal', ' '));

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repite = (texto, numero) => texto.repeat(numero);

//console.log(repite('Hola Mundo ', 3));

/*
8) Programa un funcion que elimine cierto patron de caracteres de un texto dado, pe. miFuncion
("xyz1, xyz2, xyz3, xyz4, xyz5, xyz") devolverá "1,2,3,4,5"
*/

const patron = (texto = "", patron = "") =>{
    (!texto || !patron)
        ? console.warn("No se ingreso el texto")
        : console.info(texto.replace(new RegExp(patron, "ig"),""));//remplazo en el texto con "" ; expresion regular que busca: i =>(no distingue mayusculas y minusculas), g => (busca en todas las coincidencias)
}

//patron("xyz1, xyz2, xyz3, xyz y xyz5", "xyz");

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const aleatorio = () => console.log(Math.round(Math.random()*(600 - 501))+501);

//aleatorio();

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const capicua = (numero = undefined) => 
    (!numero || typeof numero !== "number")//si el valor es vacio o si no es entero
        ? console.warn("Ingrese un valor correcto por favor")
        : (numero.toString().split("").reverse().join("") === numero.toString())//convierte a string, divide, invierte, une y compara con el original en string
            ? console.log(true)
            : console.log(false);

//capicua(2002);

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
    se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero = undefined) => {

    //validaciones

    if(numero === undefined) console.log("ingrese un numero por favor");
    if(typeof numero !== "number") console.log("ingrese un valor numerico por favor");
    if(numero < 1) console.log("ingrese un numero mayor a 0");

    if(!numero){
        console.warn("Ingrese un valor correcto por favor");
    }else{
        let calculo = 1;
        for (let index = 1; index <= numero; index++) {
            calculo *=index; 
        }
        console.log(calculo);
    }
}

//factorial();

/*
12) Programa una funcion que determine si un numero es primo (aquel que solo es divisible por si mismo y por 1) o no,
 pe miFuncion(7) devolverá true 
*/

const primos = (numero = undefined) => {

    if(!numero) return console.warn("ingrese un valor");
    if(typeof numero !== "number") return console.warn("ingrese un numero");
    if(numero < 1) return console.warn("ingrese un numero mayor a 1");

    let divisible = false;

    for (let index = 2; index < numero; index++) {
        if(numero%index === 0) {
            divisible = true;
            break;
        }
    }
    return console.log(!divisible);
}

//primos(7);

/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const par = (numero = 0) => 
    (numero % 2 === 0)
        ? console.log(`El numero: ${numero} es par`)
        : console.log(`El numero: ${numero} es impar`)

//par(29);        

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const grados = (numero = undefined, tipo = "") => {
    //if(!numero) return console.warn("ingrese un valor");
    if(!tipo) return console.warn("ingrese un tipo");
    if(tipo !== "C" && tipo !== "F") return console.warn("ingrese F o C");
    if(typeof numero !== "number") return console.warn("ingrese un numero");

    (tipo === "C") ? console.log((numero*1.8)+32,"°F") : console.log((numero - 32)*0.5,"°C")
}

//grados(0,"C")

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/


const convertidorBinario = (binario= undefined, decimal= undefined) =>{
    let digitos = 0;
    let c = 0;
    let suma =0;

    while(binario>=1){
        digitos = Math.round(binario+1);
        if (digitos%2 === 0) suma += Math.pow(2,c)
        binario /= 10;
        c++;
    }

    let suma1 = 0;
    let c1 = 0;
    let interno = 0;
    let array= [];
    while(suma1<decimal){
        suma1 += Math.pow(2,c1)
        if(suma1>decimal) {
            for (let index = c1; index >= 0; index--) {
                interno += Math.pow(2,index)
                if(interno<=decimal){
                    array.push(1);
                }else{
                    array.push(0);
                    interno = interno - Math.pow(2,index);
                }
            }
        }
        c1++;
    }

    return console.log(suma,parseInt(array.join("")));
}

//convertidorBinario(1000110,2234);






/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const porcetaje = (cantidad = undefined, descuento = undefined) => {
    if(!cantidad || !descuento) return console.warn(`Digite un valor valido`);
    if(typeof cantidad !== `number` || typeof descuento !== `number`) return console.warn(`Digite un valor numerico`)
    if(cantidad < 1 || descuento < 1 ) return console.warn(`Digite un numero mayor a 1`)

    console.log(cantidad-(cantidad*(descuento/100)));
}


//porcetaje(1000,20);

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const birthday = (fechaIngresada = undefined) =>{
    if(!fechaIngresada) return console.warn(`Digite un valor valido`);
    if(!fechaIngresada instanceof Date) return console.warn(`Digite una fecha`)//Valida si es un valor diferente a fecha
    const diff = new Date().getTime() - fechaIngresada;
    console.log(Math.floor(diff/(1000*60*60*24*30*12) ));
}

//birthday(new Date(1984,4,23));

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/


const vocalesConsonantes = ( frase = "") => {

    if(!frase) return console.warn("porfavor ingres un valor valido");
    const expresionRegularVocales = /[aeiou]/ig; //expresion regular para buscar las vocales indpendiente de si sion minuscalas o mayusculas y no se para en el primer encuentro
    const expresionRegularConsonantes = /[bcdfghjklmnpqrstvwxyz]/ig;

    return console.log(`Vocales: ${frase.match(expresionRegularVocales).length}, Consonantes: ${frase.match(expresionRegularConsonantes).length}`)
}

//vocalesConsonantes("Hola Mundo");


/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const nombre = ( nombre = "") => {

    if(!nombre) return console.warn("porfavor ingres un valor valido");
    const expresionRegularNombre = /^[a-zñáéíóú\s]+$/ig;//^ => no puede ir nada antes, + y $ => No puede ir nada despues, []=> Validar cada caracter, \s =>acepta espacios en blanco

    return (nombre.match(expresionRegularNombre)=== null) 
        ? console.warn("Nombre invalido")
        : console.log(true);
}

//nombre("Marlon estupiñan")

/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const email = ( correo = "") => {

    if(!correo) return console.warn("porfavor ingres un valor valido");
    const expresionRegularCorreo =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;//Validacion correo electronico 

    console.log(correo.match(expresionRegularCorreo))

    return (correo.match(expresionRegularCorreo)=== null) 
        ? console.warn("Correo invalido")
        : console.log(true);
}

//email("jonmirchartret@gmail.co465465{m")

/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const cuadrado = (arreglo = undefined) => {

    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!(arreglo instanceof Array)) return console.warn("ingrese un arreglo por favor");
    

    const newArr = arreglo.map(e => e*e);//Mapeando el arreglo ingresado en otro arreglo con map y multiplico mi iterador por si mismo

    return console.log(newArr);
}


//cuadrado([1, 4, 5]);
/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const altoBajo = (arreglo = undefined) => {

    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!arreglo instanceof Array) return console.warn("ingrese un arreglo por favor");
    

    numeroMayor = 1;
    numeroMenor = 1;

    arreglo.forEach(e =>{
        if(numeroMayor<e) numeroMayor = e;
        if(numeroMenor>e) numeroMenor = e; 
    });

    return console.log([numeroMayor, numeroMenor]);//tambien se podria validar con Math.max(...arreglo)
}

//altoBajo([1, 4, 5, 99, -60]);



/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const paresImpares = (arreglo = undefined) => {

    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!(arreglo instanceof Array)) return console.warn("ingrese un arreglo por favor");
    arreglo.forEach(e=> { if(typeof e !== `number`) return console.error("Ingrese un numero por favor")  } )

    arregloPares = [];
    arregloImpares = [];

    arreglo.forEach(e => (e%2===0) ? arregloPares.push(e) : arregloImpares.push(e));

    return console.log(`Pares: ${arregloPares} Impares: ${arregloImpares}`);
}

//paresImpares([1,2,3,4,5,6,7,8]);


/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const orden = (arreglo = undefined) =>{

    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!(arreglo instanceof Array)) return console.warn("ingrese un arreglo por favor");
    arreglo.forEach(e=> { if(typeof e !== `number`) return console.error("Ingrese un numero por favor")  } )
    return console.log(`asc: [${arreglo.sort((a,b)=>a-b)}], desc: [${arreglo.sort((a,b)=>b-a)}]`);
}

//orden([7, 5,7,8,6]);

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/


const duplicados = (arreglo = undefined) =>{
    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!(arreglo instanceof Array)) return console.warn("ingrese un arreglo por favor");
    const dataArr = new Set(arreglo);// Set tipo de dato que no permite duplicados
    let result = [...dataArr];
    return console.log(result);
}

//duplicados(["x", 10, "x", 2, "10", 10, true, true]);


/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
  
const promedio = (arreglo = undefined) => {
    if(!arreglo) return console.warn("Ingrese un valor por favor");
    if(!(arreglo instanceof Array)) return console.warn("ingrese un arreglo por favor");
    arreglo.forEach(e=> { if(typeof e !== `number`) return console.error("Ingrese un numero por favor")  } )
    let suma = arreglo.reduce((a,b)=>a+=b)//Funcion reductora
    return console.log(suma / arreglo.length)
} 

//promedio([9,8,7,6,5,4,3,2,1,0]);

/*

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.
*/



class Pelicula{//Creación clase pelicula
    constructor(movie){//constructor metodo adicionando un parametro
        
        this.validacionID(movie.id_IMDB);
        this.validacionTitulo(movie.titulo);
        this.validacionDirector(movie.director);
        this.validacionAñoEstreno(movie.año_estreno);
        this.validacionPaisOrigen(movie.pais_origen);
        this.validacionGeneros(movie.generos);
        this.validacionCalificacionIMDB (movie.calificacion_IMDB);
        
    }

    validacionID = (id = "" ) => {
        if(id === "" ) return console.warn("Ingrese un id por favor");
        if(id <= 9 ) return console.warn("Ingrese un id que tenga mas de 9 caracteres");
    }

    validacionTitulo = (titulo = "") => {
        if(titulo === "" ) return console.warn("Ingrese un titulo por favor");
        if(titulo.length >= 100 ) return console.warn("Ingrese un titulo que tenga menos de 100 caracteres");
    }

    validacionDirector = (director = "") => {
        if(director === "" ) return console.warn("Ingrese un director por favor");
        if(director.length >= 50 ) return console.warn("Ingrese un director que tenga menos de 50 caracteres");
    }

    validacionAñoEstreno = (año_estreno = undefined) => {
        if(año_estreno === undefined ) return console.warn("Ingrese un año de estreno por favor");
        if(typeof año_estreno !== `number`) return console.warn("Ingrese un valor nuemrico por favor");
        if(año_estreno <= 999 ) return console.warn("Ingrese un año de 4 digitos");
    }

    validacionPaisOrigen = (pais_origen = undefined) => {
        if(pais_origen === "" ) return console.warn("Ingrese un pais de origen por favor");
        if(!(pais_origen instanceof Array) ) return console.warn("Ingrese uno o varios paises de origen como arreglos por favor");
    }

    validacionGeneros = (generos = undefined) => {
        if(generos === undefined ) return console.warn("Ingrese un genero por favor");
        if(!(generos instanceof Array) ) return console.warn("Ingrese uno o varios generos como arreglos por favor");
    }

    validacionCalificacionIMDB = (calificacion_IMDB = undefined) => {
        if(calificacion_IMDB === undefined ) return console.warn("Ingrese una calificacion por favor");
        if(calificacion_IMDB > 10 || calificacion_IMDB < 0) return console.warn("la calificavion debe esta entre 0 y 10");
    }

    static listaGeneros() {
      return [`accion`, `comedia`, `terror`, `parodia`, `experimental`];
    }

    

    fichaTecnica = () => {
        return ficha = {
            id_IMDB : movie.id_IMDB,
            titulo : movie.titulo,
            director : movie.director,
            año_estreno : movie.año_estreno,
            pais_origen : movie.pais_origen,
            generos : movie.generos,
            calificacion_IMDB : movie.calificacion_IMDB
        } 
    }

  }

  movie1 = { 
    id_IMDB : "TI34444751",
    titulo : "titanic",
    director : "carl",
    año_estreno : 2021,
    pais_origen : ["USA", "Inglaterra"],
    generos : ["drama", "accion"],
    calificacion_IMDB : 6
  }

  movie2 = { 
    id_IMDB : "LL34444751",
    titulo : "avengers",
    director : "trend",
    año_estreno : 2020,
    pais_origen : ["Colombia"],
    generos : ["drama", "accion"],
    calificacion_IMDB : 9
  }

  movie3 = { 
    id_IMDB : "AA34444751",
    titulo : "Ametiville",
    director : "lois",
    año_estreno : 2020,
    pais_origen : ["USA"],
    generos : ["terror"],
    calificacion_IMDB : 3
  }

  const pelicula = new Pelicula(movie1);



