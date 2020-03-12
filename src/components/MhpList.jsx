import React from "react";
import Mhp from "./Mhp";
import PropTypes from 'prop-types';

function MhpList(props){
  const mhpIntro = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#c06cc6',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Comic Sans MS',
    color: '#fdfdff',
  }
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div>
    <p style={mhpIntro}>Welcome to TheraStar. This is a place for people who are in search of help. If you are looking for tips on self care, financial welfare, and/or are curious about how to be emotionally supportive of friends and family, the resources page contains links to informative articles. Below is a list of mental health practitioners local to Portland, Oregon, along with contact details and other useful information. For a list of people's experiences with listed articles and practitioners, visit the reviews page. Feel free to leave feedback!</p>
    <div style={itemGrid}>
    {props.mhpTotal.map((mhp, index) =>
      <Mhp name={mhp.name}
      occupation={mhp.occupation}
      address={mhp.address}
      insurance={mhp.insurance}
      accepting={mhp.accepting}
      email={mhp.email}
      phone={mhp.phone}
      bio={mhp.bio}
      link={mhp.link}
      key={index}
      />
    )}
    </div>
    </div>
  );
}

MhpList.propTypes = {
  mhpTotal: PropTypes.array
};

export default MhpList;
