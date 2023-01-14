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
                <NavLink to="/sobre-mim" activeStyle>
                    Sobre Mim
                </NavLink>
                <NavLink to="/projetos" activeStyle>
                    Projetos
                </NavLink>
                <NavLink to="/conhecimentos" activeStyle>
                    Conhecimentos
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to=></NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default NavBar