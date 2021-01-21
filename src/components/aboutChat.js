import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'


export class aboutChat extends React.Component {

    render() {

        return (

            <div >
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="about" >
                        <h3 className="about-header">
                            hello, yes, I am rachel and am a software developer residing in Berlin, Germany
                            (and yes i am looking for a job or freelance opportunities)
                            <br></br><br></br>
                            My current goal is to dive deeper with my skills and apply my talent within an experienced team.
                        </h3>
                        <p className="about-hmm">hmmmmmmmmmmmm</p>
                        <p className="about-got">I got skills</p>
                        <p className="about-skills">

                            html, (s)css, sass, bootstrap/material design <br></br>
                            -<br></br>
                            react, vue, angular, react native<br></br>
                            -<br></br>
                            node.js, express, SQL, mongodb, postgreSQL<br></br>
                            -<br></br>
                            git, webpack, parcel, lambda aws<br></br>
                            -<br></br>
                            figma, sketch, photoshop, adobe creative, heroku<br></br>
                            -<br></br>
                            wordpress, squarespace, tumblr
                        </p>
                        <p className="about-about">
                            <br></br><br></br>
                            I completed CareerFoundry's Full Stack Web Development bootcamp in July 2020. <br></br><br></br>
                            I Made the switch from mathematics to web development because it is a field where my knowledge could be more applicable.<br></br><br></br>
                            CareerFoundry is self-directed, to fight against distractions I set myself to a schedule of 40 hours per week for 8 months.<br></br><br></br>

                            the course started from the basics of HTML and CSS then continued on to full stack web applications using Node.js, building an API, and MongoDB backend with a React and Bootstrap/Material Design UI frontend.<br></br><br></br>

                            most of what is under my projects is what I created during the bootcamp. <br></br><br></br>

                        </p>


                    </div>

                </NavLink>


            </div>
        )
    }
}

export default aboutChat;