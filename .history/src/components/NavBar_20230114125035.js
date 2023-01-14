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
                <NavLink to="/Sobre mim" activeStyle>
                    Sobre Mim
                </NavLink>
                <NavLink to="/" activeStyle>
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