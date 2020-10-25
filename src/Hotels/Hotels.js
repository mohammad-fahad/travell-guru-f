import React, { Component, useContext } from 'react';
import { UserContext } from '../App';
import Header from '../Header/Header';
import fake from './fake';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'








const Hotels = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const position = [51.505, -0.09]
const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
)

// render(map, document.getElementById('map-container'))

    
            return (
                <div>
                    <Header loggedInUser={loggedInUser} />
                    <div>
                        <p> 256 Stays in Sep 17th 8 guests </p>
                        <h4> <strong>Stay in Cox's Bazar</strong> </h4>
                        <div className="col-md-12 mt-5 flex">
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
                                 < div  >
                           
                        </div>
                      
                            
                       


                        </div>
                       


                        
                    </div>

                </div>
            )
                       
        };

        export default Hotels;