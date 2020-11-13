import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Gitcat from '../images/github.png';
import Meet from '../images/meetup.png'

export class Meetup extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="meetup">
                        <h3 className="meet-header">A Meetup App</h3>
                        <p className="meet-para">A mock Meetup serverless, progressive web application with React using a test-driven development. The application uses the Google Calendar API to fetch upcoming events.</p>
                    </div>
                    <div className="skills"><p>
                        ReactJS <br></br>
                        Jest &amp; Enzyme <br></br>
                        AWS <br></br>
                        Bootstrap</p>
                    </div>
                </NavLink>
                <NavLink className="all-links link" activeClassName="active-link" to={{ pathname: "http://bowlofsunshine.github.io/meetup" }} target="_blank"><div></div></NavLink>
                <div className="git-cat">
                    <NavLink className="links" activeClassName="active-link" to={{ pathname: "https://github.com/bowlofsunshine/meetup" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" /></NavLink>
                </div>
                <img className="meet-foto" src={Meet} alt="meetup" />
            </div>
        )
    }
}

export default Meetup;