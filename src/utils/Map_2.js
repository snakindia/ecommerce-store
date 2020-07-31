import React, { Component } from 'react';
import GoogleMapReact, { InfoWindow, Markerss } from 'google-map-react';
import MyGreatPlaceWithStick from './my_great_place_with_stick.jsx';
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {text}
  </div>
);

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 2,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB1Bndnjywbdbg4mxA86S-nEgxAVEC4zN0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MyGreatPlaceWithStick
            lat={59.955413}
            lng={30.337844}
            text={'A'}
            zIndex={2}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
