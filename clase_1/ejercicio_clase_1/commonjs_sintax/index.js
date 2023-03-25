const addClient = require('./addClient');
const fileName = 'Primer_text_file_with_node.txt';
const primerTexto = 'Este es un primer archivo creado por NodeJs con este texto inserido.';
const segundoTexto = 'Este texto se agregó en la linea de abajo con el caracter de break de linea \n';

addClient.crearArchivoConTexto(fileName, primerTexto);
addClient.agregarTextoAbajo(fileName, segundoTexto);
