import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.scss';

function App() {
  const [ listaTasks, setListaTasks ] = useState([]);
  return (
    <>
        < Header/>
        <div className="container">
          <div className = "row">
            <Form
              listaTasks = { listaTasks }
            />
            <div>
              <h1> Lists </h1>
            </div>
            </div>
        </div>
    </>
  );
}

export default App;
