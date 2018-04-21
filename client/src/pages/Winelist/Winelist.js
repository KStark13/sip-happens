import React from "react";
import WineCard from "../../components/WineCard/WineCard";
import WineWrapper from "../../components/WineWrapper/WineWrapper";
import Title from "../../components/Title/Title";
import wines from "../../wines.json";
import "./Winelist.css";

class Winelist extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    wines
  };

  removeWine = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const wines = this.state.wines.filter(wine => wine.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ wines });
  };

  // Map over this.state.wine and render a WineCard component for each wine object
  render() {
    return (
      <WineWrapper>
        <Title>Wine List</Title>
        {this.state.wines.map(wine => (
          <WineCard
            removeWine={this.removeWine}
            id={wine.id}
            key={wine.id}
            name={wine.name}
            image={wine.image}
            flavor={wine.flavor}
            wine={wine.wine}
            description={wine.description}
          />
        ))}
      </WineWrapper>
    );
  }
}


export default Winelist;