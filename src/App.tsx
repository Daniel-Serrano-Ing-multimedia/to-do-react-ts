import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';
import { task } from './interfaces/task';
import './App.scss';

const listInit: task[] = [];

listInit.push({
  name: "tarea1",
  description: "una tarea",
  initDate: null,
  finishDate: null
});
function App() {
  const [listaTasks, setListaTasks] = useState<task[]>([]);
  const [reloadList, setReloadList] = useState(false);
  if ( listaTasks.length === 0 ) {
    setListaTasks(listInit);
  }
  const setTask2List = (task: task): void => {
    let list: task[] = listaTasks;
    list.push(task);
    setListaTasks(list);
    setReloadList(true);
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
                listaTasks={listaTasks}
                reloadList = { reloadList}
                setReloadList = { setReloadList }
              />
            </div>
            </div>
        </div>
    </>
  );
}

export default App;
