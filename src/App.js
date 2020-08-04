import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./pages/Temp.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Browse from "./pages/Browse"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={LandingPage} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
