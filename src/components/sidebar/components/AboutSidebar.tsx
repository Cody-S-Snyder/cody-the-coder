import React, {Component} from 'react';

class AboutSidebar extends Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-button">
                    button 8
                </div>
                <div className="sidebar-button">
                    button 9
                </div>
                <div className="sidebar-button">
                    button 10
                </div>
                <div className="sidebar-button">
                    button 11
                </div>
                <div className="sidebar-button">
                    button 12
                </div>
            </React.Fragment>
        );
    }
}

type Props = {};
type State = {};

export default AboutSidebar;
