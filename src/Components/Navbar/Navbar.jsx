import React, { useState } from 'react'
import { Nav } from './Navbar.styles'
import Ableton from '../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'
import { HiPlus} from "react-icons/hi";
import { AiOutlineCaretDown} from "react-icons/ai";
import { BottomNav } from './BottomNav';
import { MenuLinks } from '../MenuLinks/MenuLinks';

export const Navbar = () => {
    const Links = [
        {name: "Live",href:"/"},
        {name: "Push",href:"/"},
        {name: "Link",href:"/"},
        {name: "Shop",href:"/"},
        {name: "Packs",href:"/"},
        {name: "Help",href:"/"},
    ]
    const [toggle,setToggle] = useState(false);
  return (
    <>
        <Nav>
            <div className="left-nav">
                <Link to="/"><img src={Ableton} alt="Homepage" /></Link>
                <div className="nav-links">
                    {Links.map(({name,href})=>(
                        <Link to={href}>{name}</Link>
                    ))}
                    <div className="colored-nav">
                        <Link to="/">More</Link>
                        <HiPlus className='icon'/>
                    </div>
                </div>
                <div className="menu-bar" onClick={()=>{setToggle(!toggle)}}>
                    <h2>Menu</h2>
                    <AiOutlineCaretDown />
                </div>
            </div>
            {toggle &&(
                <div className="menu-links">
                    <MenuLinks />
                </div>
            )}
            <div className="right-nav">
                <Link to="/" className='first-child'>Try Live for free</Link>
                <Link to="/" className='last-child'>Log in or register</Link>
            </div>
        </Nav>
        {!toggle&&(
            <BottomNav />
        )}
    </>
  )
}
