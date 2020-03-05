import React from "react";
import Article from "./Article";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function ArticleList(props){
  const articleIntro = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#c06cc6',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'luminari, fantasy',
    color: '#fdfdff',
  }
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
       <div>
       <div className="intro" style={itemGrid}>
         {props.articleTotal.map((article) =>
           <Article name={article.name}
             description={article.description}
             link={article.link}/>
         )}
       </div>
       </div>
     );
}

ArticleList.propTypes = {
  articleTotal: PropTypes.array
};

export default ArticleList;
