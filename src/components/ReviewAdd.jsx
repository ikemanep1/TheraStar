import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { v4 } from 'uuid';

function ReviewAdd(props) {
  let _name = null;
  let _subject = null;
  let _rating = null;
  let _content = null;


  function handleNewReviewSubmission(event) {
    event.preventDefault();
    props.onNewReviewCreation({name: _name.value, subject: _subject.value, rating: _rating.value, content: _content.value});
    _name.value = '';
    _subject.value = '';
    _rating.value = '';
    _content.value = '';
  }
  const reviewFormStyles = {
  }
  const navButtons = {
  }
  const inputStyles = {
  }
  return (
    <div style={reviewFormStyles}>
    <form onSubmit={handleNewReviewSubmission}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Your Name'
    ref={(input) => {_name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='subject'
    placeholder='What are you reviewing?'
    ref={(input) => {_subject = input;}}/>
    <input style={inputStyles}
    type='text'
    id='rating'
    placeholder='Review Rating (1-5)'
    ref={(input) => {_rating = input;}}/>
    <input style={inputStyles}
    type='text'
    id='content'
    placeholder='Review Content'
    ref={(input) => {_content = input;}}/>
    <Button style={navButtons} type='submit'>Submit!</Button>
      </form>
    </div>
  );
}

ReviewAdd.propTypes = {
  onNewReviewCreation: PropTypes.func
};

export default ReviewAdd;
