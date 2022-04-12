import React from 'react'
import Link from 'react-scroll/modules/components/Link'

function Navbar() {







    return (
        <>
            




            <ul className='top-bar' >

                <li className='nav-list'>


                    <Link to='home' smooth={true} duration={100}><i class="fa-solid fa-house"></i> Home</Link>

                </li>
                <li className='nav-list'>
                    <Link to='about' smooth={true} duration={100}><i class="fa-solid fa-address-book"></i> About</Link>
                </li>
                <li className='nav-list'>
                    <Link to='skill' smooth={true} duration={100} > <i class="fa-solid fa-brain"></i> Skill</Link>
                </li>
                <li className='nav-list'>
                    <Link to='project' smooth={true} duration={100} > <i class="fa-solid fa-diagram-project"></i> Project</Link>
                </li>
                <li className='nav-list'>
                    <Link to='contact' smooth={true} duration={100} > <i class="fa-solid fa-phone-flip"></i> Contact</Link>
                </li>
                <li>

                </li>
            </ul>



        </>

    )
}

export default Navbar