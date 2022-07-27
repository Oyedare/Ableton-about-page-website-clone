import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledSection = styled.section`
    max-width: 84%;
    position: relative;
    margin: 15rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        max-width: 90%;
    }
    .div-3{
        position: absolute;
        width: 65vw;
        height: 58.33333vw;
        left: 32vw;
        background-color: #FBFFA7;
        z-index: -1;
    }
    @media screen and (min-width:${size.desktop}) {
        .div-3{
            width:  933px;
            height: 933.33333px;
            left: 550px;
            z-index: 0;
        }
        .div-2,.div-1{
            z-index: 1000;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        margin: 3rem auto;
    }
`