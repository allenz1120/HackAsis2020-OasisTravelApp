import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"; //ADDED - JS for Bootstrap

const NavBar = () => {
    return (
        <div>
            <nav id="hiddenNav" className="navbar navbar-expand-md navbar-light fixed-top hideNav ml-auto">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/">Map</a>
                    <a className="nav-item nav-link" href="/about">About Us</a>
                    <a className="nav-item nav-link" href="experience">Itinerary</a>
                    {/* <a className="nav-item nav-link" href="#sticky-footer">Contact Us</a> */}
                </div>
            </nav>

            <nav id="myNav" className="navbar navbar-default navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">Oasis</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a data-content="Map" className="nav-item nav-link" href="/" aria-hidden="true">Map</a>
                        <a data-content="About Us" className="nav-item nav-link" href="/about" aria-hidden="true">About Us</a>
                        <a data-content="Contact Us" className="nav-item nav-link" href="/experience" aria-hidden="true">Itinerary</a>
                        {/* <a data-content="Contact Us" className="nav-item nav-link" href="#sticky-footer" aria-hidden="true">Contact Us</a> */}
                    </div>
                </div>
            </nav>

        </div>

        // <button type="button" className="btn btn-primary">Primary</button>
    );
};

export default NavBar;

// <a className="nav-item nav-link active mr-auto" href="#">Home <span className="sr-only">(current)</span></a>
