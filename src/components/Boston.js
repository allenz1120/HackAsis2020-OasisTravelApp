import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Boston = () => {
    return (
        <div id="bigContainer">
            <div className="jumbotron jumbotron-fluid itinJumbo">
                <div className="container">
                    <h1 className="display-4 text-center itinTitle">Boston</h1>
                    <p className="text-center">
                        <a className="btn btn-primary coronaBtn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Coronavirus Statistics</a>
                    </p>
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Cases</h3>
                                    <p className="card-text numbers">13,556</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Recovered</h3>
                                    <p className="card-text numbers">9504</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <h3 className="card-title">Total Deaths</h3>
                                    <p className="card-text numbers">710</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center source">Source: <a className="link" href="https://www.boston.gov/news/coronavirus-disease-covid-19-boston">City of Boston</a></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="food" className="container col-md-6 left">
                    <h1 className="h1Custom">Food</h1>
                    <div id="carouselExampleInterval" className="carousel slide">
                        <div className="carousel-inner justify-content-center">
                            <div className="carousel-item active" data-interval="100000">
                                <div className="card">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/b6/17/90/neighborhood-cafe.jpg" className="card-img-top mx-auto" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Neighbord Coffee & Crepes</h3>
                                        <p className="card-text">Begin your adventure in Boston with an amazing breakfast. A family-owned artisan coffee and crepe shop right in Fenway, you'll be sure to leave energized for the day and with a couple new Insta pics!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://www.withsprinklesontop.net/wp-content/uploads/2011/10/DSC_6373x900.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Mike's Pastry</h3>
                                        <p className="card-text">Home of the Cannoli! Expect to wait outside for a bit as Mike's is one of the most popular pastry shops in Boston, and for good reason. Remember to bring cash and a sweet tooth!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://images.getbento.com/accounts/236fb3743b9522eafb90c6d2d20b8115/mediausers/custom_fields_galleries/images/tlQ7iSNdRvCwnk3pTFqd_0613%20TastyB%20Fenway-%20336.jpg?w=1200&fit=crop&auto=compress,format&h=600" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Tasty Burger</h3>
                                        <p className="card-text">Home of the Official Burger of the Boston Red Sox! Grab a great-tasting burger right behind Fenway Park and experience a Boston icon!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div id="food" className="container col-md-6 right">
                    <h1 className="h1Custom">Activities</h1>
                    <div id="carouselExampleInterval1" className="carousel slide">
                        <div className="carousel-inner justify-content-center">
                            <div className="carousel-item active" data-interval="100000">
                                <div className="card">
                                    <img src="https://www.lenoxhotel.com/wp-content/uploads/2017/11/mfa-boston-strong-1300x796.jpg" className="card-img-top mx-auto" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Museum of Fine Arts</h3>
                                        <p className="card-text">The 17th largest art museum in the world with an extensive collection. With exhibits ranging from ancient to contemporary, there is something for everyone to enjoy. Be sure to bring your Student ID for free admission!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://exhibitcitynews.com/wp-content/uploads/2020/06/DEAL-Boston-Attractions-Freedom-Trail-745x400-1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Freedom Trail</h3>
                                        <p className="card-text">Experience more than 250 years of history and follow 2.5-mile red line that will take you to 16 historic sites, including museums, churches, a ship, and more!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="100000">
                                <div className="card">
                                    <img src="https://cdn.theathletic.com/app/uploads/2020/06/16200422/Fenway-Park-scaled-e1592357506750-1024x681.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Fenway Park</h3>
                                        <p className="card-text">America's Most Beloved Ballpark and home of the Red Sox! Catch a game during the season and experience America's favorite passtime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boston;
