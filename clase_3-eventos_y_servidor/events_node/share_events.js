import {EventEmitter} from 'events';

class Notes extends EventEmitter {
    constructor() {
        super();
        this.note = "Note instances"                    
    }
    crearNota (data) {
        console.log(`${this.note}: ${data}`);
        console.log('Total listeners: ', this.listenerCount('create:note'));

        // Cuando termine, dispara el evento... 
        this.emit('create:note', data)
    } 
}

const NotesEvents = new Notes();
// Crear listeners:
NotesEvents.on('create:note', (nota) => {
    console.log('create:note', nota);
});
NotesEvents.on('create:note', (nota) => {
    console.log('create:note2', nota);
})

// Se crea una instancia con todos los listeners ya creados y se comparte esta instancia a 
// los otros archivos, app.js por ejemplo.
export default NotesEvents;