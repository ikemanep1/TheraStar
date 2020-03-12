import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Mhp(props){
  const mhpSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Comic Sans MS',
    color: '#fdfdff'
  }
  const buttonColors = {
    marginLeft: '10px',
    border: "3px solid #fff285",
    color: "white",
    backgroundColor: "#c06cc6",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={mhpSingular}>
    <p>{props.name}</p>
    <ul>
      <p>Field: {props.occupation}</p>
      <p>Office address: {props.address}</p>
      <p>Accepted forms of insurance: {props.insurance}</p>
      <p>Status: {props.accepting}</p>
      <p>Email Address: {props.email}</p>
      <p>Office Number: {props.phone}</p>
      <p>About: {props.bio}</p>
      <a href={props.link} ><Button style={buttonColors}>Website</Button></a>
    </ul>
  </div>
   );
}

Mhp.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  insurance: PropTypes.string.isRequired,
  accepting: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};


export default Mhp;
