import React, {Component} from 'react';

class StoreSidebar extends Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-button">
                    button 4
                </div>
                <div className="sidebar-button">
                    button 5
                </div>
                <div className="sidebar-button">
                    button 6
                </div>
                <div className="sidebar-button">
                    button 7
                </div>
            </React.Fragment>
        );
    }
}

type Props = {};
type State = {};

export default StoreSidebar;
