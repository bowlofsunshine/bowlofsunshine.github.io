import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Gitcat from '../images/github.png';
import Chat1 from '../images/chatapp1.png';
import Chat2 from '../images/chatapp2.png';
import { Player } from 'video-react';
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