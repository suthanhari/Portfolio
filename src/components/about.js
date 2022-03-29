import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll/modules';
import profilePhoto from './images/photo.jpg'

function About() {



    return (
        <section id="about">

            <div className='row'>

                <div className='col-4'>
                    <Zoom delay={1000} duration={1500}>
                        <div className='about-img'>
                            <img src={profilePhoto} alt='photo' />
                        </div>
                    </Zoom>


                </div>
                <div className='col-7'>
                    <div className='about'>

                        <div className='profile-name'>About</div>
                        <p className='profile-body'>
                           
                        </p>

                        <Fade left delay={500} duration={1000}>

                            <div className='profile-link'>
                                <div className="tooltipro git">
                                    <span className="tooltip-profile">GitHub</span>
                                    <a href="https://github.com/suthanhari" target="_blank" rel='noreferrer'><i
                                        className="fab fa-github fa-xl"></i></a>
                                </div>
                                <div className="tooltipro link">
                                    <span className="tooltip-profile">LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/hari-suthan-86a238226/" target="_blank"
                                        rel='noreferrer'><i className="fab fa-linkedin-in fa-xl"></i></a>
                                </div>
                                <div className="tooltipro twit">
                                    <span className="tooltip-profile">Twitter</span>
                                    <a href="https://twitter.com/hari_Suthan4" target="_blank" rel='noreferrer'><i
                                        className="fab fa-twitter fa-xl"></i></a>
                                </div>
                                <div className="tooltipro pin">
                                    <span className="tooltip-profile">Pintreset</span>
                                    <a href="https://in.pinterest.com/mercedessuthan/_saved/" target="_blank"
                                        rel='noreferrer'><i className="fab fa-pinterest-p fa-xl"></i></a>
                                </div>
                            </div>



                            <Link to='contact' smooth={true} duration={300} >
                                <button className='connect-btn'>Let's Connect</button>
                            </Link>

                        </Fade>
                        <Fade left delay={500} duration={1000}>

                            <a href='https://drive.google.com/file/d/1y-hdD7yke7b42OhWe0OF4Kz-bZESamLe/view?usp=sharing'
                                target="_blank" rel="noreferrer">
                                <button className="resume-btn"> Resume</button>
                            </a>
                        </Fade>


                    </div>

                </div>
            </div>



























        </section >
    )
}

export default About;