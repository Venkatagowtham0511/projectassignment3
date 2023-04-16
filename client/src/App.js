import './App.css';
import icon from './icon.PNG';
import pp from './pp.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';
import ThirdParty from './components/ThirdParty';
import Signup from './components/Signup';
import Signup1 from './components/Signup1';
import Login from './components/Login';
import Userdata from './components/Userdata';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Inventory" exact element={<Inventory/>}/>
          <Route path="/AddItem" exact element={<AddItem/>}/>
          <Route path="/ThirdParty" exact element={<ThirdParty/>}/>
          <Route path="/Signup" exact element={<Signup/>}/>
          <Route path="/Signup1" exact element={<Signup1/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/userData" exact element={<Userdata/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;