import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledSection = styled.section`
    width: 83%;
    margin: 9rem auto;
    .img-section{
        max-width: 100%;
        img{
            width: 100%;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        margin: 2rem auto;
    }
`