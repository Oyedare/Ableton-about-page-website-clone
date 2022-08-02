import styled from 'styled-components';
import { size } from '../../breakpoints';
export const StyledFooter = styled.footer`
    border-top: 2px solid #eee;
    padding: 6rem;
    font-size: 20px;
    h3{
        font-weight: 450;
        margin-bottom: 0;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    .div-1{
        max-width: 100%;
        margin-bottom: 3rem;
        img{
            width: 15%;
        }
    }
    .div-2{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .div-2a{
            width: 30%;
            line-height: .5;
            .socials{
                width: 100%;
                img{
                    width: 11%;
                }
            }
        }
        .div-2b{
            width: 30%;
            line-height: .5;
        }
        .div-2c{
            width: 40%;
            // line-height: .5;
            p{
                line-height: 1.5;
            }
            .input{
                display: flex;
                input{
                    font-size: inherit;
                    width: 80%;
                    margin: 0;
                    padding: 0.4em 0.75em;
                    background: transparent;
                    background-color: #eee;
                    border: 0;
                    user-select: none;
                    font-weight: normal;
                    border-radius: 0;
                }
                .btn{
                    // display: inline-block;
                    margin: 0;
                    padding: 0.35em 1.5em;
                    width: 20%;
                    font-weight: 500;
                    font-size: inherit;
                    color: #fff;
                    background: blue;
                    border: 0;
                    border-radius: 0;
                    cursor: pointer;
                    line-height: 1.5;
                }
            }
        }
    }
    .div-3{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 3rem;
        line-height: .7;
        .div-3a{
            width: 30%;     
        }
        .div-3b{
            width: 30%;
        }
        .div-3c{
            width: 40%;
            .select{
                display: flex;
                margin-top: 1rem;
                gap: .5rem;
                select{
                    font-weight: bold;
                    font-size: 1rem;
                    width: 100%;
                    margin: 0;
                    padding: 0.4em 1em;
                    background: transparent;
                    background-color: #eee;
                    border: 0;
                    user-select: none;
                    height: 3rem;
                    padding: 0.35em 50px 0.35em 0.75em;
                    border-radius: 0;
                    cursor: pointer;
                }
            }
        }
    }
    .div-4{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 3rem;
        .left{
            display: flex;
            width: 80%;
            p{
                font-size: .875rem;
                line-height: 1.5;
                margin-right: 1em;
            }
        }
        .right{
            display: flex;
            align-items: center;
            width: 20%;
            p{
                margin-right: 1rem;
            }
            img{
                width: 15%;
            }
        }
    }
    @media screen and (max-width:${size.laptop}) {
        .div-1{
            margin-bottom: 2rem;
            img{
                width: 30%;
            }
        }
        .div-2{
            font-size: 1rem;
            .div-2c{
                line-height: 0;
            }
            p{
                line-height: 1;
            }
        }
        .div-3{
            font-size: 1rem;
        }
    }
    @media screen and (max-width:${size.tablet}) {
        padding: 3rem;
        .div-1{
            margin-bottom: 1rem;
        }
        .div-2{
            flex-direction: column;
            align-items: flex-start;
            .div-2a,.div-2b{
                margin-bottom: 1rem;
            }
            .div-2c{
                width: 80%
            }
        }
        .div-3{
            flex-direction: column;
        }
        .div-4{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .left{
                flex-direction: column;
                width: 100%;
                p{
                    font-size: 1rem;
                    line-height: 0;
                    margin-right: 0;
                }
            }
            .right{
                flex-direction: row-reverse;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                margin-left: -78%;
                p{
                    font-size: 14px;
                    margin-left: 1rem;
                }
                img{
                    width: 5%;
                }
            }
        }
    }
    @media screen and (max-width:${size.mobileL}) {
        padding: 1rem;
        .div-1{
            img{
                width: 40%;
            }
        }
        .div-2{
            .div-2a,.div-2b,.div-2c{
                width: 100%;
            }
        }
        .div-3{
            .div-3a,.div-3b,.div-3c{
                width: 100%;
            }
        }
        .div-4{
            .right{
                margin-left: -61%;
                img{
                    width: 10%;
                }
            }
        }
        
    }
    @media screen and (max-width:${size.mobileM}) {
        .div-4{
            .right{
                margin-left: -56%;
            }
        }
    }
    @media screen and (max-width:${size.mobileS}) {
        .div-4{
            .right{
                margin-left: -50%;
            }
        }
    }
        
`