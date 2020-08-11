import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Modal from "./components/Modal.js";
import Temp from "./pages/Temp.js";
import Business from "./pages/Newbusinesspage.js";
import Dashboard from "./pages/Dashboard.js";
import AboutUs from "./pages/AboutUs.js";
import SignUpPage from "./pages/SignUpPage.js";
import TermsCondition from "./pages/TermsCondition.js";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/dashboard/:account/:id" component={Dashboard} />

        <Route exact path="/business/:id" component={Temp} />
        <Route exact path="/newbusiness" component={Business} />
        <Route exact path="/signuppage" component={SignUpPage} />  
        <Route exact path="/aboutus" component={AboutUs} />  
        <Route exact path="/termscondition" component={TermsCondition} />          

        <Footer />
        <Modal />
      </div>
    </Router>
  );
}

export default App;
