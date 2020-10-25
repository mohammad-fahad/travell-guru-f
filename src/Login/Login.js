import React, { useState } from 'react';
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './loginManager';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import googleLogo from '../Icon/google.png';
import fbLogo from '../Icon/fb.png';



function Login() {
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
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
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
    e.preventDefault();
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    
  }


  return (
    <div>
      <Header newUser={newUser} signOut={signOut} />
      <hr />
      <Container style={{ marginTop: '150px' }}>

        <Form className="m-5"  >
          <h1> {!newUser ? 'Creat an account' : 'Login'} </h1> <br /> <br />
          {!newUser ?
            <Form.Group controlId="formGroupName">

              <Form.Label>Name</Form.Label>
              <Form.Control type="name" name="name" onBlur={handleBlur} placeholder="Enter Name" />

            </Form.Group> : ''}
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onBlur={handleBlur} placeholder="Enter email" />
          </Form.Group>

          <Form.Group >

            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Password" /> <br />
           


            <Button style={{ width: "100%" }} variant="warning" onClick={handleSubmit}> {!newUser ? 'Create an Account' : 'Sign In'}</Button> <br /> <br />

            <p className="d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => setNewUser(!newUser)} > {!newUser ? 'Already have an account?' : 'Create a new account?'}</p>

            <div className="d-flex" style={{ alignItems: 'center' }}>
              <h5 >Or sign in with google or facebook --></h5>
              <Button className="m-5" variant="light" onClick={googleSignIn}><img style={{ width: "40px" }} src={googleLogo} alt="" /></Button> <br /> <br />
              <Button className="m-5" variant="light" onClick={fbSignIn}><img style={{ width: "40px" }} src={fbLogo} alt="" /></Button>
            </div>

          </Form.Group>
        </Form>

      </Container>
    </div >


  );
};

export default Login;