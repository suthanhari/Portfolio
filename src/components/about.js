import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll/modules';
import profilePhoto from './images/photo.jpg'

function About() {



    return (
        <section id="about">

            <div className='row'>

                <div className='col-4'>
                    <div className='about-img'>
                        <Zoom delay={1000} duration={1500}>
                            <img src={profilePhoto} alt='photo' />
                        </Zoom>
                    </div>
                </div>


                <div className='col-7'>
                    <div className='about'>

                        <div className='profile-name'>About</div>
                        <p className='profile-body'>
                            👋Hey Iam Hari Suthan Junior FullStack Developer who Is seeking for the job,
                            I love creating  Web Applications , my dream is to be greatness in my field.
                            My MERN stack journey has Started simply with HTML5 and CSS3,Later I had joined course to Skill up.

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
                        <Fade right delay={500} duration={1000}>

                            <a href='https://drive.google.com/file/d/19sElXz6d1ZLDwYNgITYEJOZA5sfK1m2p/view'
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