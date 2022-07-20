import styled from 'styled-components';
import { size } from '../../breakpoints';
export const Nav = styled.nav`
margin: 1rem 2.5rem;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: var(--black);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    @media screen and (max-width: 1024px) {
        font-size: 1rem;
    }
}
img{
    width: 4rem;
    margin-right: 1rem;
}
.left-nav{
    flex: 1;
    display: flex;
    align-items: center;
}
.right-nav{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.first-child{
    color: var(--blue);
    margin-right: 1.5rem;
}
.last-child{
    font-size: 1rem;
    @media screen and (max-width: 1024px) {
        font-size: .8rem;
    }
}
.nav-links{
    display: flex;
    align-items: center;
}
.nav-links a{
    margin: 0 1rem;
    @media screen and (max-width: 1024px) {
        margin: 0 .7rem;
    }
}
.colored-nav{
    display: flex;
    align-items: center;
}
.colored-nav,
.colored-nav a{
    color: var(--orange);
}
.icon{
    margin-left: -1rem;
    font-weight: bold;
    @media screen and (max-width: 1024px) {
        margin-left: -.5rem;
    }
}
.menu-bar{
    display: none;
}

@media screen and (max-width: ${size.tablet}){
    margin: 0rem 1rem;
    .nav-links,
    .right-nav{
        display: none;
    }
    .menu-bar{
        display: flex;
        align-items: center;
        h2{
            margin-right: .5rem;
            font-size: 1.3rem;
        }
    }
}
`