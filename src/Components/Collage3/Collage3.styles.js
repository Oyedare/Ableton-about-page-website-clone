import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledCollage = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 15rem;
    img{
        width: 85%
    }
    .img{
        display: flex;
        align-items: center;
        margin-top: 15rem;
        margin-left: 8rem;
        column-gap: 7rem;
        width: 100%;
    }
    .bg{
     width: 66.66667vw;
    height: 60vw;
    left: 16.66667vw;
    position: absolute;
    top: -7rem;
    background-color: #D5B3FF;
    z-index: -1;
    }
    @media screen and (width:${size.desktop}) {
        .bg{
            width: 1066.66667px;
            height: 35vw;
            /* top: -5rem; */
            z-index: 0;
        }
        .img1,.img2{
            z-index: 100;
        }
    }
    @media screen and (max-width:${size.tablet}) {
        .img{
            column-gap: 2rem;
            margin-top: 10rem;
            margin-left: 4rem;
        }
        .bg{
            width:80vw;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        img{
            width:100%;
        }
        .img{
            margin-left: 2rem;
            margin-top: 5rem;
        }
        .bg{
            top: -2rem;
            height: 66vw
        }
    }
`