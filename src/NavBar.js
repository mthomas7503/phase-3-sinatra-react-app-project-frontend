import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to='/zones'>Zones</NavLink>
            <NavLink to='/updateaddmonster'>Update/Add Monsters</NavLink>
        </div>
    )
}

export default NavBar;