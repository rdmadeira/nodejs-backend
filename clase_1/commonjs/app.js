const lib = require('./lib') // commonJS que es el default en node. 
//Si puede usar Ecmascript (ES6) desde 2019 que ya es estable. Node incorporó ES6 recién en este año de 2019.

lib.printPrivate();
console.log(lib);
console.log(__filename);