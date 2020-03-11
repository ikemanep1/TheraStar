import React from "react";
import Article from "./Article";
import PropTypes from 'prop-types';

function ArticleList(props){

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
