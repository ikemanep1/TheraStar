import React from "react";
import {Button} from 'react-bootstrap';

function Footer(){
  const footerStyle = {
    backgroundColor: "#ffccff",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    color: '#cc6699',
    fontSize: "20px",
    marginTop: '20%',
    marginBottom: '0%',
    height: '20%',
    position: 'relative',
    borderTopRightRadius: '100px',
    borderTopLeftRadius: '100px',
    borderTop: '3px solid #ddb0dd',
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
    <div style={footerStyle}>
    <a href={`https://facebook.com`} ><Button style={buttonColors}>Facebook</Button></a>
    <a href={`https://twitter.com`} ><Button style={buttonColors}>Twitter</Button></a>
    <a href={`https://instagram.com`} ><Button style={buttonColors}>Instagram</Button></a>
    </div>
  );
}

export default Footer;
