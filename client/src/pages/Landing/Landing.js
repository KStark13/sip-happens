import React from 'react';
import AgeGate from 'agegate';

class Landing extends React.Component {
	/*setting initial values of this.state.year*/
	state = {
		year: " "
	};
	/*handle changes to the input fields*/
	handleInputChange = event => {
		//pull the year value property off of the event.target (the element which triggered the event )
		const {year, value} = event.target
		//set the state for the appropriate input field
		this.setState({
			[year]: value
		});
	};
	//when the form is submitted, prevent the defualt even and alert the year
	handleFormSubmit = event => {
		event.preventDefault();

	}


	render() {
		return(
	

			<form>
				<h1>What year were you born? </h1>
				<input 
					type="text"
					placeholder="Year Born"
					name="birthyear"
					value={this.state.year}
					onChange={this.handleInputChange}
				/>

				<button onClick={this.handleFormSubmit}> Enter</button>
			</form>
 
			);
	}
}




export default Landing;