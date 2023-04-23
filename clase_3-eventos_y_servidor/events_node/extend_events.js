import {EventEmitter} from 'events';

class Saludos extends EventEmitter {
    constructor() {
// El metodo super de emmascript6 es el mismo que una función llamando con el método call, 
// anteriormente, que se usaba de esta forma: 
// function Saludos () {
//      EventEmitter.call(this);   
// }
        super();
        this.saludo = "Hola!!!"                    
    }
    saludar (data) {
        // Acá puedo hacer lo que yo quiero...
        // Ejs.: registrar algo, crear o modificar una db, etc. 
        console.log(`${this.saludo}: ${data}`);


        // Cuando termine, dispara el evento... 
        this.emit('saludo', data)
    } 
}

export default Saludos;