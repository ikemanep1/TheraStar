import React from "react";

function Header(){
  const headerStyle = {
    marginLeft: "10px",
    marginRight: "20px",
    border: "3px solid #ff751a",
    color: "white",
    backgroundColor: "grey",
    padding: "5px;",
    textDecoration: 'none'
  }
  return (
    <div style={headerStyle}>
    <p>I truly believe in myself</p>
    </div>
  );
}

export default Header;
