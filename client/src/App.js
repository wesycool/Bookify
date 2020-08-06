import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Modal from "./components/Modal.js";
import Temp from "./pages/Temp.js";
import Business from "./pages/Businesspage.js";
import AboutUs from "./pages/AboutUs.js";
import TermsCondition from "./pages/TermsCondition.js";



function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/business/:id" component={Temp} />
        <Route exact path="/newbusiness/" component={Business} />
        <Route exact path="/aboutus/" component={AboutUs} />  
        <Route exact path="/termscondition/" component={TermsCondition} />               


        <Footer />
        <Modal />
      </div>
    </Router>
  );
}

export default App;
