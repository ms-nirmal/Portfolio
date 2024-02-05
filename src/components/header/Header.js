import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header className='header'>
    <div className="brand">
        <Link to='/home'><h4>Nithyanandam Ms</h4></Link> 
    </div>
    <div className='menu'>
      <nav>
          <Link to='/home'>Home</Link>
          <Link to='/home'>Skills</Link>
          <Link to='/home'>About</Link>
          <Link to='/home'>Contact</Link>
      </nav>
    </div>
</header>
  )
}

export default Header