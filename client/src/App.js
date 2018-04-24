import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import QuizPage from './pages/QuizPage/QuizPage';
import Facts from './pages/Facts/Facts';
import Winelist from './pages/Winelist/Winelist';
import Navbar from './components/Navbar/Navbar';
/*import Footer from './components/Footer/Footer';*/
import Wrapper from './components/Wrapper/Wrapper';
import "./App.css";

class App  extends Component {
    state = {
      isofage: false,
    }

    ageHandler = () => {
      this.setState({
        isofage: true,
      }) 
    }
  render() {
    return (

  



    <Router>
      <div>
        { this.state.isofage ? 
        <Navbar /> : null }
        {/*  <Route exact path= "/" component={Landing} />*/}
          { this.state.isofage ? 
          <Wrapper>
          <Route exact path= "/home" component={Home} />
          <Route exact path= "/quiz" component={QuizPage} />
          <Route exact path= "/facts" component={Facts} />
          <Route exact path= "/winelist" component={Winelist} />
          </Wrapper>
           : 
           <Landing ageHandler={this.ageHandler}/>

        }
       {/*  <Footer />*/}
      </div>
    </Router>
    )}
}

export default App;
