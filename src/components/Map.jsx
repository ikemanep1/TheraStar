import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from '../mapStyles';

function Map(props){
  const introStyles = {
    margin: '25px',
textAlign: 'center',
backgroundColor: '#7a387a',
padding: '20px',
borderRadius: '100px',
border: '3px solid #ddb0dd',
fontFamily: 'Comic Sans MS',
color: '#fdfdff',
  }

  // Map logic
  
  const [selectedMhp, setSelectedMhp] = useState(null);
  const markers = props.mhpTotal;
  const GoogleMapExample = withGoogleMap((props, index) => (
    
    <GoogleMap
    defaultCenter = { { lat: 45.5051, lng: -122.6750 } }
    defaultZoom = { 13 }
    defaultOptions={{ styles: mapStyles }}
       >
         
         {markers.map((marker, index) =>
      <Marker
      key={index}
      position={{
        lat: parseInt(marker.latitude),
        lng: parseInt(marker.longitude)
      }}
      
          onClick={() => {
            setSelectedMhp(marker);
            console.log(selectedMhp);
          }}
          icon={{
            url: `/Icon.png`,
            scaledSize: new window.google.maps.Size(50, 50)
          }}
          />
          )}
              {selectedMhp && (
                <InfoWindow
                key={index}
                  onCloseClick={() => {
                    setSelectedMhp(null);
                  }}
                  position={{
                    lat: parseInt(selectedMhp.latitude),
                    lng: parseInt(selectedMhp.longitude)
                  }}
                >
                  <div>
                    <img source={selectedMhp.imgref} alt="image"/>
                    <p>{selectedMhp.name}</p>
                  </div>
                </InfoWindow>
            )}
       </GoogleMap>
    ));
    
    return( 
      <div>
        <p style={introStyles}>Welcome to TheraStar, a place for people who are in search of help. TheraStar is an expanding database for mental health practitioners in the Portland, Oregon area (and beyond). The list is present on the next page, and all entries are present on the map below. If you are looking for tips on self care, financial welfare, and/or are curious about how to be emotionally supportive of friends and family, the resources page contains links to informative articles.</p>
         <GoogleMapExample
           containerElement={ <div style={{ height: `600px`, borderRadius: '100px', border: '3px solid #ddb0dd', marginLeft: '10%', marginRight: '10%', width: '80%', backgroundColor: '#7a387a', display: 'flex', alignItems: 'center' }} /> }
           mapElement={ <div style={{ height: `500px`, borderRadius: '100px',
           border: '3px solid #ddb0dd', margin: '10%', padding: '50px', width: '100%', display: 'flex', alignItems: 'center' }} /> }
           />
           <div style={introStyles}>
             <h5>COVID-19:</h5>
             <p>Due to the virus, many therapists are unavailable or only accepting clients virtually. Availability may vary. With quarantine in place, self care has become especially vital.<span><a> Click here </a></span>for tips to feel better in self isolation.</p>
           </div>
       </div>
    );
    }
 export default Map;