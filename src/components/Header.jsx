import React from "react";

function Header(){
  const headerColor = {
    backgroundColor: "#fef0ef",
  }
  const headerStyle = {
    color: "white",
    padding: "20px",
    textDecoration: 'none',
    height: '100px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderBottom: '2px solid #dac7c8',
    color: '#cc6699',
    fontSize: "20px",
  }
  return (
    <div style={headerColor}>
    <div style={headerStyle}>
    <h1>Thera Star</h1>
    <p> Help is on the way </p>
    </div>
    </div>
  );
}

export default Header;
