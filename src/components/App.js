
import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <Router>
       
      <Link to="/">Home</Link>
      <br></br>
        <Link to="/about">About</Link>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
         </Router>
    </div>
  )
}

export default App
