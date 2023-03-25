const miConstPrivada = 'Esto solo vive en este modulo' // no se puede consumir desde afuera a no ser por el exports, pero no se puede modificar. Se accede indirectamente.
const {add} = require('./otroModulo')

module.exports = {
    id: "1",
    printPrivate: ()=>{
        console.log(miConstPrivada);
    },
    calculo: add(10, 50),
}

console.log(__filename);