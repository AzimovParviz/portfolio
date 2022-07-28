import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Sidebar />
      </header>
    </div>
  );
}

export default App;
