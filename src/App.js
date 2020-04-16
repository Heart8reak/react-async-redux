import React from 'react';
import './App.css';

import DataForm from './components/DataForm'
import DataList from './components/DataList'

function App() {
  return (
    <div className="App">
      <h2>Apple Stock Price Open and Close</h2>
      <DataForm />

      <br /> 
      <br />
      <DataList />
    </div>
  );
}

export default App;
