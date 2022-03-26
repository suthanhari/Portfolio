import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll/modules';

function Contact() {

    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            comments: ""
        },
        onSubmit: async values => {
            try {
                await axios.post("https://myportfolio-node-app.herokuapp.com/client/create", values);
                alert("Success  Added");
            } catch (error) {
                console.log(error);
            }

        }
    })


    return (
        <section id="contact">
            <Fade left>

                <form onSubmit={formik.handleSubmit}>

                    <label for="name">Name</label><br />
                    <input type="text" className="form" id="name" name="name" placeholder="Enter Name"
                        onChange={formik.handleChange} value={formik.values.name} required />



                    <label for="email">Email</label><br />
                    <input type="email" className="form" id="email" name="email" placeholder="example@gmail.com"
                        onChange={formik.handleChange} value={formik.values.email} required />




                    <label for="comments">Comments</label><br />
                    <textarea name="comments" className="form" id="comments" cols="50" rows="5" placeholder="Type your comments"
                        onChange={formik.handleChange} value={formik.values.comments} required></textarea>


                    <button className="form-btn" type="submit">Sent</button>



                </form>
            </Fade>




            <div className="left">

                <zoom delay={1200}>
                    <div className="icons">
                        <a href="https://github.com/suthanhari" target="_blank" rel="noreferrer" className="aboutIcon">github <i className="fab fa-github fa-xl"></i></a>
                        <a href="https://www.linkedin.com/in/hari-suthan-86a238226/" target={"_blank"} rel="noreferrer" className="blogIcon">linkedin <i className="fab fa-linkedin-in fa-xl"></i></a>
                        <a href="https://twitter.com/hari_Suthan4" target={"_blank"} rel="noreferrer" className="projectsIcon">Twitter <i className="fab fa-twitter fa-xl"></i></a>
                        <a href="https://in.pinterest.com/mercedessuthan/_saved/" target={"_blank"} rel="noreferrer" className="contactIcon">pinterest <i className="fab fa-pinterest-p fa-xl"></i></a>
                    </div>
                </zoom>

            </div>




            <div className='scroll-top'>
                <Link to='home' smooth={true} duration={300} >
                    <Fade left>
                        <button className="scroll-btn"><i className="fa-solid fa-angles-up"></i> Top</button>
                    </Fade>

                </Link>
            </div>

        </section>
    )



}

export default Contact;