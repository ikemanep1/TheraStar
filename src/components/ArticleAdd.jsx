import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { v4 } from 'uuid';

function ArticleAdd(props) {
  let _name = null;
  let _link = null;
  let _description = null;

  function handleNewArticleSubmission(event) {
    event.preventDefault();
    props.onNewArticleCreation({name: _name.value, link: _link.value, description: _description.value});
    _name.value = '';
    _link.value = '';
    _description.value = '';
  }
  const articleFormStyles = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#c06cc6',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'luminari, fantasy',
    color: '#fdfdff',
  }
  const buttonColors = {
    marginLeft: '10px',
    border: "3px solid #fff285",
    color: "white",
    backgroundColor: "#7a387a",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  const inputStyles = {
    margin: '10px'
  }
  return (
    <div style={articleFormStyles}>
    <form onSubmit={handleNewArticleSubmission}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Article Name'
    ref={(input) => {_name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Article URL'
    ref={(input) => {_link = input;}}/>
    <input style={inputStyles}
    type='text'
    id='description'
    placeholder='Article Description'
    ref={(input) => {_description = input;}}/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
      </form>
    </div>
  );
}

ArticleAdd.propTypes = {
  onNewArticleCreation: PropTypes.func
};

export default ArticleAdd;
