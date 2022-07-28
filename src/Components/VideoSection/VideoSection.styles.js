import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledVideoSection = styled.section`
    width: 54%;
    margin: auto;
    .text{
        margin-bottom: 9rem;
        .bold{
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 500;
        }
        .para{
            font-size: 1.3rem;
            line-height: 1.5;
        }
    }
    .video-section{
        max-width: 100%;
        position: relative;
        margin-bottom: 9rem;
        
        p{
            margin: 0;
            font-size: .875rem;
            line-height: 1.5;
        }
        img{
            width: 100%;
        }
        .player{
            width: 10%;
            position: absolute;
            top: 45%;
            left: 45%;
        }
        
       
    }
    @media screen and (max-width:${size.laptop}) {
        width: 65%;
        .text{
            .bold{
                font-size: 1.25rem;
                line-height: 1.5;
            }
            .para{
                font-size: 1rem;
            }
        }
    }
    @media screen and (max-width:${size.tablet}) {
        width: 70%;
        .text{
            /* margin-top: -7rem; */
            margin-bottom: 2rem;
        }
        .video-section{
            margin-bottom: 3rem;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        width: 90%;
        iframe{
            height: 100%;
        }
    }
`