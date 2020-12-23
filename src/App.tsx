import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';
import Task from './components/Task/Task';
import { task } from './interfaces/task';
import './App.scss';

function App() {
  const [ listaTasks, setListaTasks ] = useState<task[]>([]);

  const setTask2List = (task: task): void => {
    let list: task[] = listaTasks;
    list.push(task);
    setListaTasks( list );
  }
  return (
    <>
        < Header/>
        <div className="container">
          <div className = "row">
            <Form
            listaTasks = { listaTasks }
            setListaTasks ={ setListaTasks }
            setTask2List = { setTask2List }
            />
            <div>
              <TaskList
                  listaTasks = { listaTasks }   
              />
            </div>
            </div>
        </div>
    </>
  );
}

export default App;
