import React from 'react'
import { Avatar } from './Avatar'
export const LandingSection: React.FC = () => {
  return (
    <>
      <div className='HeaderContainer'>
        <div className='columns is-centered'>
          <div className='column'>
            <h1 className='title'>Developer, student, and hobbyist</h1>
            <h2 className='subheader'>
              I program solutions to problems, and I love what I do.
            </h2>

            <Avatar />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
