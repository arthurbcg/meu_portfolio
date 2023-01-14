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
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default NavBar