import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn } from '../Login/loginManager';
import googleLogo from '../Icon/google.png';
import fbLogo from '../Icon/fb.png';

const SignIn = () => {
    const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
  });
  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
          .then(res => {
              setUser(res);
              setLoggedInUser(res);
          })
  }
  const signOut = () => {
      handleSignOut()
      .then(res =>{
        setUser(res);
        setLoggedInUser(res);
      })
    }
  
    const fbSignIn = () => {
      handleFbSignIn()
      .then(res =>{
        setUser(res);
        setLoggedInUser(res);
      })
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if (e.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if (e.target.name === 'password') {
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if (isFieldValid) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
      if (newUser && user.email && user.password) {
  
      }
      if (!newUser && user.email && user.password) {
  
      }
      e.preventDefault();
    }
    return (
        <div>
            <Header />
            <Container style={{ marginTop: '150px' }}>

                <Form className="m-5"  >
                    <h1>Sign in</h1> <br /> <br />
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onblur={handleBlur} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onblur={handleBlur} type="password" placeholder="Password" /> <br />
                        <br />
                        <Button style={{ width: "100%" }} onClick={handleSubmit} variant="warning">Sign In</Button> <br /> <br />
                        <Link to="/login">
                            <p className="d-flex justify-content-center">Don't have an account?</p>
                        </Link>
                    </Form.Group>
                    <div className="d-flex">
                        <Button className="m-5" onClick={googleSignIn}><img style={{ width: "40px" }} src={googleLogo} alt="" /></Button> <br /> <br />
                        <Button className="m-5" onClick={fbSignIn}><img style={{ width: "40px" }} src={fbLogo} alt="" /></Button>
                    </div>
                </Form>
            </Container>
        </div>


    );
};

export default SignIn;