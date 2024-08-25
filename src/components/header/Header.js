import React from 'react';
import { Link } from 'react-scroll';
import './header.css'

function Header() {
  return (
    <header className='header'>
    <div className="brand">
        <Link to='portfolio'><h4>Nithyanandam Ms</h4></Link> 
    </div>
    <div className='menu'>
      <nav>
          <Link to='Home'>Home</Link>
          <Link to='Skills'>Skills</Link>
          <Link to='About'>About</Link>
          <Link to='Contact'>Contact</Link>
      </nav>
    </div>
</header>
  )
}

export default Header