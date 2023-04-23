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
        console.log(`${this.saludo}: ${data}`);
        this.emit('saludo', data)
    } 
}

export default Saludos;