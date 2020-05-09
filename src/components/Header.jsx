import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../img/logo.png';

function Header(){
  const headerStyle = {
    backgroundColor: "#ffccff",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderBottom: '3px solid #ddb0dd',
    color: '#cc6699',
    fontSize: "20px",
    borderBottomRightRadius: '100px',
    borderBottomLeftRadius: '100px',
  }
  const navButtons = {
    display: 'flex',
    justifyContent: 'center',
  }
  const logoStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
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
    <div>
    <div style={headerStyle}>
    <div style={navButtons} className="nav-links">
    <Link to="/"><Button style={buttonColors}>Home</Button></Link>
    <Link to="/mhplist"><Button style={buttonColors}>Therapists</Button></Link>
    <Link to="/articlelist"><Button style={buttonColors}>Resources</Button></Link>
    <Link to="/articleadd"><Button style={buttonColors}>Add article</Button></Link>
    <Link to="/reviewlist"><Button style={buttonColors}>Reviews</Button></Link>
    <Link to="/reviewadd"><Button style={buttonColors}>Provide Feedback</Button></Link>
    </div>
    </div>
    <div style={logoStyles}>
    <img src={logo} alt="Logo" />
    </div>
    </div>
  );
}

export default Header;
