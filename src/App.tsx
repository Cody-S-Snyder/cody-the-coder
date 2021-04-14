import './styles/main.scss';
import Navbar from "./components/navbar/Navbar";
import React from "react";

class App extends React.Component<Props, State> {
    state: State = {
        activeContentId: 1
    }

    setActiveContentId = (activeContentId: number) => this.setState({activeContentId});

    render() {
        const {setActiveContentId} = this;
        const {activeContentId} = this.state;

        return (
            <div className="container">
                <Navbar
                    activeContentId={activeContentId}
                    setActiveContentId={setActiveContentId}
                />
            </div>
        );
    }
}

type Props = {};
type State = {
    activeContentId: number;
};

export default App;
