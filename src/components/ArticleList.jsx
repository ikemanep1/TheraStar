import React from "react";
import Article from "./Article";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function ArticleList(props){
  const articleIntro = {
  }
  const introStyles = {
  }
  const navButtons = {
  }
  return (
       <div>
       <div className="intro" style={introStyles}>
       </div>
         {props.articleTotal.map((article) =>
           <Article name={article.name}
             description={article.description}
             link={article.link}/>
         )}
         <div style={articleIntro}>
         </div>
       </div>
     );
}

ArticleList.propTypes = {
  articleTotal: PropTypes.array
};

export default ArticleList;
