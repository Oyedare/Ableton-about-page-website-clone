import React from 'react'
import { Link } from 'react-router-dom'
import {StyledTabletBottomNav} from './Navbar.styles'

export const TabletBottomNav = () => {
  return (
    <StyledTabletBottomNav>
        <Link to="/">About</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Apprenticeships</Link>
    </StyledTabletBottomNav>
  )
}
