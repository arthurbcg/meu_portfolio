import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavBarElements';
import Logokk from 'Logokk'

const NavBar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src='./components/Logokk.png'/>
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
        </Nav>
    </>
  )
}

export default NavBar