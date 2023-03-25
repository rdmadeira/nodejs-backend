const fs = require('fs');
const crearArchivoConTexto = (fileName, txt) => fs.writeFileSync( fileName, txt);
const agregarTextoAbajo = (fileName, txt) => fs.appendFileSync( fileName, '\n'+txt)

module.exports = {
    crearArchivoConTexto,
    agregarTextoAbajo
}