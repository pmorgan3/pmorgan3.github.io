import React, { useState } from 'react'
import styled from 'styled-components'
import {BrowserRouter, NavLink, Link} from 'react-router-dom'
export const Nav = styled.nav`
width: 100%;
height: 55px;

padding: 0 20px;
display: flex;
justify-content: space-between;
.logo {
  padding: 15px 0;
}
`;
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 5%;
  z-index: 19;
  text-decoration: none;
  flex-flow: row nowrap;
  div {
    color: black;
    padding: 18px 20px;
    a {
        text-decoration: none;
        color: black;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0%;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    div {
      padding: 18px 10px;
      color: #fff;
      a {
          color: white;
      }
    }
  }
`;
const RightNav: React.FC<{open: boolean}> = ({open}) => {
    return <>
        
        <Ul open={open}>
            <div><Link className="menu-link" to='/'>Home</Link></div>
            <div><Link className="menu-link" to='/Art'>Art</Link></div>
            
        </Ul>
        
    </>
}

export const Burger: React.FC = () =>  {

    const [open, setOpen] = useState(false);

    return <><StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <RightNav open={open}/>
        </>
}

export const Navbar: React.FC = () => {
    return <>
        <Nav>
            <div className="logo">
            <img src="MyLogo.png" alt="Paul Morgan III | Web Dev" height="48" />
            </div>
            <Burger/>
        </Nav>
    </>
}