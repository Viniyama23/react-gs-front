import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Homelog from './Components/HomeLog';
import Footer from './Components/Footer';

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={isLoggedIn ? <Homelog /> : <Registration />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
