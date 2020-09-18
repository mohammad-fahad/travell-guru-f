import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Logo.png';
import background from '../Image/Rectangle 1.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { handleSignOut } from '../Login/loginManager';



const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, signOut] = useContext(UserContext);
   
    return (
        <div >
           
            <Navbar className="navbar navbar-expand navbar-transparent bg-transparent " variant="light">
                <Navbar.Brand href="/home"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="d-flex " href="/home">
                        <img style={{ width: '13%' }} src={logo} alt="logo" />
                        <Form inline className="ml-5">
                            <FormControl type="text" placeholder="Search" className="m-0" />
                        </Form>
                    </Nav.Link>
                    <Nav.Link >News</Nav.Link>
                    <Nav.Link >Blog</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link >Destination</Nav.Link>
                    <br/> <br/>
                    <h4>{loggedInUser.name }</h4>
                </Nav>
                <Link to="/login">
                    <Button variant="warning" onClick={signOut}> { !loggedInUser.name ? "Sign In" : "Sign Out" } </Button>
                </Link>

            </Navbar>


        </div>
    );
};

export default Header;