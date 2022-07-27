import React from 'react'
import { Link } from 'react-router-dom'
import { StyledBottomNav } from './Navbar.styles'

export const BottomNav = () => {
  return (
    <StyledBottomNav>
        <Link to="/">About</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Apprenticeships</Link>
    </StyledBottomNav>
  )
}
