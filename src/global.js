import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';
export const GlobalStyle = createGlobalStyle`
    :root{
        --yellow: #fbffa7;
        --light-blue: #b1c5ff;
        --green: #b6ffc0;
        --orange: #ff764d;
        --purple: #d5b3ff;
        --blue: #0000ff;
        --black: #000;
        --white: #fff;
        --background: #F3F3F3;
        --font-family: 'Futura PT', sans-serif;
    }
    body{
        position: relative;
        width: 100vw;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        line-height: 1.5;
        color: var(--black);
        overflow-x: hidden;
        font-family: var(--font-family);
        @media screen and (${device.desktop}) {
            background-color: var(--background);
        }
    }
    .App{
        @media screen and (${device.desktop}) {
            width: 63%;
            margin: auto;
            background-color: var(--white);
        }
    }
`