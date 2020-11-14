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
                        <NavLink className="all-links github" activeClassName="active-link" to="/meet"><p>github</p></NavLink>
                        <NavLink className="all-links insta" activeClassName="active-link" to="/meet"><p>instagram</p></NavLink>
                        <NavLink className="all-links medium" activeClassName="active-link" to="/meet"><p>medium</p></NavLink>
                        <NavLink className="all-links twitter" activeClassName="active-link" to="/meet"><p>twitter</p></NavLink>
                        <NavLink className="all-links linked" activeClassName="active-link" to="/meet"><p>linkedin</p></NavLink>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Contact;