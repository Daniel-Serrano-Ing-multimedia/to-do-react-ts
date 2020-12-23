import React from 'react';

import './Task.scss';
export interface TaskProps {

}
 
const Task: React.SFC<TaskProps> = () => {
  return ( 
    <div>
      <h1> tarea: {} </h1>
    </div>
   );
}
 
export default Task;