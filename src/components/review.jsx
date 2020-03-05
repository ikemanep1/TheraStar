import React from "react";
import PropTypes from "prop-types";

function Review(props){
  const reviewSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'luminari, fantasy',
    color: '#fdfdff'
  }
  return (
    <div style={reviewSingular}>
    <p>{props.name}</p>
    <ul>
      <p> {props.subject}</p>
      <p> {props.rating}</p>
      <p> {props.content}</p>
    </ul>
  </div>
   );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


export default Review;
