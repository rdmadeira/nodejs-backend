import Saludos from "./extend_events.js";
import NotesEvents from "./share_events.js";

const Saludo2 = new Saludos();

// on es heredado de EventEmitter y crea un listener
Saludo2.on('saludo', (data) => {
    console.log('Alguien saludó:', data);
}); 

// Podria usar el metodo emit heredado de EventEmitter,
// pero en la extensión Saludos, agregué el método saludar. 
Saludo2.emit('saludo', 'Rodri');
Saludo2.saludar('Rodri');


// ---------------------------------------------------------------------

NotesEvents.crearNota('create:note', {nota: 'lalalla'})