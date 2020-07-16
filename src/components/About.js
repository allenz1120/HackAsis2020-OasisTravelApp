import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const About = () => {
    return (
        <div>
            <div class="row">
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="https://i.imgur.com/ET0l6GU.jpg" alt="Generic placeholder image" width="200" height="200"></img>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="https://i.imgur.com/z87lcoA.jpg" alt="Generic placeholder image" width="200" height="200"></img>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="rounded-circle" src="https://i.imgur.com/FcmAYtx.png" alt="Generic placeholder image" width="200" height="200"></img>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 text-center">
                    <img class="rounded-circle" src="https://i.imgur.com/k2l7w8Z.jpg" alt="Generic placeholder image" width="200" height="200"></img>
                </div>
                <div class="col-lg-6 text-center">
                    <img class="rounded-circle" src="https://i.imgur.com/BqXqr9e.jpg" alt="Generic placeholder image" width="200" height="200"></img>
                </div>
            </div>
        </div>
    );
};

export default About;

