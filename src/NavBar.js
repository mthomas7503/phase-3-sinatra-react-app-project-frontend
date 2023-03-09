import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

    let linkColor = "blue"
  
    return(
        <div>
            <NavLink style={{color: `${linkColor}`}} to="/">Home</NavLink>
            <NavLink style={{color: `${linkColor}`}} to="/about">About</NavLink>
            <NavLink style={{color: `${linkColor}`}} to='/zones'>Zones</NavLink>
            <NavLink style={{color: `${linkColor}`}}  to='/updateaddmonster'>Update/Add Monsters</NavLink>
        </div>
    )
}

export default NavBar;