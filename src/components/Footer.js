import React from "react";
import "./footer.css";

function Footer(props) {
    return (
        <footer className="text-center text-white p-2 my-2">
            <p>&copy; 2022 An Quach</p>
            <p>Favorite Sport: {props.favoriteSport}</p>
        </footer>
    );
}

export default Footer;
