import React from 'react';

import { task } from '../../interfaces/task';
import './TaskList.scss';

export interface TaskListProps {
  listaTasks      : task[];
}
 
const TaskList: React.SFC<TaskListProps> = ( { listaTasks }:TaskListProps ) => {
  return ( 
    <div>
      <h1> TaskList... </h1>
    </div>
   );
}
 
export default TaskList;