import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Resume from '../images/Resume-2.0.pdf';

export class aboutChat extends React.Component {

    render() {

        return (

            <div >
                <Navi />
                <div className="about" >
                    <h3 className="about-header">
                        hello, I am rachel and am a software developer residing in Berlin, Germany
                        (and yes i am looking for a job or freelance opportunities)
                        </h3>
                    <p className="resume">
                        <a href={Resume} target="_blank" className="all-links">download resume</a>
                    </p>
                    <NavLink className="all-links" activeClassName="activeLink" to="/contact"><div> <p className="goto-contact">contact me now</p></div></NavLink>

                    <p className="about-got">I have some skills</p>
                    <p className="about-skills">
                        •html, (s)css, sass, bootstrap/material design <br></br>
                            •react, vue, angular, react native <br></br>
                            •node.js, express, SQL, mongodb, postgreSQL <br></br>
                            •git, webpack, parcel, lambda aws <br></br>
                            •figma, sketch, photoshop, adobe creative <br></br>
                            •AWS, heroku <br></br>
                            •wordpress, squarespace, webflow <br></br>
                            •problem-solving, detail-oriented, focus on efficiency <br></br>
                            •object oriented programming <br></br>
                            •single page development <br></br>
                            •REST API development <br></br>
                    </p>
                    <p className="about-about">
                        I am a web developer with a background including customer service, merchandise management, and being a duo in a design &amp; web development studio.  I have experience with working across a variety of companies and teams, managing myself and others in projects, and developing a stronger, more efficient business model.
                            <br></br><br></br>
                            I completed CareerFoundry’s Full Stack Web Development bootcamp in July 2020. I have made the transition to full time web development after finding that it is a skill that I enjoy and want to further improve. I am looking forward to bringing my previous programming knowledge along with my management & collaboration experience into a flexible and inviting team.
                        </p>
                </div>
            </div>
        )
    }
}

export default aboutChat;