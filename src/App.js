import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import VenueSchedule from "./schedules/VenueSchedule";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/venues/:id" component={VenueSchedule} />
      <Route exact path="/venues" component={NotFound}/>
    </div>
    </Router>
    
  );
}

export default App;
