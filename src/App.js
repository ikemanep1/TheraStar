import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  render() {
    return (
      <div className="App">
      <div className="HomeStretch">
      <Header/>
      <header className="TheraStar">
      </header>
      <Footer/>
      </div>
      <div>
      <Switch>
      <Route exact path='/' render={() =>< Header />}/>
      <Route path='/footer' render={() =>< Footer />}/>
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
