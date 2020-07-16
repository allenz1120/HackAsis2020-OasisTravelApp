import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"; //ADDED - JS for Bootstrap

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid upJumbo">
            <div className="container">
                <h1 className="display-4 text-center">Find your Oasis</h1>
                <p className="lead text-center">Travel with peace of mind using Oasis. <br /> Simply put where you want to go and what you're interested in. <br /> With the powers of sugar, spice, and everything nice, we'll create the perfect trip for you.</p>
            </div>
        </div>
    );
};

export default Jumbotron;