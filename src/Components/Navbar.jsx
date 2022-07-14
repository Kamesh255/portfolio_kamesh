
import React, { useState } from 'react'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {Link} from "react-scroll"
 

export const Navbar = () => {
    const resume = () => {
        window.open("https://drive.google.com/file/d/1fWzzldU_fvgveMzyzd-KlG-M7zQBnGu1/view?usp=sharing","_blank")
    } 
    const [showMediaIcons, setShowMediaIcons] = useState(false) 

    return (
    <>
     <nav className='main-nav'>
         <div className='logo'>
        <h2>
            <span>K</span>amesh
            <span>H</span>edau
        </h2>
         </div>
         <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
             <ul>
                 <li> 
                     <a href='#'>
                         <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                        >Home</Link>
                     </a>
                 </li> 
                 <li> 
                 <a href='#'><Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Skills</Link>
                     </a>
                 </li>
                 <li> 
                 <a href='#' ><Link activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Projects</Link>
                     </a>
                 </li>
                 <li> 
                 <a href='#'> <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Contact</Link>
                     </a>
                 </li>
             </ul>
         </div>
         <div className='resume'>
             <ul className='resume-desktop'> 
                 <li>
                 <button className="homeBtns" onClick={() => resume()}> View Resume </button>
                 
                 </li>
             </ul>
             <div className='hamburger-menu'>
                 <a href='#' onClick = {()=>setShowMediaIcons(!showMediaIcons)}>
                     <GiHamburgerMenu />
                     </a>
             </div>
         </div>
     </nav> 
    </> 
    )
}
export default Navbar