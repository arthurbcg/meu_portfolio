import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <span>logo</span>
            </NavLink>
            <Bars />
            <NavMenu>

            </NavMenu>
        </Nav>
    </div>
  )
}

export default NavBar