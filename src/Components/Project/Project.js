import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';
import env from "../settings"

function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1400,
        });
    }, [])

    const project = [{
        "title": "Music player",
        "description": "This is a Music player web app built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "git_front": "https://github.com/Akshada13/Music-Player-Frontend",
        "git_back": "https://github.com/Akshada13/Music-Player-Backend",
        "deploy_link": "https://gaana-music.netlify.app/",
    }, {
        "title": "E-Diary Manager",
        "description": "Manage your day to day Diary data Online built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "git_front": "https://github.com/Akshada13/Online_Diary_Frontend",
        "git_back": "https://github.com/Akshada13/Online_Diary_Backend",
        "deploy_link": "https://akshada-diary.netlify.app/",
    }, {
        "title": "Ecommerce",
        "description": "This is a ecommerce site using JavaScript, React.Js, Node.Js, Bootstrap and MongoDB.",
        "git_front": "https://github.com/Akshada13/Ecommerce_Frontend",
        "git_back": "https://github.com/Akshada13/Ecommerce_Backend",
        "deploy_link": "https://flipkart-shop.netlify.app/",
    }, {
        "title": "Online Notes",
        "description": "Online Notes developed using MERN stack. Basic primary features are added like, JWT Authentication, Users can perform CRUD operations on Notes, Mobile responsive.",
        "git_front": "https://github.com/Akshada13/Online_Notes_Frontend",
        "git_back": "https://github.com/Akshada13/Online_Notes_Backend",
        "deploy_link": "https://online-notes13.netlify.app/",
    }]


    return (
        <div className="container mb-3">
            <div className="cv_preview mt-1 mb-3" data-aos="flip-left">
                <a className="btn" href={env.resume} target="_blank" rel="noreferrer noopener" >
                    Resume{" "}
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-in">
                {
                    project.map(obj => {
                        return (
                            <div className="col">
                                <div className="card h-100" id="project_card">
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.title}</h5>
                                        <p className="card-text">{obj.description}</p>
                                    </div>
                                    <div className="web_link text-center">
                                        <div className="row">
                                            <div className="col col-lg-6">
                                                <a className="btn" id="git_btn" href={obj.git_front} target="_blank" rel="noreferrer noopenner">
                                                    Frontend <i className="fab fa-git-alt"></i>
                                                </a>
                                            </div>
                                            <div className="col col-lg-6">
                                                <a className="btn" id="git_btn" href={obj.git_back} target="_blank" rel="noreferrer noopenner">
                                                    Backend <i className="fab fa-git-alt"></i>
                                                </a>
                                            </div>
                                            <div className="web_link text-center">
                                            <div className="col col-lg-6">
                                                <a className="btn" id="site_btn" href={obj.deploy_link} target="_blank" rel="noreferrer noopenner">
                                                   View Live <i className="fab fa-chrome"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    
                        )
                    })
                }
            </div>
        </div>
    
    

    )
}

export default Project
