import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

    render() {
        return (
            <Map google={this.props.google} zoom={14} center
                 initialCenter={{
                     lat: -15.7940678,
                     lng: -47.8850997,
                }}
                 center={{
                     lat: this.props.lat,
                     lng: this.props.lng
                 }}
                 style={style}>

                <Marker
                        name={'Endereço atual'}
                        position={{
                            lat: this.props.lat,
                            lng: this.props.lng
                        }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHvglpCXdT3GC5XSvOW7ptgvJoSR2FUzA'
})(MapContainer)

const style = {
    width: '100%',
    height: '500px'
};
