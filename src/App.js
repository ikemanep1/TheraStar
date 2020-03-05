import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article';
import ArticleAdd from './components/ArticleAdd';
import ArticleList from './components/ArticleList';
import NewArticleControl from './components/NewArticleControl';
import Error404 from './components/Error404';
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
      masterArticleList: [
        {
        name: "Coping with stress",
        link: "ike.com",
        description: "This article helps people who are suffering from stress. It includes deep breathing techniques."
      },
      {
        name: "Financial help",
        link: "Leo.com",
        description: "This article helps people who are struggling financially."
      },
      {
        name: "How to be a good friend",
        link: "Marvin.com",
        description: "This article helps people who are looking to help friends and loved ones."
      }
    ]
    }
    this.handleAddingNewArticleToList = this.handleAddingNewArticleToList.bind(this);
  };

  handleAddingNewArticleToList(newArticle) {
  let newMasterArticleList = this.state.masterArticleList.slice();
  newMasterArticleList.push(newArticle);
  this.setState({masterArticleList: newMasterArticleList});
}
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
        <Route exact path='/' render={() =>< ArticleList articleTotal = {this.state.masterArticleList} />}/>
        <Route path='/articleadd' render={()=><NewArticleControl onNewArticleCreation={this.handleAddingNewArticleToList} />} />
        <Route component={Error404} />
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
