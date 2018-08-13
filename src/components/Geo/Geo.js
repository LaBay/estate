import React, { Component } from 'react';


class Geo extends Component{

	componentDidMount(){
		// console.log(this.props)
		var map = new window.google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: {lat: -34.397, lng: 150.644},
			scaleControl: false,
			zoomControl: false,
			fullscreenControl: false
		});
		
		var geocoder = new window.google.maps.Geocoder();

		var geocodeAddress = (geocoder, resultsMap) => {
			console.log("geocoder= ", geocoder);
			console.log("this.props.address", this.props.address);
			

			geocoder.geocode({'address': this.props.address }, function(results, status) {
				if (status === 'OK') {
					resultsMap.setCenter(results[0].geometry.location);
					
					var marker = new window.google.maps.Marker({
						map: resultsMap,
						position: results[0].geometry.location,
					});

				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}

		geocodeAddress(geocoder, map)
	}


	render(){

		return(
			
			<div className="map" id="map"></div>

		)
	}
}

export default Geo