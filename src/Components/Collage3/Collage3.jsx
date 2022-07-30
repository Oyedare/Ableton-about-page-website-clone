import React from 'react'
import { StyledCollage } from './Collage3.styles'
import img1 from '../../assets/images/photo-6-a.jpg'
import img2 from '../../assets/images/photo-7.jpg'
export const Collage3 = () => {
  return (
    <StyledCollage>
      <div className="img">
        <div className="img1">
          <img src={img1} alt="" />
        </div>
        <div className="img2">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="bg"></div>
    </StyledCollage>
  )
}
