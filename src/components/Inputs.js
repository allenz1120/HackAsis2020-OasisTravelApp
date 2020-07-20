import React, { Component } from "react";

export default class Inputs extends Component {
  state = {
    error: undefined,
  };

  handleSearchOption = (e) => {
    e.preventDefault();
    const inLocation = e.target.elements.inputAddress.value.trim();
    const inInterest = e.target.elements.inputInterest.value;

    const json = {
      location: inLocation,
      interest: inInterest,
    };

    fetch("http://localhost:3000/testAPI", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(json),
    }).then((response) => {
      response.json().then((data) => {
        this.props.handleVenueData(data, inInterest);
      });
    });

  };


  render() {
    return (
      <div id="inputss">
        <form
          className="form-inline justify-content-center mb-2 mt-2"
          onSubmit={this.handleSearchOption}
        >
          <div className="form-row col-md-4 justify-content-center">
            <div className="form-group">
              <label htmlFor="inputAddress">Location</label>
              <input
                type="text"
                className="form-control ml-3"
                id="inputAddress"
                placeholder="123 John Doe Avenue"
              ></input>
            </div>
          </div>
          <div className="form-row col-md-6 justify-content-center">
            <div className="form-group">
              <label htmlFor="inputInterest">Choose Interest</label>
              <select
                className="form-control form-control-lg ml-3"
                id="inputInterest"
                defaultValue="botanical garden"
              >
                <option value="botanical garden">Botanical Garden</option>
                <option value="campground">Campground</option>
                <option value="dive spot">Dive Spot</option>
                <option value="food">Food</option>
                <option value="hospital">Hospital</option>
                <option value="hotel">Hotel</option>
                <option value="library">Library</option>
                <option value="monument">Monument</option>
                <option value="mountain">Hikable Mountain</option>
                <option value="museum">Museum</option>
                <option value="tourist information center">
                  Tourist Information Center
              </option>
                <option value="waterfront">Waterfront</option>
              </select>
            </div>
            <div className="form-group ml-3">
              <button
                id="search"
                type="submit"
                className="btn btn-outline-primary btn-lg search"
              >
                Search
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
