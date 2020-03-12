import React from "react";
import Review from "./Review";
import PropTypes from 'prop-types';

function ReviewList(props){
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div style={itemGrid}>
    {props.reviewTotal.map((review, index) =>
      <Review name={review.name}
      subject={review.subject}
      rating={review.rating}
      content={review.content}
      key={index}/>
    )}
    </div>
  );
}

ReviewList.propTypes = {
  reviewTotal: PropTypes.array
};

export default ReviewList;
