import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../App';
import Header from '../Header/Header';
import img1 from '../Image/Rectangle 26.png';
import img2 from '../Image/Rectangle 27.png';
import img from '../Image/Rectangle 28.png';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
// } from "react-google-maps";






const Hotels = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         <Marker
//             position={{ lat: -34.397, lng: 150.644 }}
//         />
//     </GoogleMap>
// ));
    return (
        <div>
            <Header loggedInUser={loggedInUser} />
            <div className="d-flex">
                <div className="col-md-8 mt-5">
                    <p> 256 Stays in Sep 17th 8 guests </p>
                    <h4> <strong>Stay in Cox's Bazar</strong> </h4>
                    <Card className="d-flex m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="d-flex m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="d-flex m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mt-5">
                    {/* <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPYKRuuKoZkLIc_wFppGepgKnPOlR5h9w&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                </div>
            </div>

        </div>
    );
};

export default Hotels;