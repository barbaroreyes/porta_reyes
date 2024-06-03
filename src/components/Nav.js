import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav>
    <div className="nav_line"></div>
    <div className="nav_line"></div>
    <div className="nav_line"></div>

     <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
     </ul>

    </nav>
  )
}

export default Nav
