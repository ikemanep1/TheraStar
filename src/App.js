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
      state1Items: [],
      state2Items: [],
      state3Items: [],
      isLoaded: false,
      masterMhpList: [],
      masterReviewList: [],
      masterArticleList: [],
    }
    this.handleAddingNewArticleToList = this.handleAddingNewArticleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);
  };

  //   componentDidMount() {
  // Promise.all([
  //   fetch('https://infinite-basin-93540.herokuapp.com/mhps'),
  //   fetch('https://infinite-basin-93540.herokuapp.com/reviews')
  // ])
  // .then(([res1, res2, res3]) => (
  //   {
  //     res1: res1.json(),
  //     res2: res2.json(),
  //     res3: res3.json()
  //   }))
  //   .then(({res1, res2, res3}) => {
  //     this.setState({
  //       isLoaded: true,
  //       state1: res1,
  //       state2: res2,
  //       state3: res3
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   }

    componentDidMount() {
      fetch('https://infinite-basin-93540.herokuapp.com/mhps')
      .then(res => res.json())
      .then(json => {
        this.setState({
        isLoaded: true,
        state1Items: json,
      })
    });
      fetch('https://infinite-basin-93540.herokuapp.com/articles')
      .then(res => res.json())
      .then(json => {
        this.setState({
        isLoaded: true,
        state2Items: json,
      })
    });
      fetch('https://infinite-basin-93540.herokuapp.com/reviews')
      .then(res => res.json())
      .then(json => {
        this.setState({
        isLoaded: true,
        state3Items: json,
      })
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

      const { isLoaded, state1Items, state2Items, state3Items } = this.state;
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
      {state1Items.map(state1Item =>
        <div style={mhpSingular} key={state1Item.id}>
        <h4> {state1Item.name} </h4>
        <p> {state1Item.occupation} </p>
        <p> {state1Item.address} </p>
        <p> {state1Item.insurance} </p>
        <p> {state1Item.accepting} </p>
        <p> {state1Item.email} </p>
        <p> {state1Item.phone} </p>
        <p> {state1Item.bio} </p>
        <p> {state1Item.link} </p>
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
