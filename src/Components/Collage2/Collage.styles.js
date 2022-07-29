import styled from 'styled-components';
import { size } from '../../breakpoints';
export const Collage = styled.div`
    max-width: 84%;
    position: relative;
    margin:15rem auto;
    display: flex;
    align-items: center;
    column-gap: 5rem;
    img{
        width: 100%;
        /* margin-bottom: 15rem; */
    }
   .flex-container{
    display: flex;
    flex-direction: column;
    .photo1{
        img{
            margin-bottom: 8rem;
        }
    }
}
    .bg{
        position: absolute;
        background-color: #B6FFC0;
        width: 60vw;
        height: 75vw;
        left:-10rem;
        z-index: -1;
    }
    @media screen and (width:${size.desktop}) {
        width: 90%;
        img{
            width: 90%;
        }
        .bg{
            z-index: 1;
            left: -8rem;
            width: 933.33333px;
            height: 1200px;
        }
        .flex-container{
            z-index: 100;
        }
        .photo3{
            z-index: 100;
        }
    }
    @media screen and (width:${size.laptop}) {
        margin: 2rem auto;
    }
    @media screen and (max-width:${size.tablet}) {
        margin: 6rem auto;
        column-gap: 3rem;
        .bg{
            width: 70vw;
            height: 75vw;
        }
        .flex-container{
            .photo1{
                img{
                    margin-bottom: 4rem;
                }
            }
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        column-gap: 2rem;
        .bg{
            width: 100vw;
        }
        .flex-container{
            .photo1{
                img{
                    margin-bottom: 2rem;
                }
            }
        }
    }
`