import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./pages/Temp.js";
import Business from "./pages/Businesspage.js";
import Navbar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Newbusinesspage from "./pages/Newbusinesspage";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/business/:id" component={Temp} />
        <Route exact path="/Newbusinesspage/" component={Newbusinesspage} />             

        <Footer />
      </div>
    </Router>
  );
}

export default App;
