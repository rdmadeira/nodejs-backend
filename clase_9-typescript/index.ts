function hola(string: string) {
  console.log('string: ', string);
}

let miName = 'Rodrigo'; // typescript ya toma como string de modo inferencia, sin hacer falta declararla
let miName2: string; // Declarar el tipo sin su valor, está bueno ahí asignar el tipo
miName = 250; // salta error de tipeo por ser string
miName2 = 'Madeira';
hola(miName2);

hola(1254); // error de tipeo por la definición en la funcion.

let array = ['string1', 'string2', 'stringN']; // toma como array de strings...

array.push(321123); //... y salta error por ingresar un numero al array.

// Un array mezclado tendría que declarar como tal:
let array2: (string | number)[] = ['string1', 'string2', 'stringN']; // union de tipos
array2.push(321123); // No salta error, por estar definido como array de numbers o strings

console.log('array2', array2);

// Tipeo de Funciones:
function printNumbers(array: number[]): void {
  array.forEach((elem) => console.log('elem: ', elem));
}

let arr1 = ['1', '2', '3'];
let arr2 = [1, 2, 3];

printNumbers(arr1); // salta error por aceptar solamente array de numbers
printNumbers(arr2); // No salta error

// Librería ts-node permite ejecutar el archivo como typescript, permitiendo ver los errores antes de
// enviar a build.

function doble(num: number): number {
  // return 'num * 2'; // salta error
  return num * 2;
}

let doble20 = doble(20);
console.log('doble20', doble20);

// tipar un objeto: 1) Por inferencia:
let obj = {
  name: 'Rodrigo',
  lastname: 'Madeira',
};

// 2) Por tipeo literal: (es medio trabajosa!)
let obj2: { name: string; lastname?: string; age: number } = {
  name: 'Rodrigo',
  /* lastname: 'Madeira', */
  age: 41,
};

// 3) Por interface:
interface User {
  name: string;
  lastname?: string;
  age: number;
}

interface Admin {
  name: string;
  lastname?: string;
  age: number;
  edit: true;
}

// Union de interfaces:
type Client = Admin | User;

let persona1: User = {
  name: 'Rodrigo',
  age: 41,
};

let persona2: User = {
  name: 'Paula',
  age: 52,
};

let admin: Admin = {
  name: 'Rodrigo',
  age: 41,
  edit: true,
};

console.log('User', persona1);
console.log('Admin', admin);

// Ejemplo interface concepto Doctype:
interface Movil {
  avanzar(): string; // avanzar es tipada como función que retorna un string
}

interface Auto {
  chassis: string;
  motor: string;
  avanzar(): string;
}
interface Bicicleta {
  nombre: string;
  cuadro: string;
  rodado: number;
  avanzar(): string;
}

let auto1: Auto = {
  chassis: 'oiewur0ewoij0923',
  motor: 'o093093p',
  avanzar: () => 'Bici avanzó',
};

let bici1: Bicicleta = {
  cuadro: 'oiewur0ewoij0923',
  rodado: 16,
  nombre: 'Bici Caloi',
  avanzar: () => 'avanzó',
};

// Funcion ejecuta el metodo avanzar de Movil
function printAvanzo(movil: Movil) {
  console.log(movil.avanzar());
}

// Pero no salta error devido a que la COMPOSICIÓN de las interfaces interpreta que si tienen el
// mismo metodo, son objeto del mismo tipo Movil. El tipo Doctype en typescript define las cosas por lo que hacen, y no por lo que son,
// como hacen las Clases que definen los objetos por herencia.

printAvanzo(auto1);
printAvanzo(bici1);

// Funciones genericas:
// El T es el tipo de es variable.
function returnAlgo<T>(algo: T): T {
  return algo;
}

// Llamadas de funcion generica con el tipo
returnAlgo<number>(10);
returnAlgo<string>('10');

function printArray<T>(array: T[]): void {
  array.forEach((elem) => console.log(elem));
}

let arrNum = [1, 2, 3];
let arrStr = ['1', '2', '3'];

// La función genérica posibilita usar la misma función para cualquier parametro de tipo de data.
printArray<number>(arrNum);
printArray<string>(arrStr);
