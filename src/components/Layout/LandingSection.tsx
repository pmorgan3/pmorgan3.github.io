import React from 'react'
import { Avatar } from './Avatar'
import { Github, LinkedIn, Instagram } from '../Icons/Icon'
export const LandingSection: React.FC = () => {
  return (
    <>
      <div className='columns is-centered'>
        <div className='HeaderContainer'>
          <div className='column'>
            <h1 className='title'>Developer, geek, and hobbyist</h1>
            <h2 className='subheader'>
              I program solutions to problems, and I love what I do.
            </h2>

            <Avatar />
            <br />
            <br />
          </div>
        </div>

        <Github />
        <LinkedIn />
        <Instagram />
      </div>
    </>
  )
}
