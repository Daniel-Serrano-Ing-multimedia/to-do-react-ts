import React, { useEffect } from 'react';

import { task } from '../../interfaces/task';
import Task from '../Task/Task';
import './TaskList.scss';

export interface TaskListProps {
  listaTasks: task[];
  reloadList: boolean;
  setReloadList: React.Dispatch<React.SetStateAction<boolean>>
}
 
const TaskList: React.SFC<TaskListProps> = ({ listaTasks, reloadList, setReloadList }: TaskListProps) => {
  useEffect(() => {
    console.log("reload list");
    setReloadList(false);
  }, [reloadList]);
  
  return ( 
    <div>
      <h1>{ listaTasks.length}</h1>
      <div>
        {listaTasks.map((task: task, index: number) => 
          <Task
            key={index}
            name={task.name}
            description = { task.description }
          />
         ) 
          
        }
      </div>
    </div>
   );
}
 
export default TaskList;