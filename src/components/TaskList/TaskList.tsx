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
  const onReload = () => {
    console.log("reload list");
    setReloadList(false);
  }
  
  useEffect(onReload, [listaTasks, reloadList]);

  return ( 
    <div>
      <h1>{ listaTasks.length }</h1>
      <div>
        {listaTasks.map((task: task, index: number) => 
          <Task
            key={index}
            name={task.name}
            description = { task.description }
            initDate = { task.initDate }
            finishDate = { task.finishDate }
          />
         ) 
          
        }
      </div>
    </div>
   );
}
 
export default TaskList;