import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledHeader = styled.div`
    max-width: 83%;
    position: relative;
    margin: auto;
    height: 100vh;
    background: url(${(props)=>props.bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
   
    .ableton{
        position: absolute;
        top: 42%;
        left: 30%;
    }
    @media screen and (${size.desktop}) {
        .ableton{
            width: 40%;
        }
        
    }
    @media screen and (max-width:${size.tablet}) {
        .ableton{
            left: 15%;
            top: 35%;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        .ableton{
            width: 70%;
            top: 40%;
            /* left: 15%; */
        }
    }
    /* @media screen and (${size.mobileM}) {
        .ableton{
            width: 70%;
            left: 15%;
        }
    } */
`