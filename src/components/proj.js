import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import projImg from './images/proj.png'

function Proj() {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    let handleShow = () => setShow(true);
    let handleClose = () => setShow(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async values => {
            try {
                let response = await axios.post("http://localhost:3001/log/login", values)
                alert("Success")
                if (response.data) {
                    await localStorage.setItem("token", values);
                    navigate("/some-path");
                }
            } catch (error) {
                console.log(error);
            }

        }
    })


    return (
        <section id="project">




            <div class="card-project ">
                <div class="card-content">

                    <div class="card-tit">
                        <h5>Food Ordering</h5>
                    </div>
                    <Zoom delay={500} duration={2000}>
                        <div className='card-img' onClick={handleShow}>
                            <img src={projImg} alt="proj" />
                        </div>
                    </Zoom>

                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis
                            molestiae
                            suscipit laboriosam doloremque cumque consequatur distinctio praesentium debitis
                            .</p>
                        <div class="card-btn">
                            <a href='https://github.com/suthanhari/urbanHouse-frontend' target={'_blank'} rel='"noreferrer' class="button">Backend </a>
                            <a href='https://github.com/suthanhari/urbanHouse-backend' target={'_blank'} rel={'noreferrer'} class="button">Frontend </a>
                            <button class="button" onClick={handleShow}>Live</button>


                          
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
                    <p onClick={handleClose}>X</p>
                    <h3>Please Login to Continue</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <label for="modemail">Email</label><br />
                        <input type="email" className="form" id="modemail" name="email" placeholder="sample@gmail.com"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        <label for="password">Password</label><br />
                        <input type="password" className="form" id="password" name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </form>
                    <button className="form-btn" type="submit">Sent</button>
                    <button onClick={handleClose} className='modal-btn'>Cancle</button>
                </div>
            </dialog>
















        </section>
    )
}

export default Proj