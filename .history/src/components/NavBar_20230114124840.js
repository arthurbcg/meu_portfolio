import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <span>logo</span>
            </NavLink>
            <Bars />
            <NavMenu>

            </NavMenu>
        </Nav>
    </>
  )
}

export default NavBar