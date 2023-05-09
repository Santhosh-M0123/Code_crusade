import { useEffect, useState } from 'react';
import './App.css';
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from './Home/Home';
// import Welcome from './Welcome';


function App() {


  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route path='/' element={<Welcome />}/> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
