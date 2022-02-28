import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jpg'
import "./About.css"
import Aos from 'aos';
import env from "../settings";


function About() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])


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
                        <div className='about-buttons'>
                            <Link className="btn m-4" to="/contact">
                                Connect <i className="fab fa-connectdevelop" aria-hidden="true"></i>
                            </Link> 
                            <a className="btn m-4" href={env.resume} target="_blank" rel="noreferrer noopener" >
                                Resume{" "}<i className="fas fa-cloud-download-alt"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About
