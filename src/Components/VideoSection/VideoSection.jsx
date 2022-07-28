import React, { useState } from 'react'
import { StyledVideoSection } from './VideoSection.styles'
import poster from '../../assets/images/poster-juanpe.avif'
import player from '../../assets/icons/player.svg'
export const VideoSection = () => {
    const [isClicked,setIsClicked] = useState(false)
  return (
    <StyledVideoSection>
        <div className="text">
            <p className="bold">Making music isn’t easy. It takes time, effort, and learning. But when you’re
             in the flow, it’s incredibly rewarding.</p>
            <p className='para'>We feel the same way about making Ableton products. The driving force behind Ableton is our 
               passion for what we make, and the people we make it for.</p>
        </div>
        <div className="video-section" onClick={()=>{setIsClicked(true)}}>
            {!isClicked &&(
                <div className="poster">
                    <img src={poster} alt="" />
                    <img src={player} alt="" className='player'/>
                </div>
            )}
        
            {isClicked && (
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/9SbnhgjeyXA" frameborder="0" title='Why Ableton - Juanpe' />
            )}
            <p>Why Ableton - Juanpe Bolivar</p>
        </div>
        <div className="text">
            <p className="bold">We are more than 350 people from 30 different countries divided between our
                headquarters in Berlin and our offices in Los Angeles and Tokyo.
            </p>
            <p className="para">Most of us are active musicians, producers, and DJs, and many of us use 
                Live and Push every day. We come from a wide range of cultural and professional backgrounds. 
                Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects
                us is the shared belief that each of us has the skills and knowledge to contribute to something big: 
                helping to shape the future of music culture.
            </p>
        </div>
    </StyledVideoSection>
  )
}
