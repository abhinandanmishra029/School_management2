import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddStudent from './components/pages/AddStudent';
import ViewStudent from './components/pages/ViewStudent';
import EditStudent from './components/pages/EditStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/pages/AddStudent' element={<AddStudent />}></Route>
          <Route exact path='/pages/ViewStudent' element={<ViewStudent />}></Route>
          <Route exact path='/pages/EditStudent/:id' element={<EditStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
