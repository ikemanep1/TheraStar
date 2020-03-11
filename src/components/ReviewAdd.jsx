import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

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
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#c06cc6',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'luminari, fantasy',
    color: '#fdfdff',
  }
  const buttonColors = {
    marginLeft: '10px',
    border: "3px solid #fff285",
    color: "white",
    backgroundColor: "#7a387a",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  const inputStyles = {
    margin: '10px'
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
    <Button style={buttonColors} type='submit'>Submit!</Button>
      </form>
    </div>
  );
}

ReviewAdd.propTypes = {
  onNewReviewCreation: PropTypes.func
};

export default ReviewAdd;
