import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import img from "../src/images/vw.jpg";
import Home from "./components/Desktop/Home.js"
import About from './components/Desktop/About';
import Cards from './components/Desktop/Cards';
import Todos from './components/Desktop/Todos';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
            <div>
          <img src={img} alt="Bellurbis" className="aboutAvatar" />
          {/* <button className='loginPage'>hello</button> */}
        </div>
  
    {/* <div style={{position: "absolute",top: "20%",left: "35%"}}> */}

      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/cards">
            <Cards/>
          </Route>
          <Route path="/todos">
            <Todos/>
          </Route>
          
        </Switch>
      </Router>
    {/* </div> */}
    </>
  );
}

export default App;
