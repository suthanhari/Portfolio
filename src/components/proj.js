import React from 'react';
import { Fade } from 'react-reveal';
import projImg from './images/proj.png'

function Proj() {





    return (
        <section id="project">




            <div class="card-project ">
                <div class="card-content">

                    <div class="card-tit">
                        <h5>Food Ordering</h5>
                    </div>
                    <div className='card-img'>
                        <img src={projImg} alt="proj" />
                    </div>
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis
                            molestiae
                            suscipit laboriosam doloremque cumque consequatur distinctio praesentium debitis
                            .</p>
                        <div class="card-btn">
                            <button class="button">Backend Repositry</button>
                            <button class="button">Frontend Repositry</button>
                            <button class="button">Live</button>

                        </div>


                    </div>

                </div>

                <div class="select-container" >
                    <div class="select-head">
                        Technology Used <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="select" >
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Nodejs</li>
                            <li>Expressjs</li>
                            <li>Mongodb</li>
                        </ul>
                    </div>

                </div>

            </div>


            {/* <dialog className='modal'>
                <div className='modal-content'>
                    <div className='login'>
                        <button className='modal-login'>LoginIn <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <button className='modal-btn'>close</button>
                </div>
            </dialog> */}














        </section>
    )
}

export default Proj