import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.scss';

function App() {
  return (
    <>
        < Header/>
        <div className="container">
          <div className = "row">
            <Form/>
            <div>
              <h1> Lists </h1>
            </div>
            </div>
        </div>
    </>
  );
}

export default App;
