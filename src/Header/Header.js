import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Logo.png';
import background from '../Image/Rectangle 1.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
           
            <Navbar className="navbar navbar-expand navbar-transparent bg-transparent py-2 fixed-to" variant="light">
                <Navbar.Brand href="/home"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="d-flex " href="/home">
                        <img style={{ width: '15%' }} src={logo} alt="logo" />
                        <Form inline className="ml-5">
                            <FormControl type="text" placeholder="Search" className="m-0" />
                        </Form>
                    </Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <h4>{loggedInUser.name }</h4>
                </Nav>
                <Link to="/login">
                    <Button variant="warning">Login</Button>
                </Link>

            </Navbar>


        </div>
    );
};

export default Header;