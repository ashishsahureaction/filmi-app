import React from "react";
import { BrowserRouter as Router, Link, Route, NavLink, Routes } from 'react-router-dom';
import Home from "./component/Home/Home"
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import "./App.scss";


function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails/>} />
            <Route element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <Home/>
    </div>
  );
}

export default App;