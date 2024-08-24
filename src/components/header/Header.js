import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header className='header'>
    <div className="brand">
        <Link to='/portfolio'><h4>Nithyanandam Ms</h4></Link> 
    </div>
    <div className='menu'>
      <nav>
          <Link to='/portfolio'>Home</Link>
          <Link to='/portfolio'>Skills</Link>
          <Link to='/portfolio'>About</Link>
          <Link to='/portfolio'>Contact</Link>
      </nav>
    </div>
</header>
  )
}

export default Header