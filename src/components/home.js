import React from 'react'
import { Fade, Zoom } from 'react-reveal'
import Link from 'react-scroll/modules/components/Link'

function Home() {
    return (
        <section id="home">

            <Zoom delay={1100}>

                <img className="bg"
                    src="https://public-files.gumroad.com/variants/ikz3jnb86dyq3kvhiim2wbnp2s3d/4d4cb575366005157970186bb171da8f6b6b8bb857dcdd1f8e93774cc5f0900d"
                    alt="bg" />
            </Zoom>

            <div className="flex-text">

                <Fade left delay={500}>

                    <div className="top">
                        <h1 className="float">I</h1>
                        <h1 className="float">a'</h1>
                        <h1 className="float">m</h1>
                        <h1 className="float">H</h1>
                        <h1 className="float">a</h1>
                        <h1 className="float">r</h1>
                        <h1 className="float">i</h1>
                        <h1 className="float">S</h1>
                        <h1 className="float">u</h1>
                        <h1 className="float">t</h1>
                        <h1 className="float">h</h1>
                        <h1 className="float">a</h1>
                        <h1 className="float">n</h1>
                    </div>
                </Fade>


            </div>

            <Fade left delay={1000}>

                <div className='scroll'>
                    <Link to='about' smooth='true' duration={300} >
                        <button className='scroll-btn'><i className="fa-solid fa-angles-down"></i> Scroll Down</button>

                    </Link>
                </div>
            </Fade>




        </section>
    )
}

export default Home