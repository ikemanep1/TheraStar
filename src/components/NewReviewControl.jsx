import React from 'react';
import ConfirmationAdd from './ConfirmationAdd';
import ReviewAdd from './ReviewAdd';
import PropTypes from "prop-types";

class NewReviewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.AddConfirmation = this.AddConfirmation.bind(this);
  }

  AddConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <ReviewAdd onNewReviewCreation={this.props.onNewReviewCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationAdd onAddConfirmation={this.AddConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewReviewControl.propTypes = {
  onNewReviewCreation: PropTypes.func
};

export default NewReviewControl;
