import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import DatePicker from "react-datepicker";


const Booking = (props) => {
    const {id} = useParams();
    const { name, details, background } = props.information[id];
    const [startDate, setStartDate] = useState(new Date("2020/01/01"));
    const [endDate, setEndDate] = useState(new Date("2020/02/10"));
    console.log(props);

    // const data = information;
    // data.find(place => place.id === id)
    // console.log(data[id].id)
    

    return (
        <div>
            <Header />
            <img className="bg" src={background} alt="" />
            <div className="d-flex">
                <div className="col-md-6">

                    <h1 style={{ fontSize: '70px' }}>Welcome to {name}</h1>
                    <p style={{ fontSize: '20px' }}>{details}</p>



                </div>
                <div className="col-md-4 form ml-5">

                    <Form className="bg-light p-5">
                        <Form.Group controlId="formBasicOrigin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" placeholder="Your Origin" />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicDestination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Your Destination" />
                        </Form.Group>
                        <Form.Group className=" d-flex m-5">
                            <p>From</p> <br/>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                isClearable
                                startDate={startDate}
                                endDate={endDate}
                            /> <br />
                            <p>Till</p> <br/>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                isClearable
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </Form.Group>
                        <Link to="/hotels">
                        <Button variant="warning" type="submit" className="form-control">
                            Start Booking
                        </Button>
                        </Link>
                        
                    </Form>
                </div >
            </div>
        </div>
    );
};

export default Booking;