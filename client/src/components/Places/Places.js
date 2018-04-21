import React from 'react';
import "./Places.css";

class Places extends React.Component {
	render() {
		const list= this.props.venues.map((venue,i) => {
			/*const image = venue.categories[0].icon.prefix + venue.categories[0].icon.suffix;*/
			return(
				<div className="placeitems">
					<ul className="list-inline">
					<li className="venues" key={i}>
						{/*<p>{image}</p>*/}
						<p ><strong>{venue.name}</strong></p>
						<p >{venue.location.address} </p>
						<p>{venue.location.city}, {venue.location.state} {venue.location.postalCode}</p>
						<p></p>
					</li>
					</ul>
				</div>
				)

		})
		return(
			<div className="places">
				<ul className="list-inline">
					{list}
				</ul>
			</div>
			)
	}
}
export default Places;