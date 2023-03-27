// Callbacks => Funcion que es parámetro de otra función y se ejecuta después que algo sucede.

function printName(name, cb) {
    cb(name)    
};
printName("Rodrigo", console.log);

let arrayNum = [1, 2, 3];
let arrayNumDoble = arrayNum.map(num => num * 2); // los metodos de array usan callback como parámetro.

// Inmutabilidad en JS:
/// Pass by value vs Pass by reference:
//// Los datos primitivos son inmutables, porque son VALORES - ej: string, number, boolean, undefined, null, bigint.
//// Los objetos, arrays y funciones son mutables, porque son REFERENCIA de datos - 
///// ej: ()=>{} es diferente de ()=>{}.
//// Ejemplo abajo:
let miString = "Rodrigo";
miString.toUpperCase();
console.log('print '+ miString + ' pues string es inmutable.'); // print "Rodrigo" pues string es inmutable.
miString = miString.toUpperCase();
console.log('print '+ miString + ' pues estás alocando en otra dirección de memória.'); // print "RODRIGO" pues string es inmutable.

const miArray = [1, 2, 3];
miArray[0] = 1000;
console.log(miArray, ' - print un array modificado pues array es una referencia en memória.'); 
                    // print [1000, 2, 3] - un array es mutable porque es NO un valor, 
                      /// pero sí una referencia en la memória. (ej. 0x32569854540 - es una dirección adonde está alocado el array, pero no es el array).
                      /// Este lugar en la memória es mutable, puede crecer o decrecer. Pero la dirección es fija,
                      /// si está alocada como const. Vea lo que pasa si volvemos a declarar:
// miArray = [10, 20, 30]; // TypeError: Assignment to constant variable. Esá asignada como const. Trata de crear otra dirección de memória, y la declaración const no lo deja.

//// Objetos, Arrays y Funciones son referenciales y son mutables!!! Los valores primitivos string, number, boolean, undefined, null, bigint son inmutables.

/// React y el re-render:
//// React adopta la filosofia de re-render cuando algún estado cambia. 
//// Por esto, siempre hay algún aviso en React, cuando no mutás un objeto o array, tenés siempre
///// que modificar un objeto o array, creando otro, y no modificandolo. Ej.: usando el metodo Array.push o forEach.
//// De esta forma, forza el re-render. 
const miArray2 = [...miArray];
const miArray3 = miArray;
console.log(miArray === miArray2,  ' - print false porque es una cópia en otra ref de memoria.') // print false miArray2 es otro array.
console.log(miArray === miArray3, ' - print true porque estás asignando una constante a esta referencia de memória.') // print false miArray2 es otro array.

//// Si hago un cambio en miArray3, vea lo que pasa:
miArray3[0] = 100000;
console.log(miArray, miArray3); // Print el cambio en los 2 arrays pues tiene la misma referencia de memória,
                                /// creada en const miArray3 = miArray (linea 40).
//// Esto puede generar bugs por estar cambiando una variable y afectando otra. Otro motivo más para React pedir siempre cópias de los valores, o sea referencias.

//// Ahora una "pegadinha":
const miInfo = {
    name: "Rodrigo",
    tel: "12345678",
    address: {
        street: "Jose Carlos Paz",
        number: "555",
        city: "San Martin"
    }
};

const otherInfo = {...miInfo};

console.log(miInfo === otherInfo); // false - es una cópia en otra referencia.
console.log(miInfo.address === otherInfo.address); // true - 
            /// mismo siendo cópia, es true porque la cópia se hizo superficialmente. 
            /// Llamase Shallow Copy. https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/
            /// Para objetos anidados de otro objeto, el spread solo copia las propriedades superficiales, pero no a fondo.
            /// Si queres hacer una cópia a fondo (deep copy), lo correcto es:
const otherInfo2 = {
    ...miInfo, 
    address: {
        ...miInfo.address
    } 
}
console.log(miInfo.address === otherInfo2.address); // false - 
            /// en el objeto anidado address también se aplicó la cópia.

