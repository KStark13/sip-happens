import React from 'react';
import Logo from "../../components/Logo/Logo"
import "./Landing.css";

class Landing extends React.Component {
	/*setting initial values of this.state.year*/
	state = {
		year: ""
	};
	/*handle changes to the input fields*/
	handleInputChange = event => {
		//pull the year value property off of the event.target (the element which triggered the event )
		const value = event.target.value;
		console.log(value)
		//set the state for the appropriate input field
		this.setState({
			year: value
		});
	};
	//when the form is submitted, prevent the defualt even and alert the year
	handleFormSubmit = event => {
		event.preventDefault();
		console.log('submit: ' + this.state.year)
		if(this.state.year > 1997 || this.state.year === "") {
			alert ('Age check failed!')
		} else {
			this.props.ageHandler()
		}
	}


	render() {
		return(
			<div>
			<Logo />
			<div className="container">
				<div className="agebox row">
					<div className="col-md-8">
						<form>
							<h1>What year were you born? </h1>
							<input 
								className="form-control"
								type="text"
								placeholder="Year Born"
								name="birthyear"
								value={this.state.year}
								onChange={this.handleInputChange}
							/>
							<br/>
							<button  className="btn btn-default" onClick={this.handleFormSubmit}> Enter</button>
						</form>
 					</div>
 				</div>
 			</div>
 			</div>
			);
	}
}




export default Landing;