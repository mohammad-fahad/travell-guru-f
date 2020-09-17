import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const SignIn = () => {
    return (
            <div>
                <Header />
                <Container style={{marginTop: '150px'}}>
                
                <Form className="m-5"  >
                <h1>Sign in</h1> <br/> <br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" /> <br/>
                         <br/>
                        <Button style={{width:"100%"}}  variant="warning">Sign In</Button> <br/> <br/>
                       <Link to="/login">
                       <p className="d-flex justify-content-center">Don't have an account?</p>
                       </Link>
                    </Form.Group>
                </Form>
                </Container>
            </div>
            
        
    );
};

export default SignIn;