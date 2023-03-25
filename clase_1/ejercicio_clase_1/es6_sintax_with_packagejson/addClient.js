import * as fs from 'fs';

const crearArchivoConTexto = (fileName, txt) => fs.writeFileSync(fileName, txt);
const agregarTextoAbajo = (filePath, txt) => fs.appendFileSync(filePath, '\n'+txt);

export const addClient = {
    crearArchivoConTexto,
    agregarTextoAbajo
}