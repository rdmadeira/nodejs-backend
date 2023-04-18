class EventEmitter { // es como se puede crear un objeto de listeners de acuerdo con el tipo de evento
    constructor() {
        this.events= {}
    }
    on(type, listener) { // metodo que crea o adiciona una funcion a un tipo de evento
        this.events[type] = this.events[type] || []
        this.events[type].push(listener)
    }
    emit(type, param) { // metodo que ejecuta o dispara (dispatch) la funcion
        if(this.events[type]) {
            this.events[type].forEach(listener => {
                listener(param);
            });
        }
    }
}

const emitter = new EventEmitter()

emitter.on("create", (user)=>console.log('userCreated: ', user))
emitter.on("load", ()=>console.log('loading2'))
emitter.on("load", ()=>console.log('loading3'))
emitter.on("load", ()=>console.log('loading4'))

emitter.on("click", ()=>console.log('loading'))

console.log(emitter.events);
emitter.emit('create', {name: "Rodrigo"})