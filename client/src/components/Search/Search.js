import React from 'react';


class Search extends React.Component {
	
	constructor() {
		super()
		this.state={
			zipCode: ''
		}
	}

	searchVenues() {
		console.log('SearchVenues: ' + JSON.stringify(this.state.zipCode))
	}

	upDateZipCode(event){
		console.log('updateZipcode: ' + event.target.value)

		this.setState({
			zipCode: event.target.value
		})
	}

	render() {

		return(
			<div>
			<input onChange={this.upDateZipCode.bind(this)} type="text" placeholder="Zip Code" />
			<button onClick= {this.searchVenues.bind(this)}>Search</button>
			</div>

			)
	}
}

export default Search;