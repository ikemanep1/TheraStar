import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article';
import ArticleAdd from './components/ArticleAdd';
import ArticleList from './components/ArticleList';
import Mhp from './components/Mhp';
import Review from './components/Review';
import MhpList from './components/MhpList';
import ReviewAdd from './components/ReviewAdd';
import ReviewList from './components/ReviewList';
import NewArticleControl from './components/NewArticleControl';
import NewReviewControl from './components/NewReviewControl';
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
      items: [],
      isLoaded: false,
      masterMhpList: [],
      masterReviewList: [],
      masterArticleList: [],
    }
    this.handleAddingNewArticleToList = this.handleAddingNewArticleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);
  };

  componentDidMount() {
  // fetch('https://infinite-basin-93540.herokuapp.com/articles')
  fetch('https://infinite-basin-93540.herokuapp.com/mhps')
  // fetch('https://infinite-basin-93540.herokuapp.com/reviews')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
      console.log(json)
    });
    console.log(this.state.items)
}

  handleAddingNewArticleToList(newArticle) {
    let newMasterArticleList = this.state.masterArticleList.slice();
    newMasterArticleList.push(newArticle);
    this.setState({masterArticleList: newMasterArticleList});
  }

  handleAddingNewReviewToList(newReview) {
    let newMasterReviewList = this.state.masterReviewList.slice();
    newMasterReviewList.push(newReview);
    this.setState({masterReviewList: newMasterReviewList});
  }
  render() {

      const { isLoaded, items } = this.state;
      if (!isLoaded) {
        return <div>Loading</div>;
      }

      else {
    return (
      <div className="App">
      <div className="HomeStretch">
      <Header/>
      <header className="TheraStar">
      </header>
      <div>
      {items.map(item =>
        <div key={item.id}>
        <h4> {item.name} </h4>
        <ul>
        <li> {item.occupation} </li>
        <li> {item.address} </li>
        <li> {item.insurance} </li>
        <li> {item.accepting} </li>
        <li> {item.email} </li>
        <li> {item.phone} </li>
        <li> {item.bio} </li>
        <li> {item.link} </li>
        </ul>
        </div>
      )}
      </div>
      <div>
      <Switch>
      <Route exact path='/' render={() =>< MhpList mhpTotal = {this.state.masterMhpList} />}/>
      <Route path='/articleadd' render={()=><NewArticleControl onNewArticleCreation={this.handleAddingNewArticleToList} />} />
      <Route path='/reviewadd' render={()=><NewReviewControl onNewReviewCreation={this.handleAddingNewReviewToList} />} />
      <Route exact path='/reviewlist' render={() =>< ReviewList reviewTotal = {this.state.masterReviewList} />}/>
      <Route exact path='/articlelist' render={() =>< ArticleList articleTotal = {this.state.masterArticleList} />}/>
      <Route component={Error404} />
      </Switch>
      <Footer/>
      </div>
      </div>
      </div>
    );
  }
}
}

export default App;
