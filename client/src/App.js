import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./pages/Temp.js";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Browse from "./components/Browse"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/business/:id" component={Temp} />          
        <Footer />
      </div>
    </Router>
  );
}

export default App;
