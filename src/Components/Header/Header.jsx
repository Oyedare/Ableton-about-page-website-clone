import React from 'react'
import { StyledHeader } from './Header.styles'
import header from '../../assets/images/header.avif'
import ableton from '../../assets/images/ableton.svg'
export const Header = () => {
  return (
    <StyledHeader>
        <img src={header} alt="producer" className='producer'/>
        <img src={ableton} alt="ableton logo" className='ableton'/>
    </StyledHeader>
  )
}
