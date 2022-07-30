import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledSection = styled.section`
    width: 54%;
    margin: auto;
        .bold{
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 500;
        }
        .para{
            font-size: 1.3rem;
            line-height: 1.5;
        }
        @media screen and (max-width:${size.laptop}) {
        width: 65%;
        margin-top:6rem;
            .bold{
                font-size: 1.25rem;
                line-height: 1.5;
            }
            .para{
                font-size: 1rem;
            }
    }
    @media screen and (max-width:${size.tablet}) {
        width: 70%;
    }
    @media screen and (max-width:${size.mobileL}) {
        width: 90%;
    }
`