import React, {Component} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faUserCircle, faFile} from "@fortawesome/free-solid-svg-icons";

class HomeSidebar extends Component<Props, State> {
    render() {
        return (
            <div className="d-flex justify-content-center flex-column">
                <div className="sidebar-button">
                    About Me
                </div>
                <div className="sidebar-button">
                    This Website
                </div>
                <div className="sidebar-button">
                    What I Do
                </div>
            </div>
        );
    }
}

type Props = {};
type State = {};

export default HomeSidebar;
