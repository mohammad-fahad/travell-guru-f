import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import Booking from './Booking/Booking';
import sazek from './Image/Sajek.png';
import sreemangal from './Image/Sreemongol.png';
import sundarban from './Image/sundorbon.png';
import Hotels from './Hotels/Hotels';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import context from 'react-bootstrap/esm/AccordionContext';
import "react-datepicker/dist/react-datepicker.css";



export const information = [
  {
      id: 0,
      name: "Cox's Bazar",
      details: "Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. ... The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the 'longest natural unbroken sea beach' in the world.",
      img: sazek,
      background: "https://i.pinimg.com/originals/1c/8a/a8/1c8aa8f0201a754b5a7dfd82ec7b6371.jpg"
  },
  {
      id: 1,
      name: "Sreemangal",
      details: "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal. The terraced tea gardens, plantations and evergreen hills of sreemangal are wonderful treats for the tourists. ",
      img: sreemangal,
      background:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRROv09xumg6YLiCDrJ7K6B60rWU9GzxMog2Q&usqp=CAU"
  },
  {
      id: 2,
      name: "Sundarban",
      details: "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
      img: sundarban,
      background:"http://downloadwallpapers-net.s3.amazonaws.com/sundarban-largest-mangrove-forest.jpg"
  }
]
export const UserContext = createContext();
function App() {
const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Home information={information}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking/:id">
            <Booking information={information} />
          </Route>
          <PrivateRoute path="/hotels">
            <Hotels  />
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
