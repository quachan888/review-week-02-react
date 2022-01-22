import React from "react";

function Header(props) {
    return (
        <header className="bg-dark text-white p-4 fs-5 fw-bold">
            <h1 className="text-success">Header</h1>
            {props.myStates.map((state) => (
                <li>
                    {state.name} ({state.abbreviation})
                </li>
            ))}
        </header>
    );
}

export default Header;
