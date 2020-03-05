import React from "react";
import PropTypes from "prop-types";

function Article(props){
  const articleSingular = {
  }
  return (
    <div style={articleSingular}>
    <p>{props.name}</p>
    <ul>
      <p>Price per unit: {props.link}</p>
      <p>Alcohol content: {props.description}</p>
    </ul>
  </div>
   );
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Article;
