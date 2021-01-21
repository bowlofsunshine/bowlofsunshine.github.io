import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'


export class Contact extends React.Component {

    render() {

        return (

            <div >
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="contact" >
                        <h3 className="contact-head">Hey hi hello. Email me! I like them. </h3>
                        <p className="contact-para">rachel@rachel.coffee</p>
                        <NavLink to={{ pathname: "https://github.com/bowlofsunshine" }} className="all-links github" activeClassName="active-link" target="_blank" onClick={this.handleToggleClick}><p>github</p></NavLink>
                        <NavLink className="all-links insta" activeClassName="active-link" to={{ pathname: "https://www.linkedin.com/in/rachel-g-1243669b/" }} target="_blank" ><p>linkedin</p></NavLink>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Contact;