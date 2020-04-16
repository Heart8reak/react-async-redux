import React from 'react';
import './App.css';

import DataForm from './components/DataForm'
import DataList from './components/DataList'

function App() {
  return (
    <div className="App">
      <h2>2020 US Market</h2>
      <DataForm />

      <br /> 

      <DataList />
    </div>
  );
}

export default App;
