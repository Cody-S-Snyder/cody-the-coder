import './styles/main.scss';
import Navbar from "./components/navbar/Navbar";
import React from "react";
import classNames from "classnames";
import Sidebar from "./components/sidebar/Sidebar";
import {PageConfig} from "./components/content/constants";
import Content from "./components/content/Content";

class App extends React.Component<Props, State> {
    state: State = {
        activeContentPage: PageConfig.home,
        isSidebarOpen: true,
    }

    setActiveContentPage = (activeContentPage: string) => this.setState({activeContentPage});
    toggleSidebar = () => this.setState({isSidebarOpen: !this.state.isSidebarOpen});

    render() {
        const {setActiveContentPage, toggleSidebar} = this;
        const {activeContentPage, isSidebarOpen} = this.state;

        return (
            <React.Fragment>
                <Sidebar isOpen={isSidebarOpen} activeContentPage={activeContentPage} />
                <div className={classNames('cody-container', {'has-sidebar' : isSidebarOpen})}>
                    <Navbar activeContentPage={activeContentPage} setActiveContentPage={setActiveContentPage}
                            toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <Content activeContentPage={activeContentPage} />
                </div>
            </React.Fragment>
        );
    }
}

type Props = {};
type State = {
    activeContentPage: string;
    isSidebarOpen: boolean;
};

export default App;
