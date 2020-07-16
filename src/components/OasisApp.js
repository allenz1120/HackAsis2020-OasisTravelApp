import React from "react";
import NavBar from "./NavBar"; //ADDED - NavBar
import Jumbotron from "./Jumbotron";
import Inputs from "./Inputs";
import Map from "./Map";
import Boston from "./Boston";
import HongKong from "./HongKong";
// import About from "./About"
import Footer from "./Footer";


export default class OasisApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "", venues: [], location: [-71.087574, 42.351231], interest: '' };
  }

  callAPI() {
    fetch("http://localhost:3000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  handleSearchOption = (inLocation, inInterest) => {
    console.log("we are in", inLocation, "and we are looking for", inInterest);
    this.setState({ interest: inInterest })
  }

  handleVenueData = (inVenues) => {
    console.log('in handleVenueData and state is first ')
    console.log(this.state.venues)
    const coord = [inVenues[0].location.lng, inVenues[0].location.lat]
    this.setState(() => ({ venues: inVenues, location: coord }))
    console.log('in handleVenueData and state is now ')
    console.log(this.state.venues)

  }

  render() {

    return (
      <div>
        <NavBar />
        <Jumbotron />
        <Inputs
          handleSearchOption={this.handleSearchOption}
          handleVenueData={this.handleVenueData} />
        <Map geojson={this.state.venues}
          location={this.state.location}
          interest={this.state.interest} />
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
        <Boston />
        <HongKong />
        <Footer />
      </div>
    );
  }
}

//        <Header title={title} subtitle={subtitle} />
