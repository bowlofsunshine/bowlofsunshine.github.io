import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Video from './video.js';

export class ChatArrow extends React.Component {
    render() {
        return (
            <div className="video-page">
                <Navi />
                <NavLink className="all-links link2" activeClassName="activeLink" to="/chat"><div></div></NavLink>
                {/* back link & arrow */}
                <div className="video-position">
                    <Video />
                </div>
            </div>
        )
    }
}

export default ChatArrow;