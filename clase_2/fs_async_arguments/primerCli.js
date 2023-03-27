import fs from 'fs';
console.log(process.argv); // [String: path de ubicacion de node, String: path de ubicación del archivo index que se está ejecutando, otro argumento que existe en la consola]

// Lo que se escriba en la consola, aparece en el argv array. Esto nos dá poder para crear CLIs (Common Line Interfaces):
if(process.argv[2] === "create") {
    fs.writeFileSync("hola.js", "let hola = 'hola';"); // al escribir en la consola 'node primerCli.js create', se ejecuta la creación del archivo.
} else if(process.argv[2] === "version" || process.argv[2] === "-v") {
    console.log("Verson 1.00")
} else if(process.argv[2] === "help" || process.argv[2] === "-h") {
    console.log(`
        Comandos disponobles: 

        create --------------- crear un archivo hola.js
        version o -v --------- ver la versión de la app
        help o -h ------------ ver los comandos disponibles 
    `)
} else if(process.argv[2] === "project") {
    fs.mkdirSync("./src/components",{recursive: true});
    fs.mkdirSync("./src/hooks",{recursive: true});
    fs.mkdirSync("./src/utils",{recursive: true});
    fs.mkdirSync("./src/pages",{recursive: true});
}
