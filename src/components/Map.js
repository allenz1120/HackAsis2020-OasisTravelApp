import React, { Component } from "react";
import { coronaData } from "../static/coronaData.js";

const mapboxgl = window.mapboxgl;
let map;
export default class Map extends Component {
  initMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxsZW56MTEyMCIsImEiOiJja2JneTRhb3YwMDE0MzVucmQ5cHJxOWhiIn0.PIK8vgLwjuIxqm9VChhI-g";
    map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      // center: [114.1694, 22.4060], // starting position [lng, lat]
      center: this.props.location,
      zoom: 12, // starting zoom
    });
    console.log("initalization of map");
    coronaData.forEach(function (marker) {
      console.log("ADDING CORONA CIRCLE");
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.classList.add("marker-corona");
      if (marker.Incidence_Rate === 0) {
        el.style.setProperty("--corona-width", "0px");
      } else if (marker.Incidence_Rate > 1000) {
        el.style.setProperty("--corona-width", "100px");
      } else if (marker.Incidence_Rate > 500) {
        el.style.setProperty("--corona-width", "50px");
      } else if (marker.Incidence_Rate > 0) {
        el.style.setProperty("--corona-width", "20px");
      }

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat([marker.Long_, marker.Lat]).addTo(map);
    });
  };

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.addMarker();
  }

  addMarker = () => {
    map.flyTo({
      center: this.props.location,
      speed: 0.5,
    });
    // add markers to map
    console.log(
      "MADE IT HERE. Interest is " + this.props.interest + " and geojson is"
    );
    console.log(this.props.geojson);

    let interest = this.props.interest;
    let el;

    this.props.geojson.forEach(function (marker) {
      console.log(
        "looking at " +
          marker.name +
          " at location " +
          [marker.location.lat, marker.location.lng]
      );
      // create a HTML element for each feature

      el = document.createElement("div");

      switch (interest) {
        case "botanical garden":
          el.classList.add("marker-botanical");
          break;
        case "campground":
          el.classList.add("marker-campground");
          break;
        case "dive spot":
          el.classList.add("marker-dive");
          break;
        case "food":
          el.classList.add("marker-food");
          break;
        case "hospital":
          el.classList.add("marker-hospital");
          break;
        case "hotel":
          el.classList.add("marker-hotel");
          break;
        case "library":
          el.classList.add("marker-library");
          break;
        case "monument":
          el.classList.add("marker-monument");
          break;
        case "mountain":
          el.classList.add("marker-mountain");
          break;
        case "museum":
          el.classList.add("marker-museum");
          break;
        case "tourist information center":
          el.classList.add("marker-tourist");
          break;
        case "waterfront":
          el.classList.add("marker-waterfront");
          break;
        default:
          break;
      }
      console.log("INTEREST HERE IS", interest, "and the el list is", el);

      new mapboxgl.Marker(el)
        .setLngLat([marker.location.lng, marker.location.lat])

        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h3>" + marker.name + "</h3><button>Add to Experience</button>"
            )
        )
        .addTo(map);
    });
  };

  render() {
    return (
      <div>
        <div id="map" className="map"></div>
      </div>
    );
  }
}
