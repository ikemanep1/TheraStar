import React from "react";
import PropTypes from "prop-types";

function Review(props){
  const reviewSingular = {
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
