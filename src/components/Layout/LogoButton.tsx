import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
export const LogoButton: React.FC<{ style: any; onClick: () => void }> = ({
  style,
  onClick,
}) => {
  return (
    <>
      <Navbar>
        <Navbar.Brand className='navbar-brand' style={style}>
          <Navbar.Toggle>
            <img src='MyLogo.png' alt='Paul Morgan III | Web Dev' height='48' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}
