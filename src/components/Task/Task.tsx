import React from 'react';

import { task } from '../../interfaces/task';
import './Task.scss';

 
const Task: React.SFC<task> = ( { name, description, initDate, finishDate } ) => {
  return ( 
    <div>
      <h1> tarea: { name } </h1>
      <h2> descripcion { description } </h2>
      <h3> date { initDate } </h3>
    </div>
   );
}
 
export default Task;