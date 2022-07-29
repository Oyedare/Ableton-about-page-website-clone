import React from 'react'
import { StyledSection } from './Section6.styles'
import img from '../../assets/images/poster-meet-the-makers.avif'
export const Section6 = () => {
  return (
    <StyledSection>
        <div className="img-section">
            <img src={img} alt="" />
        </div>
    </StyledSection>
  )
}
