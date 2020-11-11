import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';


export class aboutChat extends React.Component {

    render() {

        return (

            <div >
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="about" >
                        <h3 className="about-header">hello, yes, I am rachel and am a software developer residing in Berlin, Germany
                        (and yes i am looking for a job or freelance oppurtunities)
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
                            I completed CareerFoundry's Full Stack Web Development bootcamp in July 2020. <br></br><br></br>

                            during my time at the bootcamp, I spent upwards of 40 hours a week for 8 months learning web development. <br></br><br></br>

                            the course started from the basics of HTML and CSS then continued on to full stack web applications using Node.js, building an API, and MongoDB backend with a React and Bootstrap/Material Design UI frontend.<br></br><br></br>

                            most of what is under my projects is what I created during the bootcamp. <br></br><br></br>

                            prior to my bootcamp I was taking computer science classes at PSU in portland, oregon. I hope that with my coding experience prior to this course and my current knowledge of web development, I can offer a large array of skills to any project!
                        </p>


                    </div>

                </NavLink>


            </div>
        )
    }
}

export default aboutChat;