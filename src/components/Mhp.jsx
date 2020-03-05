import React from "react";
import PropTypes from "prop-types";

function Mhp(props){
  const articleSingular = {
  }
  return (
    <div style={articleSingular}>
    <p>{props.name}</p>
    <ul>
      <p> {props.occupation}</p>
      <p> {props.address}</p>
      <p> {props.insurance}</p>
      <p> {props.accepting}</p>
      <p> {props.email}</p>
      <p> {props.phone}</p>
      <p> {props.bio}</p>
      <p> {props.link}</p>
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
