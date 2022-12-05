import React, { useEffect, useRef, useState } from "react"
import Globe from "react-globe.gl";
import countriesData from '../../data/countries.json';


const WorldGlobe = () => {

  const labelClick = () => {
    alert('Hey')
  };

  return (
    <div>
        <Globe
          globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
          backgroundImageUrl="https://unpkg.com/three-globe@2.24.10/example/img/night-sky.png"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

          labelsData={countriesData.ref_country_codes}
          labelLat={d => d.latitude}
          labelLng={d => d.longitude}
          labelText={d => d.country}
          labelColor={() => 'rgba(89, 255, 0, 0.75)'}
          labelLabel={d => `
          <b>${d.country}</b <br />
          <p>Carbon Credit Points: ${d.numeric}</p>
          `}
          onLabelClick={labelClick}
        />
      
    </div>
  )
}

export default WorldGlobe