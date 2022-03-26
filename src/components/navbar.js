import React, { useState } from 'react'
import Link from 'react-scroll/modules/components/Link'

function Navbar() {

const [style,setStyle] = useState("nav-list")

    const handleChange =() =>{
        console.log("clicked");
        setStyle("active");
    }
  



    return (

        <ul className='top-bar'>
            <li className='nav-list'>
            

                <Link to='home' smooth={true} duration={300} className={style} onClick={handleChange}>Home</Link>
             
            </li>
            <li className='nav-list'>
                <Link to='about' smooth={true} duration={300} className={style} onClick={handleChange}>About</Link>
            </li>
            <li className='nav-list'>
                <Link to='skill' smooth={true} duration={300} className={style} onClick={handleChange}>Skill</Link>
            </li>
            <li className='nav-list'>
                <Link to='project' smooth={true} duration={300} className={style} onClick={handleChange}>Project</Link>
            </li>
            <li className='nav-list'>
                <Link to='contact' smooth={true} duration={300} className={style} onClick={handleChange}>Contact</Link>
            </li>
        </ul >

    )
}

export default Navbar