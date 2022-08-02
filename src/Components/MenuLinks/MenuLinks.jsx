import React from 'react'
import { StyledMenuLinks } from '../Navbar/Navbar.styles'

export const MenuLinks = () => {
  return (
    <StyledMenuLinks>
        <div className="div1">
            <p><a href="/">Live</a></p>
            <p><a href="/">Push</a></p>
            <p><a href="/">Link</a></p>
            <p><a href="/">Shop</a></p>
            <p><a href="/">Packs</a></p>
            <p><a href="/">Help</a></p>
        </div>
        <div className="div-2">
            <p><a href="/">Try Live for free</a></p>
            <p><a href="/">Log in or register</a></p>
        </div>
        <div className="div-3">
            <h3>More on Ableton.com:</h3>
            <p><a href="/">Blog</a></p>
            <p><a href="/">Ableton for the Classroom</a></p>
            <p><a href="/">Ableton for Colleges and Universities</a></p>
            <p><a href="/">Certified Training</a></p>
        </div>
        <div className="div-4">
            <p><a href="/" className='colored'>About</a></p>
            <p><a href="/">Jobs</a></p>
            <p><a href="/">Apprenticeships</a></p>
        </div>
    </StyledMenuLinks>
  )
}
