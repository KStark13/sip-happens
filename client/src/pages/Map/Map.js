import React from "react";
/*import Geosuggest from 'react-geosuggest';*/
/*import Search from '../components/Search/Search';*/
import MyMapComponent from '../../components/Map/Map';
import Places from '../../components/Places/Places'
import superagent from 'superagent';
import Info from '../../components/Info/Info';
/*import Geo from '../components/Geo/Geo';*/
import './Map.css';

class Maps extends React.Component {
	constructor() {
		super()
		this.state = {
			venues: [],
			center: {
				lat: 30.7766642,
				lng: -96.79698789999998
			}

		}
	}

	componentDidMount() {
		console.log('componentDidMount')

	const url= 'https://api.foursquare.com/v2/venues/search?ll=32.7766642,-96.79698789999998&query=wine&v=20150214&m=foursquare&client_secret=DLVAGQEGIRGWNG0F5JIU51JN02WYEHHIMIPAI2PWF0ZAPPSF&client_id=SBR5VDRMVPMIQ5KGWPHGTJVUEX03I511OEYZIH2MXHHQLUB1&limit=12'
	
	superagent
	.get(url)
	.query(null)
	.set('Accept', 'text/json')
	.end((err, response) => {

		const venues = response.body.response.venues
		console.log(JSON.stringify(venues))
		
		this.setState({
			venues: venues
		})
	})
	}

	render() {

		const location = {
			lat: this.state.center.lat,
			lng: this.state.center.lng
		}
		location.lat +=2;
		const markers = [
			{
			location: {
			lat: this.state.center.lat,
			lng: this.state.center.lng
				}
			}
		]
		console.log("calling rendering Fact.js  " + markers )
		return (
			<div>
				<div className= "map">
				<MyMapComponent center={location} markers={this.state.venues} isMarkerShown="true"
				/>
				<Places venues={this.state.venues} />
				</div>
			</div>
			)
	}

}






export default Maps;