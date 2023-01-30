import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className = 'navbar bg-body-tertiary'>
        <div className = 'container-fluid'>
        <Link className = 'nav-link' to = '/'>Home</Link>
        {props.loggedIn ? (
          <>
          <Link className = 'nav-link' to = '/create'>Create Here</Link>
          <Link className = 'nav-link' to = '/' onClick = {props.logUserOut}>Log Out</Link>
          </> 
        ) : (
          <>
        <Link className = 'nav-link' to = '/login'>Login Here</Link>
        <Link className = 'nav-link' to = '/register'>Register Here</Link>
          </>
        )}
        </div>
   
    </nav>

    </>
  )
}
