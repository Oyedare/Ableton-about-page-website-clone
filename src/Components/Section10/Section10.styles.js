import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledSection = styled.section`
    width: 84%;
    height: 84%;
    margin: 9rem auto;
    display: flex;
    .text-section{
        background-color: #B1C5FF;
        padding: 10rem 4rem;
        width: 86%;
        h2{
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 400;
        }
        .jobs{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            color: var(--blue);
            h3{
                font-weight: 500;
            }
        }
    }
    .img-section{
        img{
            width: 100%;
            height: 100%;
        }
        .sm{
            display: none;
        }
    }
    @media screen and (max-width:${size.laptop}) {
        flex-direction: column;
        margin: 5rem auto;
        .text-section{
            padding: 3rem 3.75rem;
            h2{
                font-size: 1.4rem;
            }
            .jobs{
                font-size: 1rem;
            }
        }
        .img-section{
            .lg{
                display: none;
            }
            .sm{
                display: block;
            }
        }
    }
    @media screen and (max-width:${size.tablet}) {
        width: 70%;
        margin: 5rem auto 5rem 1.5rem;
        .text-section{
            padding: 2rem 2.35rem;
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        width: 90%;
        .text-section{
            padding: 1rem 1.7rem;
            /* width: 74%; */
        }
    }
    @media screen and (max-width:${size.mobileM}) {
        .text-section{
            /* padding: 1rem 1.7rem; */
            width: 84%;
        }   
    }
    @media screen and (max-width:${size.mobileL}) {
        .text-section{
            /* padding: 1rem 1.7rem; */
            width: 82%;
        }   
    }   
`