import classNames from 'classnames';
import React, {Component} from 'react';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Navbar extends Component<Props> {
    render() {
        const {activeContentId, setActiveContentId} = this.props;

        return (
            <header>
                <img className="logo" src="https://via.placeholder.com/200x50" alt="logo" />
                <div className="d-flex justify-content-end align-items-center">
                    <nav>
                        <ul className="nav-links">
                            <li>
                                <button className={classNames('btn', {'active':activeContentId === 0})}
                                        onClick={() => setActiveContentId(0)}>
                                    Cody
                                </button>
                            </li>
                            <li>
                                <button className={classNames('btn', {'active':activeContentId === 1})}
                                        onClick={() => setActiveContentId(1)}>
                                    Store
                                </button>
                            </li>
                            <li>
                                <button className={classNames('btn', {'active':activeContentId === 2})}
                                        onClick={() => setActiveContentId(2)}>
                                    About
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn btn-danger ml-3">
                        <FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart
                    </button>
                </div>
            </header>
        );
    }
}

type Props = {
    activeContentId: number;
    setActiveContentId: (id: number) => void;
};

export default Navbar;
