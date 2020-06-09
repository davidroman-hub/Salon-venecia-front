
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import './Home.scss'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.26,
      lng: -99.12
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.2650061}
            lng={-99.1201204}
            text={
            <a className='map' target='_blank' rel='noopener noreferrer' href="https://www.google.com/maps/place/Marisqueria+Mar+y+Sol/@19.3453338,-99.2358903,12z/data=!4m19!1m13!4m12!1m4!2m2!1d-99.1209378!2d19.2471942!4e1!1m6!1m2!1s0x85d1f8b63a4379b7:0x9de1cdfe1a41521d!2scevicheria+mar+y+sol!2m2!1d-99.1686499!2d19.4395591!3m4!1s0x85d1f8b63a4379b7:0x9de1cdfe1a41521d!8m2!3d19.4395591!4d-99.1686499">
                <i class="fas fa-map-marker-alt map"/>Salón Venecia
            </a>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;


