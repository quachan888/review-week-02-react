import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { US_STATES } from "./utils/us-states";

class App extends Component {
    constructor() {
        super();
        this.state = {
            usStates: US_STATES,
        };
    }
    render() {
        return (
            <div className="container">
                <Header myStates={this.state.usStates} />
                <h1>Hello H1</h1>
                <Footer myStates={this.state.usStates} />
            </div>
        );
    }
}

export default App;
