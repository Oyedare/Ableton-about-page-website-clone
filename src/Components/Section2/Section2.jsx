import React from 'react'
import { StyledSection } from './Section2.styles'
import photo1 from '../../assets/images/photo-1.jpg'
import photo2 from '../../assets/images/photo-2.jpg'
export const Section2 = () => {
  return (
    <StyledSection>
        <div className="div-1">
            <img src={photo1} alt="" />
        </div>
        <div className="div-2">
            <img src={photo2} alt="" />
        </div>
        <div className="div-3"></div>
    </StyledSection>
  )
}
