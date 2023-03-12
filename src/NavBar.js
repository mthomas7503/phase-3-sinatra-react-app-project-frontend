import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    let linkColor = "blue"
  
    return(
        <div id='nav'>
            <Link class="navBarLink" style={{color: `${linkColor}`}} to="/">Home</Link>
            <Link class="navBarLink" style={{color: `${linkColor}`}} to="/about">About</Link>
            <Link class="navBarLink" style={{color: `${linkColor}`}} to='/zones'>Zones</Link>
            <Link class="navBarLink" style={{color: `${linkColor}`}}  to='/updateaddmonster'>Update/Add Monsters</Link>
        </div>
    )
}

export default NavBar;