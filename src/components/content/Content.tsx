import React, {Component} from 'react';
import {PageConfig} from "./constants";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StorePage from "./pages/StorePage";

class Content extends Component<Props> {
    render() {
        const {activeContentPage} = this.props;
        const isHome = activeContentPage === PageConfig.home;
        const isStore = activeContentPage === PageConfig.store;
        const isAbout = activeContentPage === PageConfig.about;

        return (
            <article className="container-fluid p-0">
                {isHome && <HomePage />}
                {isStore && <StorePage />}
                {isAbout && <AboutPage />}
            </article>
        );
    }
}

type Props = {
    activeContentPage: string;
};

export default Content;
