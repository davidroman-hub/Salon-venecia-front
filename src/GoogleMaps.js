
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
            <a className='map' target='_blank' rel='noopener noreferrer' href="https://www.google.com/maps/place/Salon+Venecia/@19.2650061,-99.1223091,17z/data=!3m1!4b1!4m5!3m4!1s0x85ce01407bbdcea5:0x1ec615b202153404!8m2!3d19.2650061!4d-99.1201204">
                <i class="fas fa-map-marker-alt map"/>Salón Venecia
            </a>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;


