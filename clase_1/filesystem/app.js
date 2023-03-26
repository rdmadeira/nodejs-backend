import * as fs from 'fs';

let htmlCreatedByNode = `
<h1>Hola Mundo</h1><p>Soy un html creado por Node js.</p>
`;
fs.writeFileSync('hola.html', htmlCreatedByNode);
console.log("Se creó un archivo html!");

fs.writeFileSync('hola.js', `
import * as fs from "fs";
export function hola() {
    console.log("Hola desde app");
}
export function tchau() {
    fs.writeFileSync("tchau.js","console.log('Tchauuu!!!!');");    
    setTimeout(()=> {
        import("./tchau.js").then(
            data => {
                console.log(data);

            }
        )
        
    }, 4000);
}
`
);
console.log('Se creó un archivo js!');

console.log(fs.readFileSync("hola.js").toString()) // readFile no ejecuta el archivo, trae un Buffer que es una representación binária de un string.

// Dynamic Import: es una promesa - cuando 
import('./hola.js').then(({hola, tchau}) => {
    hola();
    tchau();
} );