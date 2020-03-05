import React from "react";
import PropTypes from "prop-types";

function Article(props){
  const articleSingular = {
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
    <div style={articleSingular}>
    <p>Article: {props.name}</p>
    <ul>
      <p>Read it here: {props.link}</p>
      <p>About this article: {props.description}</p>
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
