import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"; //ADDED - JS for Bootstrap

const Footer = () => {
    return (
        <footer id="sticky-footer" className="py-4">
            <div className="row">
                <div className="container text-center col-md-6">
                    <small>Copyright &copy; Oasis</small>
                </div>
                <div className="container col-md-6">
                    <small>Contact: +1 (857) 472-9518</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

