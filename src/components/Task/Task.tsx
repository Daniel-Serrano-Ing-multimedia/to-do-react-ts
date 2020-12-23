import React from 'react';

import { task } from '../../interfaces/task';
import './Task.scss';

export interface TaskProps {
  name        : string;
  description : string;
}
 
const Task: React.SFC<TaskProps> = ( { name, description } ) => {
  return ( 
    <div>
      <h1> tarea: { name } </h1>
      <h2> descripcion { description } </h2>
    </div>
   );
}
 
export default Task;