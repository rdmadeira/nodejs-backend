import mongoose, { InferSchemaType } from 'mongoose';

//Interface que describe las propiedades requeridas para crear un nuevo To-Do
/* export interface TodoAttrs {
  title: string;
  description: string;
} */

/* export interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
} */

/* interface TodoModel extends mongoose.Model<TodoDoc> {
  build(attrs: TodoAttrs): TodoDoc;
} */
/* 
    Todos: title, description, createdAt, updatedAt, isCompleted
*/

// Mongoose Schema:
// Document interface
// No need to define TS interface any more.
const todoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});

type TodoType = InferSchemaType<typeof todoSchema>;

const Todo = mongoose.model<TodoType>('Todos', todoSchema);

export default Todo;

// El Todo es la CLASE O ENTIDAD, o sea estamos creando un patrón de diseño SINGLETON
/* Es un patrón de diseño utilizado dentro de la programación orientada a objetos 
que, como su nombre lo sugiere, del inglés “single” que significa “único”, trata 
de diseñar clases que solo puedan ser instadas una vez, es decir, que de esa clase, 
durante toda la ejecución del programa, unicamente podrá ser creado un objeto. 
El singleton es útil, por ejemplo, cuando una clase es diseñada para representar 
un dispositivo único dentro de un programa: el teclado o el ratón por mencionar algunos, 
también es requerido en diseños de clases que interactúan con todas las demás como un recurso común,
algo así como una clase de ámbito global.  */
