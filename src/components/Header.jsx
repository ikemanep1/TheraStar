import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Header(){
  const headerStyle = {
    backgroundColor: "#fef0ef",
    color: "white",
    padding: "20px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderBottom: '2px solid #dac7c8',
    color: '#cc6699',
    fontSize: "20px",
  }
  const navButtons = {
  marginLeft: "10px",
  marginRight: "20px",
  border: "3px solid #ffccff",
  color: "white",
  backgroundColor: "#cc0099",
  padding: "5px;",
  textDecoration: 'none'
}
  return (
    <div style={headerStyle}>
    <h1>Thera Star</h1>
    <p> Don't give up, Help is within reach </p>
    <table className="nav-links">
           <Link to="/"><Button style={navButtons}>Home</Button></Link>
           <Link to="/footer"><Button style={navButtons}>Add Drink</Button></Link>
           <Link to="/footer"><Button style={navButtons}>Client Praise</Button></Link>
      </table>
    </div>
  );
}

export default Header;
