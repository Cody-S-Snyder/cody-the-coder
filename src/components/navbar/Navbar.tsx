import classNames from 'classnames';
import React, {Component} from 'react';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PageConfig} from "../content/constants";

class Navbar extends Component<Props> {
    render() {
        const {activeContentPage, setActiveContentPage, toggleSidebar, isSidebarOpen} = this.props;

        return (
            <header>
                <button className={classNames('btn btn-sidebar-toggle', {'is-toggled':isSidebarOpen})} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
                <h3 className="header-title mr-auto d-none d-md-block">Cody Snyder</h3>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <button className={classNames('btn', {'active':activeContentPage === PageConfig.home})}
                                    onClick={() => setActiveContentPage(PageConfig.home)}>
                                Cody
                            </button>
                        </li>
                        <li>
                            <button className={classNames('btn', {'active':activeContentPage === PageConfig.store})}
                                    onClick={() => setActiveContentPage(PageConfig.store)}>
                                Store
                            </button>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn-primary ml-md-3 ml-auto">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="ml-sm-2 d-none d-sm-inline">Shopping Cart</span>
                </button>
            </header>
        );
    }
}

type Props = {
    activeContentPage: string;
    setActiveContentPage: (id: string) => void;
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
};

export default Navbar;
