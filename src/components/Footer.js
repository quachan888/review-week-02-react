import React from "react";
import "./footer.css";
import { Button } from "reactstrap";

function Footer(props) {
    return (
        <footer className="text-center text-white p-2 my-2">
            <p>&copy; 2022 An Quach</p>
            <Button color="primary">Contact Me</Button>
        </footer>
    );
}

export default Footer;
