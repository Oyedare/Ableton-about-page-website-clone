import React from 'react'
import { Nav } from './Navbar.styles'
import Ableton from '../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'
import { HiPlus} from "react-icons/hi";
import { AiOutlineCaretDown} from "react-icons/ai";
import { BottomNav } from './BottomNav';

export const Navbar = () => {
    const Links = [
        {name: "Live",href:"/"},
        {name: "Push",href:"/"},
        {name: "Link",href:"/"},
        {name: "Shop",href:"/"},
        {name: "Packs",href:"/"},
        {name: "Help",href:"/"},
    ]
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
                <div className="menu-bar">
                    <h2>Menu</h2>
                    <AiOutlineCaretDown />
                </div>
            </div>
            <div className="right-nav">
                <Link to="/" className='first-child'>Try Live for free</Link>
                <Link to="/" className='last-child'>Log in or register</Link>
            </div>
        </Nav>
        <BottomNav />
    </>
  )
}
