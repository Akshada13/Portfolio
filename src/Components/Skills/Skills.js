import React, { useEffect } from 'react'
import './Skills.css'
import Aos from 'aos';

function Skills() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const tech_skills = [
        {
            "skill": "JavaScript", "percent": "70"
        }, {
            "skill": "HTML & CSS", "percent": "70"
        }, {
            "skill": "Node.js", "percent": "70"
        }, {
            "skill": "MongoDB", "percent": "70"
        }, {
            "skill": "React", "percent": "65"
        }, {
            "skill": "Express", "percent": "65"
        }]

    const add_skill = [
        {
            "skill": "Love to learn and work on different and new programming languages."
        }, {
            "skill": "Critical thinking and problem solving."
        }, {
            "skill": "Willingness to learn."
        }]

    return (
        <div className="container" id="skills_container" >
            <div className="skill_detail">
                <h1 className="text-center" data-aos="zoom-in">Skills</h1>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="technical_skill mt-3">
                            <h4 data-aos="zoom-in">Technical Skills:</h4>
                            <div data-aos="zoom-in">
                                {
                                    tech_skills.map((obj) => {
                                        return (
                                            <>
                                                <h5 className="mt-2">{obj.skill}</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ "width": `${obj.percent}%`, "backgroundColor": "goldenrod" }} aria-valuenow={obj.percent} aria-valuemin="0" aria-valuemax="100">{obj.percent}%</div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* div for spacing between */}
                    </div>
                    <div className="col-lg-5">
                        <div className="additional_skill mt-3">
                            <h4 data-aos="zoom-in">Interest & other Skills:</h4>
                            <ul className="skill_point" data-aos="zoom-in">
                                {
                                    add_skill.map(obj => {
                                        return (
                                            <li>{obj.skill}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                            
    )
}

export default Skills
