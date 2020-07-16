import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const HongKong = () => {
    return (
        <div id="bigContainer">
            <div className="jumbotron jumbotron-fluid itinJumbo">
                <div className="container">
                    <h1 className="display-4 text-center itinTitle">Hong Kong</h1>
                    <p className="text-center">
                        <a className="btn btn-primary coronaBtn" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Coronavirus Statistics</a>
                    </p>
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Cases</h3>
                                    <p className="card-text numbers">1300</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Recovered</h3>
                                    <p className="card-text numbers">1161</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Deaths</h3>
                                    <p className="card-text numbers">7</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center source">Source: <a className="link" href="https://chp-dashboard.geodata.gov.hk/covid-19/en.html">Hong Kong Department of Health</a></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="food" className="container col-md-6 left">
                    <h1 className="h1Custom">Food</h1>
                    <div id="carouselExampleInterval2" className="carousel slide">
                        <div className="carousel-inner justify-content-center">
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://static8.orstatic.com/userphoto/doorphoto/1/ZU/0072VN30D931ED9BBBE260lv.jpg" className="card-img-top mx-auto" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">The Chairman</h3>
                                        <p className="card-text">Regarded as one of the best restaurants in Asia, experience Cantonese cuisine like never before. Fully organic, no MSG, and ready for food pics!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://media.timeout.com/images/105573538/1372/772/image.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Grissini</h3>
                                        <p className="card-text">Authenic Italian food along with a stunning view of Victoria Harbor. What more could you ask for? Breadstick? Well they've got those too!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active" data-interval="100000">
                                <div className="card">
                                    <img src="https://cdn.asiatatler.com/asiatatler/i/hk/2019/04/17161212-birdie-001_cover_2000x1200.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Birdie</h3>
                                        <p className="card-text">If Yakitori is what you're craving, look no further. Thighs, wings, livers, and hearts, they've got it all. With a nice selection of drinks to wash it down, make sure to come hungry!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div id="food" className="container col-md-6 right">
                    <h1 className="h1Custom">Activities</h1>
                    <div id="carouselExampleInterval3" className="carousel slide">
                        <div className="carousel-inner justify-content-center">
                            <div className="carousel-item active" data-interval="100000">
                                <div className="card">
                                    <img src="https://smile4travel.de/wp-content/uploads/2019/03/China_Hongkong_LionRock-25-800x600.jpg" className="card-img-top mx-auto" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Lion Rock</h3>
                                        <p className="card-text">Take a hike to Hong Kong's iconic peak and find a breathtaking view of the city. Remember to wear some comfortable shoes, bring some water, and most importantly, don't forget your camera!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://a0.muscache.com/im/pictures/44249669-c11c-48a9-9b80-82ea7717162c.jpg?aki_policy=exp_xl" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Explore Hidden Alleyway Bars and Speakeasies</h3>
                                        <p className="card-text">Skip the touristy bar crawls and experience and best Hong Kong has to offer! Sneak through unmarked doors and hidden alleyways to find the perfect spots to relax and enjoy a drink.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://www.fodors.com/assets/destinations/74030/victoria-peak-and-the-victoria-peak-tram-hong-kong-china_main.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">The Peak Tram</h3>
                                        <p className="card-text">Ride to Victoria Peak while getting some of the best views over the harbour and skyline of Hong Kong. One of the world's oldest funicular railways, this won't be an experience you'll forget!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval3" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval3" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HongKong;
