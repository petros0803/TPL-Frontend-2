import React from "react";
import GoogleMapReact from "google-map-react";
import "./googleMaps.scss";
import LocationPin from "./LocationPin";

const GoogleMaps = ({ location }) => {
  return (
    <div
      style={{ height: "230px", width: "95%", margin: "15px auto" }}
      className="google-maps--container"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDW6XspRngE7-491ny_1q_vW6EdFB_rlaE" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
