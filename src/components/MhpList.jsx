import React from "react";
import Mhp from "./Mhp";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function MhpList(props){
  const mhpIntro = {
  }
  const introStyles = {
  }
  const navButtons = {
  }
  return (
       <div>
       <div className="intro" style={introStyles}>
       </div>
         <p style={mhpIntro}>Welcome to TheraStar. This is a place for people who are in search of help.</p>
         {props.mhpTotal.map((mhp) =>
           <Mhp name={mhp.name}
                occupation={mhp.occupation}
                address={mhp.address}
                insurance={mhp.insurance}
                accepting={mhp.accepting}
                email={mhp.email}
                phone={mhp.phone}
                bio={mhp.bio}
                link={mhp.link}
                />
         )}
         <div style={mhpIntro}>
         </div>
       </div>
     );
}

MhpList.propTypes = {
  mhpTotal: PropTypes.array
};

export default MhpList;
