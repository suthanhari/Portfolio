import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-scroll/modules'

function Skill() {
    return (
        <section id="skill">
            <div className="row">
                <Fade left>

                    <div className="col-2">
                        <div className="card-skill">
                            <h2>my skill:</h2>
                            <p>Some projects did by the following skills and click the below button to see.</p>
                            <Link to='project' smooth={true} duration={300}>
                                <button><strong>See More</strong></button>
                            </Link>
                        </div>
                    </div>
                </Fade>

                <Fade right>

                    <div className="col-2">
                        <div className="bar-container col-2">
                            <div className="bar-heading">Html
                                <div className="bar-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar html"></div>
                            </div>

                        </div>

                        <div className="bar-container col-2">
                            <div className="bar-heading">css
                                <div className="bar-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar css"></div>
                            </div>
                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">Bootstrap
                                <div className="bar-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar bootstrap"></div>
                            </div>
                        </div>

                        <div className="bar-container col-2">
                            <div className="bar-heading">javascript
                                <div className="bar-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar javascript"></div>
                            </div>
                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">react
                                <div className="bar-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar react"></div>
                            </div>
                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">mongodb
                                <div className="bar-percentage">80%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar mongodb"></div>
                            </div>

                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">nodejs
                                <div className="bar-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar nodejs"></div>
                            </div>

                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">expressjs
                                <div className="bar-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar expressjs"></div>
                            </div>
                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">GitHub
                                <div className="bar-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar github"></div>
                            </div>
                        </div>
                        <div className="bar-container col-2">
                            <div className="bar-heading">Aws
                                <div className="bar-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="bar aws"></div>
                            </div>
                        </div>





                    </div>
                </Fade>

            </div>
        </section >
    )
}

export default Skill