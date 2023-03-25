import * as fs from 'fs';

const crearArchivoConTexto = (fileName, txt) => fs.writeFileSync(fileName, txt);
const agregarTextoAbajo = (fileName, txt) => fs.appendFileSync(fileName, '\n'+txt);

export const addClient = {
    crearArchivoConTexto, agregarTextoAbajo
}