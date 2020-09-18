import React, { Component, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../App';
import Header from '../Header/Header';
import img1 from '../Image/Rectangle 26.png';
import img2 from '../Image/Rectangle 27.png';
import img from '../Image/Rectangle 28.png';
import GoogleMapReact from 'google-map-react';

// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
// } from "google-maps-react";
import fake from './fake';






const Hotels = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    // <GoogleMap
    //     defaultZoom={8}
    //     defaultCenter={{ lat: -34.397, lng: 150.644 }}
    // >
    //     <Marker
    //         position={{ lat: -34.397, lng: 150.644 }}
    //     />
    // </GoogleMap>
    // ));
    // const AnyReactComponent = ({ text }) => <div>{text}</div>;

    // class Map extends Component {
    //     static defaultProps = {
    //         center: {
    //             lat: 59.95,
    //             lng: 30.33
    //         },
    //         zoom: 11
    //     };

    //     render() {
            return (
                <div>
                    <Header loggedInUser={loggedInUser} />
                    <div>
                        <p> 256 Stays in Sep 17th 8 guests </p>
                        <h4> <strong>Stay in Cox's Bazar</strong> </h4>
                        <div className="col-md-8 mt-5 flex">
                            {
                                fake.map(info =>

                                    
                                    <div key={info.id} className="card mb-3" style={{ maxWidth: '800px' }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={info.HotelImg} className="card-img" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{info.HotelName}</h5>
                                                    <p className="card-text">{info.HotelBody}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                                 < div className="col-md-4 mt-4" >
                            <img src="https://joomly.net/frontend/web/images/googlemap/map.png" alt="" />
                            import React, {Component} from 'react';
                        </div>
                      

                       


                        </div>
                            {/* <div style={{ height: '550px', width: '80%', margin: "auto", marginTop: "40px" }}>
                                 <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPYKRuuKoZkLIc_wFppGepgKnPOlR5h9w&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                            {/* </div> */}


                        
                    </div>

                </div>
            )
                        // }
                    // }
        };

        export default Hotels;