import React from "react";
import Review from "./Review";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function ReviewList(props){
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
       <div style={itemGrid}>
         {props.reviewTotal.map((review) =>
           <Review name={review.name}
             subject={review.subject}
             rating={review.rating}
             content={review.content}/>
         )}
       </div>
     );
}

ReviewList.propTypes = {
  reviewTotal: PropTypes.array
};

export default ReviewList;
