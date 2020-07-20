import React, { Component } from 'react';
import { coronaData } from './../static/coronaData';

const mapboxgl = window.mapboxgl;
let map;
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [-71.087574, 42.351231],
            venues: []
        }
    }

    initMap = () => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsZW56MTEyMCIsImEiOiJja2JneTRhb3YwMDE0MzVucmQ5cHJxOWhiIn0.PIK8vgLwjuIxqm9VChhI-g';
        map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            // center: [114.1694, 22.4060], // starting position [lng, lat]
            center: this.props.location,
            zoom: 11 // starting zoom
        });
        console.log('initalization of map')
        coronaData.forEach(function (marker) {
            console.log('ADDING CORONA CIRCLE')
            // create a HTML element for each feature
            var el = document.createElement('div');
            el.classList.add('marker-corona');

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker)
                .addTo(map);

        });
    }

    componentDidMount() {
        this.initMap();
    }

    componentDidUpdate() {
        this.addMarker();
    }

    addMarker = () => {
        map.flyTo({
            center: this.props.location,
            speed: 0.5
        });
        // add markers to map
        console.log('MADE IT HERE. Interest is ' + this.props.interest + ' and geojson is')
        console.log(this.props.geojson)

        let interest = this.props.interest;
        let counter = 0;

        switch (interest) {
            case 'botanical garden':
                counter = 1;
                break;
            case 'campground':
                counter = 2;
                break;
            case 'dive spot':
                counter = 3;
                break;
            case 'food':
                counter = 4;
                break;
            case 'hospital':
                counter = 5;
                break;
            case 'hotel':
                counter = 6;
                break;
            case 'library':
                counter = 7;
                break;
            case 'monument':
                counter = 8;
                break;
            case 'mountain':
                counter = 9;
                break;
            case 'museum':
                counter = 10;
                break;
            case 'tourist information center':
                counter = 11;
                break;
            case 'waterfront':
                counter = 12;
                break;
            default:
                break;

        }
        let el = [];
        this.props.geojson.forEach(function (marker) {
            console.log('looking at ' + marker.name + ' at location ' + [marker.location.lat, marker.location.lng] + ' and we are on counter number ', counter)
            // create a HTML element for each feature


            el[counter] = document.createElement('div');

            switch (interest) {
                case 'botanical garden':
                    el[counter].classList.add('marker-botanical');
                    break;
                case 'campground':
                    el[counter].classList.add('marker-campground');
                    break;
                case 'dive spot':
                    el[counter].classList.add('marker-dive');
                    break;
                case 'food':
                    el[counter].classList.add('marker-food');
                    break;
                case 'hospital':
                    el[counter].classList.add('marker-hospital');
                    break;
                case 'hotel':
                    el[counter].classList.add('marker-hotel');
                    break;
                case 'library':
                    el[counter].classList.add('marker-library');
                    break;
                case 'monument':
                    el[counter].classList.add('marker-monument');
                    break;
                case 'mountain':
                    el[counter].classList.add('marker-mountain');
                    break;
                case 'museum':
                    el[counter].classList.add('marker-museum');
                    break;
                case 'tourist information center':
                    el[counter].classList.add('marker-tourist');
                    break;
                case 'waterfront':
                    el[counter].classList.add('marker-waterfront');
                    break;
                default:
                    break;

            }
            console.log('INTEREST HERE IS', interest)




            new mapboxgl.Marker(el[counter])
                .setLngLat([marker.location.lng, marker.location.lat])
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + marker.name + '</h3><button>Add to Experience</button>'))
                .addTo(map);



        });
    }

    render() {

        return (
            <div>
                <div id="map" className='map'></div>
            </div>
        );
    }

}
