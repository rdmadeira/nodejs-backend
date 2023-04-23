// Todo la clase creada en events.js, en la verdad ya existe en la librería de Node
// EventEmitter es la clase que crea el objeto de eventos, ya conteniendo los metodos on y emit.
import {EventEmitter} from 'events';

const events = new EventEmitter();

events.on('user:created', (data)=> {
    console.log('user:created', data);
})

console.log(events);
events.emit('user:created', {name: "Rodrigo", lastname: "Nascimento"})