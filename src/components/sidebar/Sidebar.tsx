import React, {Component} from 'react';
import classNames from "classnames";
import {PageConfig} from "../content/constants";
import StoreSidebar from "./components/StoreSidebar";
import AboutSidebar from "./components/AboutSidebar";
import HomeSidebar from "./components/HomeSidebar";

class Sidebar extends Component<Props, State>{
    render() {
        const {isOpen} = this.props;
        const {renderSidebarContent} = this;

        return (
            <div className={classNames('cody-sidebar', {'sidebar-open': isOpen})}>
                {renderSidebarContent()}
            </div>
        );
    }

    renderSidebarContent = () => {
        const {activeContentPage} = this.props;

        switch (activeContentPage) {
            case PageConfig.home:
                return <HomeSidebar />;
            case PageConfig.store:
                return <StoreSidebar />;
            case PageConfig.about:
                return <AboutSidebar />;
        }
    }

}

type Props = {
    isOpen: boolean;
    activeContentPage: string;
};
type State = {};

export default Sidebar;
