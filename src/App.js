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
      state1: [],
      state2: [],
      state3: [],
      isLoaded: false,
      masterMhpList: [],
      masterReviewList: [],
      masterArticleList: [],
    }
    this.handleAddingNewArticleToList = this.handleAddingNewArticleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);
  };

    componentDidMount() {
  Promise.all([
    fetch('https://infinite-basin-93540.herokuapp.com/articles'),
    fetch('https://infinite-basin-93540.herokuapp.com/mhps'),
    fetch('https://infinite-basin-93540.herokuapp.com/reviews')
  ])
  .then(([res1, res2, res3]) => (
    {
      res1: res1.json(),
      res2: res2.json(),
      res3: res3.json()
    }))
    .then(({res1, res2, res3}) => {
      this.setState({
        isLoaded: true,
        state1: res1,
        state2: res2,
        state3: res3
      });
    })
    .catch((error) => {
      console.log(error);
    });
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

      const { isLoaded, state2 } = this.state;
      if (!isLoaded) {
        return <div>Loading</div>;
      }

      else {
        const mhpSingular = {
          margin: '40px',
          textAlign: 'center',
          backgroundColor: '#7a387a',
          padding: '20px',
          borderRadius: '100px',
          border: '3px solid #ddb0dd',
          fontFamily: 'luminari, fantasy',
          color: '#fdfdff'
        }
        const itemGrid = {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        }
    return (
      <div className="App">
      <div className="HomeStretch">
      <Header/>
      <header className="TheraStar">
      </header>
      <div>
      <Switch>
      <Route exact path='/' render={() =>< MhpList mhpTotal = {this.state.masterMhpList} />}/>
      <Route path='/articleadd' render={()=><NewArticleControl onNewArticleCreation={this.handleAddingNewArticleToList} />} />
      <Route path='/reviewadd' render={()=><NewReviewControl onNewReviewCreation={this.handleAddingNewReviewToList} />} />
      <Route exact path='/reviewlist' render={() =>< ReviewList reviewTotal = {this.state.masterReviewList} />}/>
      <Route exact path='/articlelist' render={() =>< ArticleList articleTotal = {this.state.masterArticleList} />}/>
      <Route component={Error404} />
      </Switch>
      <div style={itemGrid}>
      {state2.map(item =>
        <div style={mhpSingular} key={item.id}>
        <h4> {item.name} </h4>
        <p> {item.occupation} </p>
        <p> {item.address} </p>
        <p> {item.insurance} </p>
        <p> {item.accepting} </p>
        <p> {item.email} </p>
        <p> {item.phone} </p>
        <p> {item.bio} </p>
        <p> {item.link} </p>
        </div>
      )}
      </div>
      <Footer/>
      </div>
      </div>
      </div>
    );
  }
}
}

export default App;
