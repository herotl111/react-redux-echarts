import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
    const markers = props.markers.map((position,index)=>
      <Marker key={index} position={{ lat: position.lat, lng: position.lng }} />
    );

    return (<GoogleMap
      defaultZoom={3}
      center={props.center}
    >{markers}
    </GoogleMap>);
  }
))

class Map extends Component {
  render(){
    return <MyMapComponent
    center = {this.props.center}
    markers = {this.props.markers} 
    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `300px` }} />}
    mapElement={<div style={{ height: `100%` }} />}/>
  }
}


export default Map;
