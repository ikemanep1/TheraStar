import React from "react";

function Footer(){
  const footerStyle = {
    backgroundColor: "#ffccff",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderTop: '2px solid #dac7c8',
    color: '#cc6699',
    fontSize: "20px",
    marginTop: '100%',
    marginBottom: '0%',
    height: '20%',
    position: 'relative',
    borderTopRightRadius: '100px',
    borderTopLeftRadius: '100px'
  }
  return (
    <div style={footerStyle}>
    <p>keep going</p>
    </div>
  );
}

export default Footer;
