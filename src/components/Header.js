import React, { Component } from "react";
import { US_STATES } from "../utils/us-states";

// function Header() {
//     return (
//         <header className="bg-dark text-white p-4 fs-5 fw-bold">
//             <h1 className="text-success">Header</h1>
//             {US_STATES.map((state) => (
//                 <li>
//                     {state.name} ({state.abbreviation})
//                 </li>
//             ))}
//         </header>
//     );
// }

class Header extends Component {
    constructor() {
        super();
        this.state = {
            us_states: US_STATES,
        };
    }
    render() {
        return (
            <div>
                <p>US States and territories</p>
                <ul>
                    {this.state.us_states.map((s, index) => {
                        return (
                            <li key={index}>
                                {s.name} ({s.abbreviation})
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Header;
