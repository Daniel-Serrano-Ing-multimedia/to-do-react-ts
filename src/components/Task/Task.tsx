import * as React from 'react';
import { task } from '../../interfaces/task';
import './Task.scss';

 
const Task: React.SFC<task> = ( { name, description, initDate, finishDate }: task ) => {
  return ( 
    <div>
      <h1> tarea: { name } </h1>
      <h2> descripcion {description} </h2>
      <h2> date : {initDate ? initDate.toLocaleDateString() : ""} </h2>
      <h2> date : { finishDate ? finishDate.toLocaleDateString() : ""} </h2>
    </div>
   );
}
 
export default Task;