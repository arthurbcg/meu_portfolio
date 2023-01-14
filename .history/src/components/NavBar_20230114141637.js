import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavBarElements';

const NavBar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/index" >
                <span>Logo KKKKKK</span>
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
                <NavLink to="/contato" activeStyle>
                    Contato
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default NavBar