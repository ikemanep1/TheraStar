import React from "react";
import Review from "./Review";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function ReviewList(props){
  const reviewIntro = {
  }
  const introStyles = {
  }
  const navButtons = {
  }
  return (
       <div>
       <div className="intro" style={introStyles}>
       </div>
         {props.reviewTotal.map((review) =>
           <Review name={review.name}
             subject={review.subject}
             rating={review.rating}
             content={review.content}/>
         )}
         <div style={reviewIntro}>
         </div>
       </div>
     );
}

ReviewList.propTypes = {
  reviewTotal: PropTypes.array
};

export default ReviewList;
