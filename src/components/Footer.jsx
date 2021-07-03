import React from "react";

function Footer() {
    const currentyear = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright ©️ {currentyear} Himanshu</p>
        </footer>
    );
}

export default Footer;