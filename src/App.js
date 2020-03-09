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
      masterMhpList: [{
        name: "Valarie Tobin, CNS",
        occupation: "CNS-Child & Adolescent Psychiatric & Mental Health ( Primary Specialty )",
        address: "1700 W. Van Buren St. Suite 5827-B Chicago, IL 60612",
        insurance: "Can be found on site",
        accepting: "Is currently accepting patients",
        email: "unavailable",
        phone: "(312) 563-1579",
        bio: "Valarie specializes in the mental health of children.",
        link: "https://doctors.rush.edu/details/17816/valerie-tobin-cns-child__adolescent_psychiatric__mental_health-chicago"
      }],
      masterReviewList: [
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
        {
          name: "steve",
          subject: "Marvin",
          rating: "5",
          content: "he is the best!"
        },
      ],
      masterArticleList: [
        {
          name: "Stress management",
          link: "https://www.helpguide.org/articles/stress/stress-management.htm",
          description: "This article covers the importance of being able to manage stress, and provides tips on how to do it."
        },
        {
          name: "How to handle stress at work",
          link: "https://www.health.harvard.edu/blog/how-to-handle-stress-at-work-2019041716436",
          description: "This article published by Harvard Medical School covers stress in the workplace, how it affects the body, and provides tips on how to take care of yourself."
        },
        {
          name: "Finding a provider",
          link: "https://www.healthcare.gov/blog/finding-a-provider/",
          description: "This article provides tips on finding a mental health practitioner."
        },
        {
          name: "Supporting someone with a mental health condition",
          link: "https://www.beyondblue.org.au/the-facts/supporting-someone/supporting-someone-with-depression-or-anxiety",
          description: "This article details the importance of being supportive of those who have mental health conditions."
        },
        {
          name: "Six Ways to Stand Behind Your LGBT Students",
          link: "https://www.tolerance.org/magazine/six-ways-to-stand-behind-your-lgbt-students",
          description: "This article covers the importance of being inclusive and supportive of LGBT communities in the classroom."
        },
        {
          name: "This Way Up",
          link: "https://thiswayup.org.au/how-do-you-feel/worried/",
          description: "This article talks about anxiety, and provides tips on how to cope with it."
        },
      ],
    }
    this.handleAddingNewArticleToList = this.handleAddingNewArticleToList.bind(this);
    this.handleAddingNewReviewToList = this.handleAddingNewReviewToList.bind(this);
  };

  componentDidMount() {
  fetch('https://obscure-tor-14240.herokuapp.com/articles')
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
      <Footer/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
