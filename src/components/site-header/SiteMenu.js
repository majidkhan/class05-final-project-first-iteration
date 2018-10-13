import React from "react";

import "./SiteHeader.css";

class SiteMenu extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="iconInternship"><span className="icon material-icons md-36 md-dark">build</span><a href="#link" className="menuLink">Internships</a></li>
                    <li className="iconEvents"><span className="icon material-icons md-36 md-dark">date_range</span><a href="#link" className="menuLink">Events</a></li>
                    <li className="iconMentors"><span className="icon material-icons md-36 md-dark">accessibility_new</span><a href="#link" className="menuLink">Mentors</a></li>
                    <li className="iconNetwork"><span className="icon material-icons md-36 md-dark">people</span><a href="#link">Networking</a></li>
                </ul>
            </nav>
        );
    }
}

export default SiteMenu;