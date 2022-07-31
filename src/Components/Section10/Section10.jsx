import React from 'react'
import { StyledSection } from './Section10.styles'
import photo from '../../assets/images/photo-8 (1).jpg'
import photo1 from '../../assets/images/photo-8.jpg'
import {AiOutlineRight} from 'react-icons/ai'
export const Section10 = () => {
  return (
    <StyledSection>
        <div className="img-section">
            <img src={photo} alt="" className='lg'/>
            <img src={photo1} alt="" className='sm'/>
        </div>
        <div className="text-section">
            <h2>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
            <div className="jobs">
             <h3>See latest jobs</h3>
             <AiOutlineRight />
            </div>
        </div>
    </StyledSection>
  )
}
