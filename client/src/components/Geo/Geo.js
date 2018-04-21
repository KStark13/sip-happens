import React from 'react';
import Geosuggest from 'react-geosuggest';

class Geo extends React.Component {
		render() {
			var fixtures = [
			{label: 'Cork Wine Bar', location: {lat: 32.80719 , lng: -96.7963929 }},
			{label: 'Veritas Wine Room', location: {lat: 32.814071 , lng: -96.77823699999999 }},
			{label: 'Times Ten Cellars', location: {lat: 32.8147467 , lng: -96.75382780000001 }},
		];
	

		return(
			<div>
				<Geosuggest
					ref={el=>this._geoSuggest=el}
					placeholder= "Start typing!"
					initialValue= "Dallas"
					fixtures= {fixtures}
					onSuggestSelect={this.onSuggestSelect}
				
					radius="20" />
				{/*Buttons to trigger exposed component functions*/}
				<button onClick={()=>this._geoSuggest.focus()}>Focus</button>
				<button onClick={()=>this._geoSuggest.update('Dallas')}>Update</button>
				<button onClick={()=>this._geoSuggest.clear()}>Clear</button>
				<button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
			</div>
			)
	}

	onSuggestSelect(suggest) {
		console.log(suggest);	
}
};
export default Geo;