import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll/modules';
import profilePhoto from './images/photo.jpg'

function About() {



    return (
        <section id="about">

            {/* <div className='border'> */}


                <div className='col-4'>
                    <div className='card-about'>
                        <Zoom delay={390}>
                            <div className='about-img'>
                                <img src={profilePhoto} alt="name" />
                            </div>
                        </Zoom>


                        <Fade top delay={300}>
                            <div className='about-body'>

                                <div className='about-link'>

                                    <div className="tooltipro">
                                        <span className="tooltip-profile">GitHub</span>
                                        <a href="https://github.com/suthanhari" target="_blank" rel='noreferrer'><i
                                            className="fab fa-github fa-xl"></i></a>
                                    </div>
                                    <div className="tooltipro ">
                                        <span className="tooltip-profile">LinkedIn</span>
                                        <a href="https://www.linkedin.com/in/hari-suthan-86a238226/" target="_blank"
                                            rel='noreferrer'><i className="fab fa-linkedin-in fa-xl"></i></a>
                                    </div>
                                    <div className="tooltipro ">
                                        <span className="tooltip-profile">Twitter</span>
                                        <a href="https://twitter.com/hari_Suthan4" target="_blank" rel='noreferrer'><i
                                            className="fab fa-twitter fa-xl"></i></a>
                                    </div>
                                    <div className="tooltipro ">
                                        <span className="tooltip-profile">Pintreset</span>
                                        <a href="https://in.pinterest.com/mercedessuthan/_saved/" target="_blank"
                                            rel='noreferrer'><i className="fab fa-pinterest-p fa-xl"></i></a>
                                    </div>
                                </div>
                               
                                    <Link to='contact' smooth={true} duration={300} >
                                        <button className='connect-btn'>Let's Connect</button>
                                    </Link>
                               

                            </div>
                        </Fade>
                    </div>
                </div>





                <div className='col-7'>



                    <div className="profile-main">
                        <Fade top delay={330}>
                            <h2 className="profile-name">About</h2>
                        </Fade>

                        <Fade top delay={360}>
                            <p className="profile-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet impedit recusandae,
                                cumque ipsa modi ducimus minima repellendus, qui officia obcaecati natus sapiente ipsum eligendi
                                dolorum libero numquam odit delectus?.
                            </p>




                            <a href='https://drive.google.com/file/d/1lA-pPbwMsAYh81g2N8flPsB_m-qrqVNC/view?usp=sharing'
                                target="_blank" rel="noreferrer">
                                <button className="resume-btn"> Resume</button>
                            </a>
                        </Fade>


                    </div>

                </div>
            {/* </div> */}










        </section >
    )
}

export default About;