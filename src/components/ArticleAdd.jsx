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
    props.onNewArticleCreation({name: _name.value, type: _link.value, description: _description.value});
    _name.value = '';
    _link.value = '';
    _description.value = '';
  }
  const aleFormStyles = {
  }
  const navButtons = {
  }
  const inputStyles = {
  }
  return (
    <div style={aleFormStyles}>
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
    <Button style={navButtons} type='submit'>Submit!</Button>
      </form>
    </div>
  );
}

ArticleAdd.propTypes = {
  onNewArticleCreation: PropTypes.func
};

export default ArticleAdd;
