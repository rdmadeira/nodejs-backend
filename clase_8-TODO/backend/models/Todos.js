import mongoose from 'mongoose';

/* 
    Todos: title, description, createdAt, updatedAt, isCompleted
*/

// Mongoose Schema
const todosSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});

// El Todo es la CLASE O ENTIDAD, o sea estamos creando un patrón de diseño SINGLETON
/* Es un patrón de diseño utilizado dentro de la programación orientada a objetos 
que, como su nombre lo sugiere, del inglés “single” que significa “único”, trata 
de diseñar clases que solo puedan ser instadas una vez, es decir, que de esa clase, 
durante toda la ejecución del programa, unicamente podrá ser creado un objeto. 
El singleton es útil, por ejemplo, cuando una clase es diseñada para representar 
un dispositivo único dentro de un programa: el teclado o el ratón por mencionar algunos, 
también es requerido en diseños de clases que interactúan con todas las demás como un recurso común,
algo así como una clase de ámbito global.  */

const Todo = mongoose.model('Todos', todosSchema);

export default Todo;
