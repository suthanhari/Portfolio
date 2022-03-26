import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import projImg from './images/proj.png'

function Proj() {


const [show,setShow] = useState(false);

let handleShow = () => setShow(true);
let handleClose = () => setShow(false);


    return (
        <section id="project">




            <div class="card-project ">
                <div class="card-content">

                    <div class="card-tit">
                        <h5>Food Ordering</h5>
                    </div>
                    <div className='card-img' onClick={handleShow}>
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

                    <ul class="select">
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Expressjs</li>
                        <li>Nodejs</li>
                        <li>Mongodb</li>
                    </ul>


                </div>

            </div>


            <dialog open={show} className='modal'>
                <div className='modal-content'>
                    <p>Please Login to Continue</p>
                    <div className='login'>
                        <button className='modal-login'>LoginIn <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <button onClick={handleClose} className='modal-btn'>close</button>
                </div>
            </dialog>














        </section>
    )
}

export default Proj