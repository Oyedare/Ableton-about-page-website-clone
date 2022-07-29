import React from 'react'
import { Collage } from './Collage.styles'
import photo1 from '../../assets/images/photo-3.jpg'
import photo2 from '../../assets/images/photo-4.jpg'
import photo3 from '../../assets/images/photo-5.jpg'
export const Collage2 = () => {
  return (
    <Collage>
      <div className="flex-container">
        <div className="photo1">
          <img src={photo1} alt="" />
        </div>
        <div className="photo2">
          <img src={photo2} alt="" />
        </div>
      </div>
      
      <div className="photo3">
        <img src={photo3} alt="" />
      </div>
      <div className="bg"></div>
    </Collage>
  )
}
