import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./pages/Temp.js";
<<<<<<< HEAD
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Browse from "./components/Browse";
// import Usersignup from "./components/Usersignup"
=======
import Business from "./pages/Businesspage.js";
import Navbar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
>>>>>>> develop


function App() {
  return (
    <Router>
      <div>
        {/* <Usersignup /> */}
        <Navbar />
<<<<<<< HEAD
        <Wrapper>
          <Route exact path="/" component={Browse} />
        </Wrapper> 
=======

        <Route exact path="/business/:id" component={Temp} />
        <Route exact path="/newbusiness/" component={Business} />             

>>>>>>> develop
        <Footer />
      </div>
    </Router>
  );
}

export default App;
