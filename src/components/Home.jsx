import React from "react";
import {Button} from 'react-bootstrap';

function Home(){
    const introStyles = {
        margin: '40px',
    textAlign: 'center',
    backgroundColor: '#c06cc6',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Comic Sans MS',
    color: '#fdfdff',
      }
  return (
    <div>
        <p style={introStyles}>Welcome to TheraStar. This is a place for people who are in search of help. If you are looking for tips on self care, financial welfare, and/or are curious about how to be emotionally supportive of friends and family, the resources page contains links to informative articles.</p>
    </div>
  );
}

export default Home;