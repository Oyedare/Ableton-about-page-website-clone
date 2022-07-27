import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledSection = styled.section`
    margin: 7rem auto;
    width: 54%;
    .top{
        font-size: 1.875rem;
        line-height: 1.4;
        font-weight: 500;
        a{
            text-decoration: none;
            color: var(--blue);
        }
    }
    p{
        font-size: 1.35rem;
    }
    @media screen and (max-width:${size.laptop}) {
        width: 70%;
        .top{
            font-size: 1.2rem;
        }
        p{
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        width: 80%;
        margin: 2rem auto;
    }
`