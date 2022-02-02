import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jpg'
import "./About.css"
import Aos from 'aos';


function About() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const exp = [
        {
            "numbers": 3,
            "title": "Full-Stack Projects"
        },
        {
            "numbers": 45,
            "title": "Github Repositories"
        }, {
            "numbers": 6,
            "title": "Months Learning"
        }]

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="about-image col-lg-4 text-center">
                        <img data-aos="zoom-in" alt="akshada" src={Image} />
                    </div>
                    <div className="about-detail col-lg-8" data-aos="zoom-in">
                        <h3>
                            Hey, Welcome to Akshada's Portfolio Website!
                        </h3>
                        <p>
                            Hi, I'm Akshada Shelke, 
                            I completed my Bachelor's Degree in Computer Science.
                        </p>
                        <p>
                            I'm a passionate FullStack Developer.
                            I Love to create full stack applications using MERN stack preferably.
                        </p>
                        <p>
                            I love Travelling and Exploring different places and my most favourite game is Cricket.
                            My hobbies are Drawing, Cooking, Reading books. 
                        </p>
                        <Link className="btn" to="/contact">
                            Connect <i className="fab fa-connectdevelop" aria-hidden="true"></i>
                        </Link>

                    </div>
                    <div className="preview_box text-center mt-4 mb-5" data-aos="zoom-in">
                        <h1>Experience:</h1>
                        <div className="row">
                            {
                                exp.map(obj => {
                                    return (
                                        <div className="col col-lg-4" id="exp_col">
                                            <div className="box mt-2 mb-2">
                                                <h1>{obj.numbers}+</h1>
                                                <h6>{obj.title}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
