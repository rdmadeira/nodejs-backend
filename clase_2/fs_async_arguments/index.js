import fs from 'fs';

let buff = Buffer.from("Hola!!", "utf8"); // Buffer es una representacion de memoria para poder acceder, en forma hexadecimal, que es más fácil de acceder y leer.
/// Algunas funcionalidades de node devuelven Buffers, como por ejemplo fs.
console.log(buff,' = representación binaria de ',buff.toString());
console.log(buff.toJSON()); // objeto con la propriedad data, que es un array del código binário utf8 o sea en un byte.

let htmlCreatedByNode = `
    <h1>Hola Mundo</h1><p>Soy un html creado por Node js.</p>
`;
fs.writeFileSync('hola.html', htmlCreatedByNode);
console.log("Se creó un archivo html!");

// El readFile asíncrono va a correr, pero su devolución solo se dará cuando termine el código síncrono.
// Los 2 loop síncronos abajo se ejecutan antes de la respuesta del callback asíncrono.
// Node es excelente para asincronismo, pero no está hecho para funciones muy pesadas que tardan en procesar,
// si este es el caso, la respuesta del asíncrono tardaría en llegar y estaría el loading por mucho tiempo bajando el rendimiento.
// node es hecho para ordenes y respuestas síncronas y asíncronas rápidas.
let leerHtmlAsync = fs.readFile('hola.html', (err, data) => { // readFile pide una callback que devuelve un Buffer:
    if(err) { 
        console.log("Ooops - algo pasó"); 
        return;
    }
    console.log(data, '- representación hexadecimal de:', data.toString());
});

/*// Para demonstrar ordenes de ejecución sinc vs asinc:
for(let i=0; i < 100; i++) {
    console.log("Primer console.log");
}

for(let i=0; i < 100; i++) {
    console.log("Segundo console.log");
} */

// argv:
