import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from './components/Login';
import Flash from './components/Flash';
import WholePost from './components/WholePost';
import Register from './components/Register';
import Create from './components/Create';

function App(props) {
  const now = new Date();
  const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp'))> now))
  
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null)
  
  function flash(message, category){
    setMessage(message);
    setCategory(category)
  }

  
  function logUserIn(){
    setLoggedIn(true)
  }

  function logUserOut(){
    setLoggedIn(false)
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExp')
    flash('You have logged out', 'primary')
  }

  return (
    <>
    <Navbar loggedIn = {loggedIn} logUserOut = {logUserOut}/>
    <div className = 'container'>
      {/* //if there is message display with h1, if its emplty its null */}
      {message ? <Flash message = {message} category = {category} flash = {flash}/> : null}
      <Routes>
              <Route path = '/' element = {<Home />}/>
              <Route path = '/login' element = {<Login flash = {flash} logUserIn = {logUserIn}/>} />
              {/* colon means variable */}
              <Route path = '/wholepost/:postid' element = {<WholePost/>} />
              <Route path = '/register' element = {<Register flash = {flash}/>} />
              <Route path = '/create' element = {<Create loggedIn = {loggedIn} flash = {flash} />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
