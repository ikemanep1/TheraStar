import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function ConfirmationAdd(props){
  const confirm = {
  }
  const navButtons = {
  }
  return (
    <div style={confirm}>
    <h1>Please note:</h1>
      <p>Articles listed on TheraStar are for people who are in need of help. Poorly written articles, or articles that provide false information could be harmful to viewers. Please ensure that your contribution is helpful, truthful, and promotional of safety and self care.</p>
      <p>If you are adding a review to the site, please make sure that it is appropriate and promotional of safety, self care, and inclusion. Reviews with harmful language will be removed.</p>
      <Button style={navButtons} onClick={props.onAddConfirmation}>I understand.</Button>
    </div>
  );
}

ConfirmationAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationAdd;
