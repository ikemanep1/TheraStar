import React from "react";

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
  return (
    <div style={headerStyle}>
    <h1>Thera Star</h1>
    <p> Don't give up, Help is within reach </p>
    </div>
  );
}

export default Header;
